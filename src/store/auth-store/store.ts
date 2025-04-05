import { create } from "zustand";
import { userAuth } from "./type";

interface UserDetails {
  user?: userAuth;
  addUser: (
    id: string,
    userName: string,
    firstName: string,
    lastName: string,
    email: string,
    userPurchaseType: "FREE" | "PREMIUM",
    password: string
  ) => void;
}

const useAuthStore = create<UserDetails>((set) => ({
  user: {
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    userPurchaseType: "FREE",
    id: "",
    authToken: "",
  },
  addUser: (
    id,
    userName,
    firstName,
    lastName,
    email,
    userPurchaseType,
    password
  ) =>
    set(() => ({
      user: {
        id,
        userName,
        firstName,
        lastName,
        email,
        userPurchaseType,
        password,
      },
    })),
}));

export default useAuthStore;
