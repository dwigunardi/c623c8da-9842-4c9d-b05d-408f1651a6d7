"use client";

import { PostApi } from "@/utils/typing";
import { NextUIProvider } from "@nextui-org/react";
import { createContext } from "react";

const mockPostData: PostApi = {
  limit: 10,
  skip: 0,
  total: 0,
  posts: [
    {
      id: 1,
      title: "title",
      body: "body",
      userId: 1,
      tags: ["tag"],
      reactions: 0,
    },
  ],
};

const contextPost = createContext(mockPostData);
export function Providers({ children }: { children: React.ReactNode }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
