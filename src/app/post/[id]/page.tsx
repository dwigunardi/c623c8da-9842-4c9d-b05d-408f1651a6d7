import React from "react";
import { SectionComment } from "../../../Component/Card/sectionComment";
import { getPostComment, getPostId } from "@/ServerAction/getPost";
import { SectionPostDetail } from "@/Component/Card/SectionPostDetail";
import { NotFound } from "@/Assets/Icon/NotFound";
import { CommentApi, PostData } from "@/utils/typing";
import BackButton from "@/Component/BackButton";

async function DetailPost({ params }: { params: { id: string } }) {
  const dataDetail: PostData = await getPostId(params.id);
  const dataComment: CommentApi = await getPostComment(params.id);

  return (
    <div>
      <BackButton />
      {dataDetail?.message ? (
        <div className="flex justify-center items-center">
          <NotFound width={200} height={200} />
        </div>
      ) : (
        <div className="row mt-5">
          <div className="col-8">
            <SectionPostDetail dataSource={dataDetail} />
          </div>
          <div className="col-4 max-h-[70vh]">
            <SectionComment dataComment={dataComment} postId={params.id} />
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailPost;
