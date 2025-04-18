import { z } from "zod";
export const loginSchema = z.object({
  email: z.string().trim().min(1, "Email can’t be empty!"),
  password: z.string().min(1, "Password can’t be empty!"),
});

export const registerSchema = z
  .object({
    email: z.string().trim().min(1, "Email can’t be empty!"),
    fullname: z.string().trim().min(1, "Fullname can’t be empty!"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain an uppercase letter")
      .regex(/[0-9]/, "Password must contain a number"),
    confirmPassword: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain an uppercase letter")
      .regex(/[0-9]/, "Password must contain a number"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassowrd"],
    message: "Password combination do not match",
  });
