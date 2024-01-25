"use server";

import { commentSchema } from "@/utils/schema";
import { z } from "zod";
export const HandleComment = async (prev: [], formData: FormData) => {
  try {
    const data = {
      body: formData.get("comment"),
      postId: formData.get("id"),
      userId: 1,
    };

    const result = commentSchema.safeParse(data);

    if (result.success) {
      const res = await fetch("https://dummyjson.com/comments/add", {
        method: "POST",
        body: JSON.stringify(result.data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const dataRes = await res.json();
      // revalidateTag("comments");
      console.log(result)
      return [...prev, dataRes];
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return error.issues;
    }
  }
};
