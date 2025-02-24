import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f4f2ff",
    },
    secondary: {
      main: "#4B0082",
    },
    text: {
      primary: "#4B0082",
      secondary: "#ffd700",
    },
  },
  typography: {
    fontFamily: "'Luckiest Guy', cursive",
  },
});

export default theme;
export type Theme = typeof theme;
