"use server";
export const HandleComment = async (prev: any, formData: any, params: string) => {
    const data = {
      body: formData,
      postId: parseInt(params),
      userId: 1,
    };
    if (!data.body) return;

    const res = await fetch("https://dummyjson.com/comments/add", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const dataRes = await res.json();
    // revalidateTag("comments");
    return [...prev, dataRes];
  };