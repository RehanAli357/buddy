import { ThemeProvider } from "@mui/material";
import TopBar from "./components/top-bar";
import Footer from "./components/footer";
import { Outlet } from "react-router-dom";
import theme from "../theme/index";
import { DialogProvider } from "../common/components/dialog/dialog-provider-conext";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../config/react-query-config";
import { ToastContainer } from "react-toastify";

const BaseLayout: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <DialogProvider key={"Dialog Provider"}>
          <ToastContainer
            autoClose={3000}
            newestOnTop
            rtl={false}
            pauseOnFocusLoss
            theme="light"
          />
          <TopBar />
          <Outlet />
          <Footer />
        </DialogProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default BaseLayout;
