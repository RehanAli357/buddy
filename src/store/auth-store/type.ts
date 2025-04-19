export interface userAuth {
  id: string;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  userPurchaseType: "FREE" | "PREMIUM";
  authToken?: string;
  password?: string;
  isLoggedIn?:boolean;
}
