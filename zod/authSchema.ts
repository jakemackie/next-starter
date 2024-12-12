import { z } from "zod";

export const authSchema = z.object({
  email: z
    .string()
    .min(4, {
      message: "Email must be at least 4 characters.",
    })
    .max(255, {
      message: "Email too long.",
    })
    .email({
      message: "Invalid email.",
    }),

  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters.",
    })
    .max(255, {
      message: "Password too long.",
    }),
});
