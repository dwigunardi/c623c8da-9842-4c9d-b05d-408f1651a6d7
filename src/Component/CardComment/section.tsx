"use client";
import { SendIcon } from "@/Assets/Icon/SendIcond";
import { SpinnerIcon } from "@/Assets/Icon/SpinnerIcon";
import { CommentData } from "@/utils/typing";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  User,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

export const UserComment = (props: {
  dataComment: { comments: any};
  handleForm: any;
}) => {
  const { dataComment, handleForm } = props;
  const [value, setValue] = useState("");
  const [state, formAction] = useFormState(
    handleForm,
    dataComment.comments || []
  );
  const { pending, data, method, action } = useFormStatus();
  return (
    <div className="overflow-y-auto">
      <Card className="dark:bg-transparent py-5 overflow-y-auto" shadow="lg">
        <CardHeader className="block">
          <h1 className="text-3xl font-bold text-left">Comment</h1>
        </CardHeader>
        <div className="row max-h-screen overflow-y-auto mb-5 ml-2">
          {state.map((comment: CommentData, idx: number) => (
            <div key={idx} className="col-12 p-5">
              <User
                name={comment?.user?.username}
                description={
                  <p className="text-lg dark:text-white text-black">
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
                className="w-full"
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
                  isDisabled={pending}
                  isClearable
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                />
                <Button
                  type="submit"
                  className="w-full mt-4 font-bold dark:text-black text-white"
                  isLoading={pending}
                  spinner={<SpinnerIcon />}
                  color="primary"
                >
                  Submit
                </Button>
              </form>
            </CardBody>
          </Card>
        </div>
      </Card>
    </div>
  );
};
