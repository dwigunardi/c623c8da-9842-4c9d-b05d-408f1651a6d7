import { ThemeSwitcher } from "@/Component/ThemeSwitcher";
import React from "react";

interface PostData {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
}
interface PostApi {
  posts: PostData[];
  total: number;
  skip: number;
  limit: number;
}
async function HomePage() {
  const res = await fetch("https://dummyjson.com/posts?limit=10", {
    cache: "no-cache",
    method: "GET",
    next: {
      tags: ["posts"],
    },
  });
  const postData: PostApi = await res.json();
  //   console.log(postData);
  return (
    <div className="mt-5">
      <div className="text-3xl font-bold text-center">
        <h1>Posts</h1>
      </div>
      <ThemeSwitcher />
    </div>
  );
}

export default HomePage;
