import { Button, Checkbox, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useUserRegister } from "../../../../../apis/user-hook/query";
import { z } from "zod";
import { userRegisterSchema } from "./validator";
import { isFormValid } from "./utils";
import { FormErrors, UserDetails } from "./type";




const SignupForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [user, setUser] = useState<UserDetails>({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);

  const [errors, setErrors] = useState<Partial<FormErrors>>({});
  const mutation = useUserRegister(user);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));

    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      userRegisterSchema.parse(user);
      if (!termsAccepted) {
        setErrors((prev) => ({
          ...prev,
          termsAccepted: ["You must accept the Terms and Conditions"],
        }));
        return;
      }
      mutation.mutate();
      setErrors({});
      onClose();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = error.flatten().fieldErrors;
        setErrors(fieldErrors);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack mt={2} gap={2} width={"100%"}>
        <Stack>
          <TextField
            required
            label="user Name"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
          {errors.username && (
            <Typography fontWeight={100} color="error" fontSize="0.8rem">
              {errors.username}
            </Typography>
          )}
        </Stack>

        <Stack>
          <TextField
            required
            label="First Name"
            name="firstname"
            value={user.firstname}
            onChange={handleChange}
          />
          {errors.firstname && (
            <Typography fontWeight={100} color="error" fontSize="0.8rem">
              {errors.firstname}
            </Typography>
          )}
        </Stack>

        <Stack>
          <TextField
            required
            label="Last Name"
            name="lastname"
            value={user.lastname}
            onChange={handleChange}
          />
          {errors.lastname && (
            <Typography fontWeight={100} color="error" fontSize="0.8rem">
              {errors.lastname}
            </Typography>
          )}
        </Stack>

        <Stack>
          <TextField
            required
            label="Email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          {errors.email && (
            <Typography fontWeight={100} color="error" fontSize="0.8rem">
              {errors.email}
            </Typography>
          )}
        </Stack>

        <Stack>
          <TextField
            required
            type="password"
            label="Password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
          {errors.password && (
            <Typography fontWeight={100} color="error" fontSize="0.8rem">
              {errors.password}
            </Typography>
          )}
        </Stack>

        <Stack>
          <TextField
            required
            type="password"
            label="Confirm Password"
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <Typography fontWeight={100} color="error" fontSize="0.8rem">
              {errors.confirmPassword}
            </Typography>
          )}
        </Stack>

        <Stack flexDirection={"row"} alignItems="center" width={"100%"}>
          <Checkbox
            name="termsAccepted"
            checked={termsAccepted}
            onChange={() => {
              setTermsAccepted(!termsAccepted);
            }}
          />
          <Typography textAlign={"left"}>
            By checking this, you accept our Terms and Conditions & Privacy
            Policy
          </Typography>
        </Stack>
        {termsAccepted && (
          <Typography fontWeight={100} color="error" fontSize="0.8rem">
            {termsAccepted}
          </Typography>
        )}

        <Button
          variant="contained"
          type="submit"
          disabled={!isFormValid(termsAccepted, user, errors)}
          sx={{ color: "primary.main", bgcolor: "secondary.main" }}
        >
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default SignupForm;
