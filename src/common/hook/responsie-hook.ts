import { useMediaQuery } from "@mui/material";
import { Theme } from "../../theme/index";

export const useBigTabView = () => {
  return useMediaQuery((theme: Theme) => theme.breakpoints.between(900, 1025));
};

export const useSmallTabView = () => {
  return useMediaQuery((theme: Theme) => theme.breakpoints.between(600, 899));
};

export const useMobileView = () => {
  return useMediaQuery((theme: Theme) => theme.breakpoints.down(600));
};

export const useTabMobileView = () => {
  return useMediaQuery((theme: Theme) => theme.breakpoints.down(1025));
};
