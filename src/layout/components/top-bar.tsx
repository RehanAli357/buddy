import { Button, Stack } from "@mui/material";
import { LogoTextStyle, TopBarStyle } from "./style/top-bar.styled";

const TopBar = () => {
  return (
    <TopBarStyle>
      <Stack>
       <LogoTextStyle>Buddy</LogoTextStyle>
      </Stack>
      <Stack>
        <Button variant="contained" sx={{color:'secondary.main'}}>Signup</Button>
      </Stack>
    </TopBarStyle>
  );
};

export default TopBar;
