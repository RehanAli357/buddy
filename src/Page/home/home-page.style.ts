import { Stack, styled } from "@mui/material";
import BgImage from "../../assets/bgImage.webp";

export const HomePageStyle = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundImage: `url(${BgImage})`,
  objectFit: "contain",
  backgroundRepeat: "repeat",
  backgroundSize: "140px",
  border: "10px solid black",
  borderRadius: "40px",
  marginTop: 20,
  marginBottom: 20,
}));
