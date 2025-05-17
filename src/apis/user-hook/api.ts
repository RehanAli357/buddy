import axios from "axios";
import { DOMAIN_ROUTE } from "../../utils/domain";
import { User, UserLoginPayload, UserRegisterPayload } from "./type";

export const userRegister = async (payload: UserRegisterPayload) => {
  try {
    const res = await axios.post(
      `${DOMAIN_ROUTE}/users/register-user`,
      payload
    );
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Registration Error:",
        error.response?.data || error.message
      );
      throw error;
    } else {
      console.error("Unexpected error", error);
      throw new Error("An unexpected error occurred");
    }
  }
};

export const userLogin = async (payload: UserLoginPayload) => {
  try {
    const res = await axios.post(`${DOMAIN_ROUTE}/users/login-user`, payload);
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Login Error:", error.response?.data || error.message);
      throw error;
    } else {
      console.error("Unexpected error", error);
      throw new Error("An unexpected error occurred");
    }
  }
};

export const getUser = async (token: string): Promise<User | null> => {
  try {
    const res = await axios.get(`${DOMAIN_ROUTE}/users/get-user`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Get user Error:", error.response?.data || error.message);
      throw error;
    } else {
      console.error("Unexpected error", error);
      throw new Error("An unexpected error occurred");
    }
  }
};
