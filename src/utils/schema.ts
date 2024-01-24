import { z } from 'zod';

const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  age: z.number().min(0),
});

export const commentSchema = z.object({
  body: z.string(),
  postId: z.number(),
  userId: z.number(),
});