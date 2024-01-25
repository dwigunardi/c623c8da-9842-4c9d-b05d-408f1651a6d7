'use client'
import { PostStore } from "@/utils/typing";
import { ReactNode } from "react";
import { create } from "zustand";


export const usePostData = create<PostStore>((set) => ({
  initialPost: {
    posts: [],
  },
  isSearched: false,
  setSearch: () => set((state) => ({ isSearched: true })),
  replacePost: (data) => set((state) => ({ initialPost: data, isSearched: true })),
  resetPost: () => set((state) => ({ initialPost: { posts: [] }, isSearched: false })),
}));
