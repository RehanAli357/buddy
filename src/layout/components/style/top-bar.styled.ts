import { Stack, styled } from "@mui/material";

export const TopBarStyle = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(2),
  backgroundColor: theme.palette.secondary.main,
}));

