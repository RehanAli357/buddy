import { z } from "zod";

export const userRegisterSchema = z.object({
  username: z.string().min(3, "User Name must be greater then 3 character"),
  firstname: z.string().min(3, "First Name must be greater then 3 character"),
  lastname: z.string().min(3, "Last Name must be greater then 3 character"),
  email: z.string().email("Email is invalid"),
    password:z.string().min(4,"Password must be greater then 4 character"),
    confirmPassword:z.string().min(4,"Password must be greater then 4 character"),
}).refine((data)=>data.password===data.confirmPassword,{
    path:['confirmPassword'],
    message:"Password and Confirm password must be same"
})
