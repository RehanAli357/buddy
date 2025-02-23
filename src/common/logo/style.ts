import { styled, Typography } from "@mui/material";

export const LogoTextStyle = styled(Typography)(() => ({
  color: "rgb(149, 0, 255)",
  fontSize: "40px",
  fontFamily: "'Luckiest Guy', cursive",
  fontWeight: "bold",
  textShadow: "0.5px 2px 1px #ffd700",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.1)",
    textShadow: "0px 0px 15px #ffd700, 0px 0px 25px rgb(255, 218, 6)",
    color: "rgb(196, 114, 255)",
    cursor: "pointer",
  },
}));
