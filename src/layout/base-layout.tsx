import { ThemeProvider } from "@mui/material";
import TopBar from "./components/top-bar";
import Footer from "./components/footer";
import { Outlet } from "react-router-dom";
import theme from "../theme/index";
import { DialogProvider } from "../common/components/dialog/dialog-provider-conext";

const BaseLayout: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <DialogProvider key={"Dialog Provider"}>
        <TopBar />
        <Outlet />
        <Footer />
      </DialogProvider>
    </ThemeProvider>
  );
};

export default BaseLayout;
