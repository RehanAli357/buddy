import axios from "axios";
import { DOMAIN_ROUTE } from "../../utils/domain";
import { UserRegisterPayload } from "./type";

export const userRegister = async (payload: UserRegisterPayload) => {
  try {
    const res = await axios.post(`${DOMAIN_ROUTE}/user/register`, payload);
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
