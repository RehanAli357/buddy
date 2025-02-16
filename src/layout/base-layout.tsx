import { ThemeProvider } from "@mui/material";
import { theme } from "../theme";
import TopBar from "./components/top-bar";
import Footer from "./components/footer";
import { Outlet } from "react-router-dom";

const BaseLayout: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <TopBar />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
};

export default BaseLayout;
