import React from "react";
import { SectionComment } from "../../../Component/Card/sectionComment";
import { getPostComment, getPostId } from "@/ServerAction/getPost";
import { SectionPostDetail } from "@/Component/Card/SectionPostDetail";

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
        <SectionPostDetail dataSource={dataDetail} />
      </div>
      <div className="col-4 max-h-[70vh]">
        <SectionComment dataComment={dataComment} handleForm={handleComment} />
      </div>
    </div>
  );
}

export default DetailPost;
