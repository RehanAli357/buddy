export interface userAuth {
  id: string;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  usertype: "free" | "premium";
  password?: string;
  isLoggedIn?: boolean;
}
