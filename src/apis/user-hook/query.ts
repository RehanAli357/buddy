import { useMutation } from "react-query";

import { userRegister } from "./api";
import { UserRegisterPayload } from "./type";
import { UserQueryKeys } from "./keys";

export const useUserRegister = (userData: UserRegisterPayload) => {
  const payload = {
    username: userData.username,
    firstname: userData.firstname,
    lastname: userData.lastname,
    email: userData.email,
    password: userData.password,
  };
  return useMutation(UserQueryKeys.register, () => userRegister(payload));
};
