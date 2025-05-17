import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useLoginUser } from "../../../../../apis/user-hook/query";
import { toast } from "react-toastify";
import axios from "axios";
import useAuthStore from "../../../../../store/auth-store/store";

interface loginUser {
  username: string;
  password: string;
}

const LoginForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [user, setUser] = useState<loginUser>({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState<{ username: string; password: string }>({
    username: "",
    password: "",
  });

  const mutation = useLoginUser(user);
  const { addAuthToken } = useAuthStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));

    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let valid = true;
    const newErrors = { username: "", password: "" };

    if (!user.username.trim()) {
      newErrors.username = "Username is required*";
      valid = false;
    } else if (user.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters*";
      valid = false;
    }

    if (user.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters*";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      mutation.mutate(undefined, {
        onSuccess: (data) => {
          toast("User Logged in Successfully", { type: "success" });
          addAuthToken(data.token);
        },
        onError: (error) => {
          if (axios.isAxiosError(error)) {
            toast(error.response?.data?.message || "Unable to Register", {
              type: "error",
            });
          } else {
            toast("Unexpected error", { type: "error" });
            console.error(error);
          }
        },
      });
      onClose();
    }
  };

  return (
    <Stack width={"100%"} alignItems="center">
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <Stack mt={2} gap={2} width={"100%"}>
          <Stack>
            <TextField
              required
              label="username"
              name="username"
              value={user.username}
              onChange={handleChange}
            />
            {errors.username && (
              <Typography
                fontFamily={"cursive"}
                fontWeight={100}
                color="error"
                fontSize="0.8rem"
              >
                {errors.username}
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
              <Typography
                fontFamily={"cursive"}
                fontWeight={100}
                color="error"
                fontSize="0.8rem"
              >
                {errors.password}
              </Typography>
            )}
          </Stack>
          <Button
            variant="contained"
            type="submit"
            sx={{ color: "primary.main", bgcolor: "secondary.main" }}
          >
            Submit
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};

export default LoginForm;
