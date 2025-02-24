import { Button, Stack } from "@mui/material";
import { TopBarStyle } from "./style/top-bar.styled";
import Logo from "../../common/logo";
import { useDialog } from "../../common/components/dialog/use-dialog-hook";
import SignUpDialog from "../../common/components/signup-login-dialog.tsx";

const TopBar = () => {
  const { open, toggleDialog } = useDialog();

  return (
    <>
      <TopBarStyle>
        <Stack>
          <Logo />
        </Stack>
        <Stack>
          <Button
            onClick={toggleDialog}
            variant="contained"
            sx={{ color: "secondary.main" }}
          >
            Signup
          </Button>
        </Stack>
      </TopBarStyle>
      <SignUpDialog open={open} toggleDialog={toggleDialog} />
    </>
  );
};

export default TopBar;
