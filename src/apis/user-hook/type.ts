export interface UserRegisterPayload {
  username: string;
  firstname: string;
  lastname: string;
  password: string;
  email: string;
}

export interface UserLoginPayload {
  username: string;
  password: string;
}

export interface User {
  _id: string;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  usertype: "free" | "premium";
  createdAt: string;
  updatedAt: string;
}
