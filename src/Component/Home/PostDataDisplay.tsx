import { PostApi, PostData } from "@/utils/typing";
import { PostCard } from "./PostCard";
import { GetPostAll } from "@/ServerAction/getPost";
import { Divider, Pagination } from "@nextui-org/react";
import { NotFound } from "@/Assets/Icon/NotFound";

export default async function PostDataDisplay({
  query,
  currentPage,
  postData,
}: {
  query?: string;
  currentPage?: number | string;
  postData?: PostApi;
}) {
  return (
    <div className="row">
      <Divider className="mb-5" />
      {postData.posts.length === 0 ? (
        <div className="flex justify-center align-middle justify-items-center">
          <NotFound width={200} height={200} />
        </div>
      ) : (
        postData.posts?.map((post: PostData, idx: number) => (
          <div key={idx} className="md:col-6 mb-5 h-[250px]">
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
