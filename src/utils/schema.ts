import { z } from "zod";

const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  age: z.number().min(0),
});

export const postDetailSchema = z.object({
  id: z.number(),
  title: z.string(),
  body: z.string(),
  userId: z.number(),
  tags: z.array(z.string()),
  reactions: z.object({
    likes: z.number(),
    dislikes: z.number(),
  }),
});

export const commentSchema = z.object({
  id: z.number(),
  body: z.string(),
  postId: z.number(),
  user: z.object({
    id: z.number(),
    username: z.string(),
  }),
});

export const commentPostSchema = z.object({
  id: z.number(),
  body: z.string().min(5).max(20),
  postId: z.string(),
  user: z.object({
    id: z.number(),
    username: z.string(),
  }),
});
export const commentConcatSchema = z.array(commentSchema);
export const commentApiSchema = z.object({
  comments: z.array(commentSchema),
  total: z.number(),
  skip: z.number(),
  limit: z.number(),
});

const postDataSchema = z.object({
  id: z.number(),
  title: z.string(),
  body: z.string(),
  userId: z.number(),
  tags: z.array(z.string()),
  reactions: z.object({
    likes: z.number(),
    dislikes: z.number(),
  }),
});


export const postSchema = z.object({
  posts: z.array(postDataSchema),
  total: z.number(),
  skip: z.number(),
  limit: z.number(),
});
