"use server";
export const HandleComment = async (prev: [], formData: FormData) => {
    const data = {
      body: formData.get("comment"),
      postId: formData.get("id"),
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