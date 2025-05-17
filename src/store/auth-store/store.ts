import { create } from "zustand";
import { persist } from "zustand/middleware";
import { userAuth } from "./type";

interface UserDetails {
  user: userAuth | null;
  authToken: string | null;

  addUser: (
    id: string,
    userName: string,
    firstName: string,
    lastName: string,
    email: string,
    usertype: "free" | "premium",
    password: string,
    isLoggedIn?: boolean
  ) => void;
  getUser: () => userAuth | null;

  addAuthToken: (token: string) => void;
  getAuthToken: () => string | null;
  clearAuthToken: () => void;
}

const useAuthStore = create<UserDetails>()(
  persist(
    (set, get) => ({
      user: {
        id: "",
        userName: "",
        firstName: "",
        lastName: "",
        email: "",
        usertype: "free",
        password: "",
      },
      authToken: null,

      addUser: (id, userName, firstName, lastName, email, usertype, password) =>
        set(() => ({
          user: {
            id,
            userName,
            firstName,
            lastName,
            email,
            usertype,
            password,
          },
        })),

      addAuthToken: (token) =>
        set(() => ({
          authToken: token,
        })),

      getAuthToken: () => get().authToken,

      clearAuthToken: () =>
        set(() => ({
          authToken: null,
        })),

      getUser: () => get().user,
    }),
    {
      name: "buddy-token",
      partialize: (state) => ({
        authToken: state.authToken,
      }),
    }
  )
);

export default useAuthStore;
