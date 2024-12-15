import { z } from "zod";

export const accountSchema = z.object({
  name: z
    .union([
      z
        .string()
        .min(2, { message: "Name must be at least 2 characters." })
        .max(255, { message: "Name too long." }),
      z.literal(""),
    ])
    .optional(),

  email: z
    .union([
      z
        .string()
        .min(4, { message: "Email must be at least 4 characters." })
        .max(255, { message: "Email too long." })
        .email({ message: "Invalid email." }),
      z.literal(""),
    ])
    .optional(),
});
