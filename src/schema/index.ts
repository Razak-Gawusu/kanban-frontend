import { toTypedSchema } from "@vee-validate/zod";
import { z } from "zod";

export const signupSchema = toTypedSchema(
  z.object({
    username: z.string().min(1, "Username is required"),
    email: z.string().email(),
    password: z
      .string()
      .min(12, "Password must be at least 12 characters long")
      .regex(
        /^(?=.*[A-Z])(?=.*\W)[A-Za-z\d\W]+$/,
        "Password must contain at least one capital letter and one symbol."
      ),
  })
);

export const loginSchema = toTypedSchema(
  z.object({
    email: z.string().email(),
    password: z.string().min(1, "Password is required"),
  })
);

export const boardSchema = toTypedSchema(
  z.object({
    title: z.string().min(1, "Can't be empty"),
    columns: z
      .array(
        z.object({
          id: z.string().optional(),
          title: z.string().min(1, "Can't be empty"),
        })
      )
      .optional(),
  })
);
