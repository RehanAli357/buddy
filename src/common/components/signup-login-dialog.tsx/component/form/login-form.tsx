import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

interface loginUser {
  userName: string;
  password: string;
}

const LoginForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [user, setUser] = useState<loginUser>({
    userName: "",
    password: "",
  });

  const [errors, setErrors] = useState<{ userName: string; password: string }>({
    userName: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));

    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let valid = true;
    const newErrors = { userName: "", password: "" };

    if (!user.userName.trim()) {
      newErrors.userName = "Username is required*";
      valid = false;
    } else if (user.userName.length < 3) {
      newErrors.userName = "Username must be at least 3 characters*";
      valid = false;
    }

    if (user.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters*";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      console.log("Logging in:", user);
      // Perform login logic here (e.g., API call)
      onClose()
    }
  };

  return (
    <Stack width={"100%"} alignItems="center">
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
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
              <Typography
                fontFamily={"cursive"}
                fontWeight={100}
                color="error"
                fontSize="0.8rem"
              >
                {errors.userName}
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
