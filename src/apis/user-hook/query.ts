import { useMutation, useQuery } from "react-query";

import { getUser, userLogin, userRegister } from "./api";
import { UserLoginPayload, UserRegisterPayload } from "./type";
import { UserQueryKeys } from "./keys";

export const useUserRegister = (userData: UserRegisterPayload) => {
  const payload = { ...userData };
  return useMutation(UserQueryKeys.register, () => userRegister(payload));
};

export const useLoginUser = (userData: UserLoginPayload) => {
  const payload = { ...userData };
  return useMutation(UserQueryKeys.login, () => userLogin(payload));
};

export const useGetUser = (token: string) => {
  return useQuery({
    queryKey: UserQueryKeys.user,
    queryFn: () => getUser(token), 
    enabled: !!token, 
  });
};
