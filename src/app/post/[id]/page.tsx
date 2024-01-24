import React from "react";
import { SectionComment } from "../../../Component/Card/sectionComment";
import { getPostComment, getPostId } from "@/ServerAction/getPost";
import { SectionPostDetail } from "@/Component/Card/SectionPostDetail";

async function DetailPost({ params }: { params: { id: string } }) {
  const dataDetail = await getPostId(params.id);
  const dataComment = await getPostComment(params.id);
 
  return (
    <div className="row">
      <div className="col-8">
        <SectionPostDetail dataSource={dataDetail} />
      </div>
      <div className="col-4 max-h-[70vh]">
        <SectionComment dataComment={dataComment} postId={params.id} />
      </div>
    </div>
  );
}

export default DetailPost;
