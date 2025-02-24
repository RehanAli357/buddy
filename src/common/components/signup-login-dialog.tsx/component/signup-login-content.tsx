import { Button, Checkbox, Stack, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

interface SignupLoginContentProps {
  isSignUp: boolean;
  setIsSignUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignupLoginContent: React.FC<SignupLoginContentProps> = ({
  isSignUp,
  setIsSignUp,
}) => {
  return (
    <Stack alignItems={"center"}>
      <Typography color="text.secondary">
        {isSignUp
          ? "Hi There, Signup to start planning your savings"
          : "Hi, Welcome back"}
      </Typography>
      <Stack mt={2} gap={2} width={"100%"}>
        <TextField
          required
          label="Username"
          sx={{
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused": {
                "& fieldset": { borderColor: "secondary.main" },
                color: "secondary.main",
              },
            },
            "& .MuiInputLabel-root": {
              color: "text.primary",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "text.secondary",
            },
          }}
        />
        <TextField
          required
          type="password"
          label="Password"
          sx={{
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused": {
                "& fieldset": { borderColor: "secondary.main" },
                color: "secondary.main",
              },
            },
            "& .MuiInputLabel-root": {
              color: "text.primary",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "text.secondary",
            },
          }}
        />
        {isSignUp && (
          <TextField
            required
            type="password"
            label="Confirm Password"
            sx={{
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused": {
                  "& fieldset": { borderColor: "secondary.main" },
                  color: "secondary.main",
                },
              },
              "& .MuiInputLabel-root": {
                color: "text.primary",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "text.secondary",
              },
            }}
          />
        )}
        {isSignUp && (
          <Stack flexDirection={"row"} alignItems="center" width={"100%"}>
            <Checkbox
              sx={{
                color: "text.secondary",
                "&.Mui-checked": {
                  color: "secondary.main",
                },
              }}
            />
            <Typography textAlign={"left"}>
              By checking this, you accept our Terms and Conditions & Privacy Policy
            </Typography>
          </Stack>
        )}
        <Button
          variant="contained"
          sx={{ color: "primary.main", bgcolor: "secondary.main" }}
        >
          Submit
        </Button>
      </Stack>
      <Typography mt={1}>
        {isSignUp ? (
          <>
            Already have an account?{" "}
            <span
              onClick={() => setIsSignUp(!isSignUp)}
              style={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Login
            </span>
          </>
        ) : (
          <>
            Create a new account and{" "}
            <span
              onClick={() => setIsSignUp(!isSignUp)}
              style={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Signup
            </span>
          </>
        )}
      </Typography>
    </Stack>
  );
};

export default SignupLoginContent;
