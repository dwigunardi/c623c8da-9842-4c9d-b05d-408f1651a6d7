"use client";
import { LoveIcon } from "@/Assets/Icon/LoveIcon";
import { usePostData } from "@/Store";
import { PostApi, PostData } from "@/utils/typing";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { PostCard } from "./PostCard";
import LoadingRoute from "../LoadingRoute";

export default function PostDataDisplay({
  postData,
  query,
  currentPage,
}: {
  postData: PostApi;
  query?: string | undefined;
  currentPage?: number | string;
}) {
  const { initialPost } = usePostData((state) => state);
  const [loading, setLoading] = React.useState(false);
  const searchParams = useSearchParams();
  useEffect(() => {
    if (searchParams.has("query") && initialPost?.posts?.length === 0) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [initialPost, searchParams]);

  return (
    <div className="mt-20 row">
      {loading ? (
        <LoadingRoute height={"screen"} width={"full"} />
      ) : initialPost?.posts?.length > 0 ? (
        initialPost.posts?.map((post: PostData) => (
          <div key={post.id} className="sm:col-6 mb-5 h-[200px]">
            <PostCard
              body={post.body}
              id={post.id}
              title={post.title}
              tags={post.tags}
              reactions={post.reactions}
              userId={post.userId}
            />
          </div>
        ))
      ) : (
        postData.posts.map((post: PostData) => (
          <div key={post.id} className="sm:col-6 mb-5 h-[200px]">
            <PostCard
              body={post.body}
              id={post.id}
              title={post.title}
              tags={post.tags}
              reactions={post.reactions}
              userId={post.userId}
            />
          </div>
        ))
      )}
    </div>
  );
}
