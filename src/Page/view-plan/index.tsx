import { Stack, Typography } from "@mui/material";
import { SavingPeriodDasboard, UserDetailsDasboard } from "./style";

const ViewPlanPage = () => {
  const savingPeriod = 12;
  return (
    <Stack>
      <Typography
        variant="h3"
        textAlign={"center"}
        my={3}
        color="secondary.main"
      >
        Your Saving Plan Details
      </Typography>
      <Stack p={2} alignItems={"center"} gap={2}>
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          width={"100%"}
          justifyContent={"center"}
          flexWrap={"wrap"}
          gap={2}
        >
          <UserDetailsDasboard>
            <Typography variant="h6" color="secondary.main">
              Plan Id: 8796728736782368
            </Typography>
            <Typography variant="h6" color="secondary.main">
              Plan Name: Savings for bike
            </Typography>
            <Typography variant="h6" color="secondary.main">
              Plan Amount: 120000/-
            </Typography>
            <Typography variant="h6" color="secondary.main">
              Plan Complition Date: 23-06-2025
            </Typography>
          </UserDetailsDasboard>
          <UserDetailsDasboard>
            <Typography variant="h6" color="secondary.main">
              Monthly Income: 20,000/-
            </Typography>
            <Typography variant="h6" color="secondary.main">
              Fixed Savings: 5,000/-
            </Typography>
            <Typography variant="h6" color="secondary.main">
              Monthly Saving Task: 4000/-
            </Typography>
            <Typography variant="h6" color="secondary.main">
              Saving Left ater plan svining :1000
            </Typography>
          </UserDetailsDasboard>
        </Stack>
        <SavingPeriodDasboard>
          <Stack>
            <Typography
              textAlign={"center"}
              variant="h3"
              color="text.secondary"
              sx={{textDecoration:'underline'}}
              mb={1}
            >
              Saving Period
            </Typography>
            <Stack
              flexDirection={"row"}
              alignItems={"center"}
              gap={1}
              justifyContent={"center"}
              flexWrap={"wrap"}
            >
              {Array.from({ length: savingPeriod }).map((_, id) => (
                <Stack
                  alignItems={"center"}
                  justifyContent={"center"}
                  width={30}
                  height={30}
                  bgcolor={"secondary.main"}
                  key={id}
                >
                  <Typography color="primary.main">{id + 1}</Typography>
                </Stack>
              ))}
            </Stack>
          </Stack>
          <Stack
            justifyContent={"space-evenly"}
            alignItems={"center"}
            flexDirection={"row"}
            gap={2}
            flexWrap={"wrap"}
            borderTop={'2px solid'}
            borderColor={'secondary.main'}
            pt={2}
          >
            <Stack
              sx={{
                backgroundColor: "secondary.main",
                color: "text.secondary",
                p: 2,
                fontWeight: 500,
              }}
            >
              <Typography>Amount Saved:14000</Typography>
            </Stack>
            <Stack
              sx={{
                backgroundColor: "secondary.main",
                color: "text.secondary",
                p: 2,
                fontWeight: 500,
              }}
            >
              <Typography>Remaining Saved:150000</Typography>
            </Stack>
            <Stack
              sx={{
                backgroundColor: "secondary.main",
                color: "text.secondary",
                p: 2,
                fontWeight: 500,
              }}
            >
              <Typography>Amount Left:136000</Typography>
            </Stack>
          </Stack>
        </SavingPeriodDasboard>
      </Stack>
    </Stack>
  );
};

export default ViewPlanPage;
