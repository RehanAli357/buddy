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
  components: {
    MuiTextField: {
      defaultProps: {
        variant: "outlined", // Ensure consistent variant
      },
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused": {
              "& fieldset": { borderColor: "#4B0082" }, // Secondary color
              color: "#4B0082",
            },
          },
          "& .MuiInputLabel-root": {
            color: "#4B0082", // Default text color
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#ffd700", // Focused text color
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#ffd700", // Default color (secondary text color)
          "&.Mui-checked": {
            color: "#4B0082", // Checked color (secondary main color)
          },
        },
      },
    },
  },
});

export default theme;
export type Theme = typeof theme;
