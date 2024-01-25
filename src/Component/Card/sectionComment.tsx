"use client";
import { SendIcon } from "@/Assets/Icon/SendIcond";
import { SpinnerIcon } from "@/Assets/Icon/SpinnerIcon";
import { HandleComment } from "@/ServerAction/handleComment";
import { CommentApi, CommentData, PostApi, PostData } from "@/utils/typing";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  User,
} from "@nextui-org/react";
import React, { ReactNode, useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import {
  Controller,
  useForm,
} from "react-hook-form";

function SubmitButton(props: any) {
  const { disabled } = props;
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      className="w-full font-bold dark:text-black text-white"
      isLoading={pending}
      spinner={<SpinnerIcon />}
      color="primary"
      isDisabled={disabled}
    >
      {pending ? "Posting..." : "Post"}
    </Button>
  );
}

interface FormValues {
  comment: string;
  postId: number | string;
  userId: number | string;
}

export const SectionComment = ({
  dataComment,
  postId,
}: {
  dataComment: CommentApi;
  postId: number | string;
}) => {

  const [state, formAction] = useFormState(
    HandleComment as (prev: ReactNode, formData: FormData) => Promise<any[]>,
    dataComment.comments || []
  );
  const {
    control,
    resetField,
    formState: { errors, isDirty, isValid },
  } = useForm<FormValues>({
    defaultValues: {
      comment: "",
      postId: postId,
      userId: 1,
    },
    mode: "all",
  });

  return (
    <div className="overflow-y-auto">
      <Card className="dark:bg-transparent py-5 overflow-y-auto" shadow="lg">
        <CardHeader className="block">
          <h1 className="text-3xl font-bold text-left">Comment</h1>
        </CardHeader>
        <div className="row gap-3 max-h-screen overflow-y-auto mb-5 ml-2">
          {state?.map((comment: CommentData, idx: number) => (
            <div key={idx} className="col-12">
              <User
                name={comment?.user?.username}
                description={
                  <p className="text-lg font-bold dark:text-white hover-underline-animation">
                    {comment.body}
                  </p>
                }
                avatarProps={{
                  src: `https://i.pravatar.cc/150?img=${comment?.user?.id}`,
                  alt: "user image",
                  size: "lg",
                }}
              />
            </div>
          ))}
        </div>

        <div className="h-[15%] w-full flex justify-items-end items-end">
          <Card shadow="lg" className="w-full pb-2 border-2 dark:border-white">
            <CardBody>
              <form
                action={formAction}
                className="w-full flex flex-col gap-3"
                onSubmit={(e) =>
                  resetField("comment", {
                    keepDirty: false,
                    keepTouched: false,
                    defaultValue: "",
                  })
                }
              >
                <Controller
                  control={control}
                  name="comment"
                  rules={{ required: true, minLength: 5, maxLength: 20 }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="text"
                      variant={"bordered"}
                      label="Add Comment"
                      labelPlacement="outside"
                      placeholder="Press Enter To Send Comment"
                      endContent={
                        <SendIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                      }
                      isClearable
                      errorMessage={
                        (!isValid &&
                          errors.comment?.type === "required" &&
                          "Field is required") ||
                        (!isValid &&
                          errors.comment?.type === "minLength" &&
                          "Comment must be at least 5 characters") ||
                        (errors.comment?.type === "maxLength" && (
                          <p className="text-red-500">
                            Comment must be at most 20 characters
                          </p>
                        )) ||
                        (isDirty && (
                          <p className="text-white">
                            Comment must be at least 5 characters and is
                            Required
                          </p>
                        ))
                      }
                      isInvalid={
                        errors.comment?.type === "required" && !isValid
                      }
                    />
                  )}
                />

                <input type="hidden" value={postId} name="id" />
                <SubmitButton disabled={!isValid} />
              </form>
            </CardBody>
          </Card>
        </div>
      </Card>
    </div>
  );
};
