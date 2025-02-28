import { Stack, styled } from "@mui/material";

export const SavingPeriodDasboard = styled(Stack)(({ theme }) => ({
  width: 790,
  height: 400,
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(2),
  justifyContent: "space-between",
  [theme.breakpoints.down(847)]: {
    width: 600,
  },
  [theme.breakpoints.down(672)]: {
    width: "90%",
  },
}));

export const UserDetailsDasboard = styled(Stack)(({theme})=>({
    width:400,
    height:300,
    backgroundColor:theme.palette.primary.main,
    alignItems:'center',
    justifyContent:'center',
    gap:theme.spacing(2),
    textAlign:'center',
    [theme.breakpoints.down(426)]:{
        width:'90%',
        padding:'0px 10px',
    }
}))
