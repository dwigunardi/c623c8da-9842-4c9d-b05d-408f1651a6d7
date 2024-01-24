"use server";

import { baseUrl } from "@/config/baseUrl";
import { PostApi } from "@/utils/typing";

export const HandleSearch = async (prev: PostApi, formData: FormData):Promise <PostApi> => {
  const data = {
    search: formData.get("search") || "",
  };
  const res = await fetch(baseUrl + `/posts/search?q=` + data.search);
  const postData: PostApi = await res.json();
  return postData;
};
