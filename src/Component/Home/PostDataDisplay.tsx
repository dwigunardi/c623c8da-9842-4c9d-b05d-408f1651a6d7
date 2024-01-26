import { PostApi, PostData } from "@/utils/typing";
import { PostCard } from "./PostCard";
import { GetPostAll } from "@/ServerAction/getPost";
import { Divider, Pagination } from "@nextui-org/react";

export default async function PostDataDisplay({
  query,
  currentPage,
}: {
  query?: string;
  currentPage?: number | string;
}) {
  const postData: PostApi = await GetPostAll(query || "");
  return (
    <div className="row">
      <div className="flex justify-center mb-3">
        <Pagination
          total={postData.total / 10 <= 1 ? 1 : postData.total / 10}
          initialPage={Number(currentPage)}
          size="lg"
          showControls
          loop
        />
      </div>
      <Divider className="mb-5" />
      {postData.posts.length === 0 ? (
        <h1 className="text-center">Not Found</h1>
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
