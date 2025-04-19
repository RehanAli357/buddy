import { FormErrors, UserDetails } from "./type";


export const isFormValid = (
  termsAccepted: boolean,
  user: UserDetails,
  errors: FormErrors
) => {
  const hasErrors = Object.values(errors).some((err) => err && err.length > 0);
  const allFieldsFilled = Object.values(user).every((val) => val.trim() !== "");
  return !hasErrors && termsAccepted && allFieldsFilled;
};
