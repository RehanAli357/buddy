import { Stack, Typography } from "@mui/material";
import SignupForm from "./form/signup-form";
import LoginForm from "./form/login-form";
interface SignupLoginContentProps {
  isSignUp: boolean;
  setIsSignUp: React.Dispatch<React.SetStateAction<boolean>>;
  onClose: () => void;
}

const SignupLoginContent: React.FC<SignupLoginContentProps> = ({
  isSignUp,
  setIsSignUp,
  onClose,
}) => {
  return (
    <Stack alignItems={"center"}>
      <Typography color="text.secondary">
        {isSignUp
          ? "Hi There, Signup to start planning your savings"
          : "Hi, Welcome back"}
      </Typography>
      {isSignUp ? (
        <SignupForm onClose={onClose} setIsSignUp={setIsSignUp}/>
      ) : (
        <LoginForm onClose={onClose} />
      )}
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
