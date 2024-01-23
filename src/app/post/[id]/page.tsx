import { SendIcon } from "@/Assets/Icon/SendIcond";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Input,
  User,
} from "@nextui-org/react";
import React from "react";
import { UserComment } from "../../../Component/CardComment/section";
import { getPostComment, getPostId } from "@/ServerAction/getPost";

async function DetailPost({ params }: { params: { id: string } }) {
  const dataDetail = await getPostId(params.id);
  const dataComment = await getPostComment(params.id);

  const handleComment = async (prev: any, formData: FormData) => {
    "use server";
    const data = {
      body: formData.get("comment"),
      postId: parseInt(params.id),
      userId: 1,
    };
    if (!data.body) return;

    const res = await fetch("https://dummyjson.com/comments/add", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const dataRes = await res.json();
    // revalidateTag("comments");
    return [...prev, dataRes];
  };

  return (
    <div className="row">
      <div className="col-8">
        <Card
          className="max-w-full h-full bg-transparent py-5 pl-5"
          shadow="lg"
        >
          <CardHeader className="block">
            <h1 className="text-3xl font-bold text-left">{dataDetail.title}</h1>
            {dataDetail.tags.map((tag: any) => (
              <Chip key={tag} className="mr-3 mt-3">
                {tag}
              </Chip>
            ))}
          </CardHeader>
          <CardBody>
            <div className="mb-5">
              <p>{dataDetail.body}</p>
            </div>
          </CardBody>
        </Card>
      </div>
      <div className="col-4 max-h-[70vh]">
        <UserComment dataComment={dataComment} handleForm={handleComment} />
      </div>
    </div>
  );
}

export default DetailPost;
