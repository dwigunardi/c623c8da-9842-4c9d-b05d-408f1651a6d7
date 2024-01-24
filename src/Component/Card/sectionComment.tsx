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

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      className="w-full font-bold dark:text-black text-white"
      isLoading={pending}
      spinner={<SpinnerIcon />}
      color="primary"
    >
      {pending ? "Posting..." : "Post"}
    </Button>
  );
}

export const SectionComment = ({
  dataComment,
  postId,
}: {
  dataComment: CommentApi;
  postId: number | string;
}) => {
  const [value, setValue] = useState("");
  const [state, formAction] = useFormState(
    HandleComment as (prev: ReactNode, formData: FormData) => Promise<any[]>,
    dataComment.comments || []
  );
  
  return (
    <div className="overflow-y-auto">
      <Card className="dark:bg-transparent py-5 overflow-y-auto" shadow="lg">
        <CardHeader className="block">
          <h1 className="text-3xl font-bold text-left">Comment</h1>
        </CardHeader>
        <div className="row gap-3 max-h-screen overflow-y-auto mb-5 ml-2">
          {
            state?.map((comment: CommentData, idx: number) => (
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
                onSubmit={(e) => setValue("")}
              >
                <Input
                  type="text"
                  variant={"bordered"}
                  value={value}
                  name="comment"
                  label="Add Comment"
                  labelPlacement="outside"
                  placeholder="Press Enter To Send Comment"
                  endContent={
                    <SendIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  isClearable
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                  isRequired={true}
                  errorMessage="Comment is required"
                  // isInvalid={value === ""}
                />
                <input type="hidden" value={postId} name="id" />
                <SubmitButton />
              </form>
            </CardBody>
          </Card>
        </div>
      </Card>
    </div>
  );
};
