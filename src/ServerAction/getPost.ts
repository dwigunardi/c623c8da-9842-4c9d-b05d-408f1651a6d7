"use server";
import { baseUrl } from "@/config/baseUrl";
import { commentApiSchema, postDetailSchema, postSchema } from "@/utils/schema";
import { CommentApi, PostApi, PostData } from "@/utils/typing";
import { ZodError } from "zod";

export const GetPostAll = async (
  formData?: string,
  paginate?: number | string
) => {
  try {
    const res = await fetch(
      baseUrl + `/posts/search?limit=10&q=` + formData + `&skip=` + paginate,
      {
        cache: "no-cache",
        method: "GET",
        next: {
          tags: ["posts"],
        },
      }
    );
    const data: PostApi = await res.json();
    
    return postSchema.parse(data);
  } catch (error) {
    if (error instanceof ZodError) {
      return {
        message: error.message,
      };
    }
  }
};

export const getPostId = async (id: string) => {
  try {
    const res = await fetch(baseUrl + `/posts/${id}`, {
      next: {
        tags: ["postsId"],
      },
    });
    const data: PostData = await res.json();
    return postDetailSchema.parse(data);
  } catch (error) {
    if (error instanceof ZodError) {
      return {
        message: error.message,
      };
    }
  }
};

export const getPostComment = async (id: string) => {
  try {
    const res = await fetch(baseUrl + `/comments/post/${id}`, {
      next: {
        tags: ["comments"],
      },
    });
    const data: CommentApi = await res.json();
    return commentApiSchema.parse(data);
  } catch (error) {
    if (error instanceof ZodError) {
      return {
        message: error.message,
      };
    }
  }
 
};
