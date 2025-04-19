import { z } from "zod";
import { userRegisterSchema } from "./validator";

export type FormData = z.infer<typeof userRegisterSchema>;
export type FormErrors = Partial<Record<keyof FormData, string[]>>;

export interface UserDetails {
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

