import { Button, Stack } from "@mui/material";
import {  TopBarStyle } from "./style/top-bar.styled";
import Logo from "../../common/logo";

const TopBar = () => {
  return (
    <TopBarStyle>
      <Stack>
       <Logo/>
      </Stack>
      <Stack>
        <Button variant="contained" sx={{color:'secondary.main'}}>Signup</Button>
      </Stack>
    </TopBarStyle>
  );
};

export default TopBar;
