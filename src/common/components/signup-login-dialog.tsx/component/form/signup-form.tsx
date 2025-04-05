import { Button, Checkbox, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import useAuthStore from "../../../../../store/auth-store/store";

interface UserDetails {
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  termsAccepted: boolean;
}

const SignupForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [user, setUser] = useState<UserDetails>({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState<Partial<UserDetails>>({});
  const { addUser } = useAuthStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear errors when user starts typing
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let valid = true;
    const newErrors: Partial<UserDetails> = {};

    if (!user.userName.trim()) {
      newErrors.userName = "Username is required*";
      valid = false;
    } else if (user.userName.length < 4) {
      newErrors.userName = "Username must be at least 4 characters*";
      valid = false;
    }

    if (!user.firstName.trim()) {
      newErrors.firstName = "First name is required*";
      valid = false;
    } else if (!/^[A-Za-z]+$/.test(user.firstName)) {
      newErrors.firstName = "First name must contain only letters*";
      valid = false;
    }

    if (!user.lastName.trim()) {
      newErrors.lastName = "Last name is required*";
      valid = false;
    } else if (!/^[A-Za-z]+$/.test(user.lastName)) {
      newErrors.lastName = "Last name must contain only letters*";
      valid = false;
    }

    if (!user.email.trim()) {
      newErrors.email = "Email is required*";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
      newErrors.email = "Enter a valid email address*";
      valid = false;
    }

    if (!user.password) {
      newErrors.password = "Password is required*";
      valid = false;
    } else if (user.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters*";
      valid = false;
    }

    if (!user.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required*";
      valid = false;
    } else if (user.confirmPassword !== user.password) {
      newErrors.confirmPassword = "Passwords do not match*";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      console.log("Signing up:", user);
      addUser(
        `${Date.now()}`,
        user.userName,
        user.firstName,
        user.lastName,
        user.email,
        "FREE",
        user.password
      );
      setUser({
        userName: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        termsAccepted: false,
      });
      onClose()
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack mt={2} gap={2} width={"100%"}>
        <Stack>
          <TextField
            required
            label="Username"
            name="userName"
            value={user.userName}
            onChange={handleChange}
          />
          {errors.userName && (
            <Typography fontWeight={100} color="error" fontSize="0.8rem">
              {errors.userName}
            </Typography>
          )}
        </Stack>

        <Stack>
          <TextField
            required
            label="First Name"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
          />
          {errors.firstName && (
            <Typography fontWeight={100} color="error" fontSize="0.8rem">
              {errors.firstName}
            </Typography>
          )}
        </Stack>

        <Stack>
          <TextField
            required
            label="Last Name"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
          />
          {errors.lastName && (
            <Typography fontWeight={100} color="error" fontSize="0.8rem">
              {errors.lastName}
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
            checked={user.termsAccepted}
            onChange={handleChange}
          />
          <Typography textAlign={"left"}>
            By checking this, you accept our Terms and Conditions & Privacy
            Policy
          </Typography>
        </Stack>
        {errors.termsAccepted && (
          <Typography fontWeight={100} color="error" fontSize="0.8rem">
            {errors.termsAccepted}
          </Typography>
        )}

        <Button
          variant="contained"
          type="submit"
          disabled={user.termsAccepted ? false : true}
          sx={{ color: "primary.main", bgcolor: "secondary.main" }}
        >
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default SignupForm;
