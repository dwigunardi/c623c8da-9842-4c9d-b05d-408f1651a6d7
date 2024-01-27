"use server";

import { commentConcatSchema } from "@/utils/schema";
import { commentPost } from "@/utils/typing";
import { z } from "zod";
export const HandleComment = async (prev: [], formData: FormData) => {
  try {
    const data = {
      body: formData.get("comment"),
      postId: Number(formData.get("id")),
      userId: 1,
    };
    const res = await fetch("https://dummyjson.com/comments/add", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const dataRes: commentPost = await res.json();
    const result = [...prev, dataRes];
    return commentConcatSchema.parse(result);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return [
        {
          message: error.message,
        },
      ];
    }
  }
};
