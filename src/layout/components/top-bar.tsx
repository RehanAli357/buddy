import { Button, Stack } from "@mui/material";
import { TopBarStyle } from "./style/top-bar.styled";
import Logo from "../../common/logo";
import { useDialog } from "../../common/components/dialog/use-dialog-hook";
import SignUpDialog from "../../common/components/signup-login-dialog.tsx";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../Routes/routes.ts";
import useAuthStore from "../../store/auth-store/store.ts";

const TopBar = () => {
  const navigate = useNavigate();
  const { getAuthToken ,clearAuthToken} = useAuthStore();

  const loggedIn = getAuthToken();

  const { open, toggleDialog } = useDialog();
  const handleLogout = () => {
    clearAuthToken();
    navigate(ROUTES.HOME);
  };
  return (
    <>
      <TopBarStyle>
        <Stack>
          <Logo />
        </Stack>
        <Stack>
          {loggedIn ? (
            <Button
              onClick={handleLogout}
              variant="contained"
              sx={{ color: "secondary.main" }}
            >
              Logout
            </Button>
          ) : (
            <Button
              onClick={toggleDialog}
              variant="contained"
              sx={{ color: "secondary.main" }}
            >
              Signup
            </Button>
          )}
        </Stack>
      </TopBarStyle>
      <SignUpDialog open={open} toggleDialog={toggleDialog} />
    </>
  );
};

export default TopBar;
