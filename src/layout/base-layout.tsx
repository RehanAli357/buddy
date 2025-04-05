import { ThemeProvider } from "@mui/material";
import TopBar from "./components/top-bar";
import Footer from "./components/footer";
import { Outlet } from "react-router-dom";
import theme from "../theme/index";
import { DialogProvider } from "../common/components/dialog/dialog-provider-conext";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../config/react-query-config";

const BaseLayout: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <DialogProvider key={"Dialog Provider"}>
          <TopBar />
          <Outlet />
          <Footer />
        </DialogProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default BaseLayout;
