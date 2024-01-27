import React from "react";
import { SectionComment } from "../../../Component/Card/sectionComment";
import { getPostComment, getPostId } from "@/ServerAction/getPost";
import { SectionPostDetail } from "@/Component/Card/SectionPostDetail";
import Link from "next/link";
import { NotFound } from "@/Assets/Icon/NotFound";
import { CommentApi, PostData } from "@/utils/typing";

async function DetailPost({ params }: { params: { id: string } }) {
  const dataDetail: PostData = await getPostId(params.id);
  const dataComment: CommentApi = await getPostComment(params.id);

  return (
    <div>
      <Link href={"/"} className="w-fit">
        <div className="w-fit h-10 bg-transparent border-1 border-primary cursor-pointer p-1 rounded-lg hover:bg-primary transition-all ease-in-out">
          <span className="text-lg text-center align-middle px-2 py-2">
            {`<-`} Back
          </span>
        </div>
      </Link>
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
