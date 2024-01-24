'use client'
import { ReactNode } from "react";
import { create } from "zustand";

interface PostStore {
  initialPost: [];
  searchedPost: [];
  isSearched: boolean;
  replacePost: (data: any) => ReactNode | void;
  addSearchedPost: (data: any) => ReactNode | void;
  setSearched: (data: boolean) => ReactNode | void;
}

export const usePostData = create<PostStore>((set) => ({
  initialPost: [],
  searchedPost: [],
  isSearched: false,
  setSearched: (data) => set((state) => ({ isSearched: data })),
  addSearchedPost: (data) => set((state) => ({ searchedPost: data })),
  replacePost: (data) => set((state) => ({ initialPost: data })),
}));
