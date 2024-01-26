"use server";
import { baseUrl } from "@/config/baseUrl";
import { PostApi } from "@/utils/typing";

export const GetPostAll = async (formData?: string, paginate?: number | string) => {
  try {
    const res = await fetch(
      baseUrl + `/posts/search?limit=10&q=` + formData + `&skip=` + '0',
      {
        cache: "no-cache",
        method: "GET",
        next: {
          tags: ["posts"],
        },
      }
    );
    const data: PostApi = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPostId = async (id: string) => {
  const res = await fetch(baseUrl + `/posts/${id}`, {
    next: {
      tags: ["postsId"],
    },
  });
  const data = await res.json();
  return data;
};

export const getPostComment = async (id: string) => {
  const res = await fetch(baseUrl + `/comments/post/${id}`, {
    next: {
      tags: ["comments"],
    },
  });
  const data = await res.json();
  return data;
};
