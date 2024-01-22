'use server'
import { PostApi } from "@/utils/typing";

export const GetPostAll = async () => {
  const res = await fetch("https://dummyjson.com/posts?limit=10", {
    cache: "no-cache",
    method: "GET",
    next: {
      tags: ["posts"],
    },
  });
  const data: PostApi = await res.json();
  return data;
};
