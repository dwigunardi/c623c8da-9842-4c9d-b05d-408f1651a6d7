import { PostApi, PostData } from "@/utils/typing";
import { PostCard } from "./PostCard";
import { GetPostAll } from "@/ServerAction/getPost";

export default async function PostDataDisplay({
  query,
  currentPage,
}: {
  query?: string;
  currentPage?: number | string;
}) {
  const postData: PostApi = await GetPostAll(query || "");
  return (
    <div className="mt-20 grid grid-cols-12 mx-auto">
      {postData.posts.length === 0 ? (
        <h1 className="text-center text-red-700">Not Found</h1>
      ) : (
        postData.posts?.map((post: PostData, idx: number) => (
          <div
            key={idx}
            className="md:col-span-6 mb-5 h-[200px]"
          >
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
