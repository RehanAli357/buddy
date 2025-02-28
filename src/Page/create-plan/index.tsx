import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import CreatePlanDialog from "./components/create-plan-dialog";
import { useDialog } from "../../common/components/dialog/use-dialog-hook";
import { allPlansProps } from "./type";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../Routes/routes";

const CreatePlanPage = () => {
  const [allPlans, setAllPlans] = useState<allPlansProps[]>([]);
  const { open, toggleDialog } = useDialog();
  const navigate = useNavigate();
  const handleViewPlan = (id: string) => {
    navigate(ROUTES.VIEW_PLAN.replace(":id", id));
  };
  return (
    <Stack>
      <Typography
        color="text.primary"
        variant="h3"
        textAlign={"center"}
        my={allPlans.length>0 ? 3 : 2}
      >
        All Plans
      </Typography>
      <Stack
        bgcolor={"secondary.main"}
        width={"fit-content"}
        pr={2}
        borderRadius={"0px 40px 40px 0px"}
      >
        {allPlans.length <= 0 && (
          <Typography variant="h4" color="text.secondary" ml={2}>
            Step 2
          </Typography>
        )}
      </Stack>
      <Stack
        p={3}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        flexWrap={"wrap"}
        gap={3}
      >
        <Stack
          width={200}
          height={200}
          border={"4px dashed"}
          borderColor={"secondary.light"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ cursor: "pointer" }}
          borderRadius={3}
          onClick={toggleDialog}
        >
          <Typography variant="h4" textAlign={"center"} color="secondary.light">
            Create a Plan
          </Typography>
          <Typography variant="h3" textAlign={"center"} color="secondary.light">
            +
          </Typography>
        </Stack>
        {allPlans.length > 0 ? (
          allPlans.map((items, index) => (
            <Stack
              key={index}
              width={200}
              height={200}
              border={"4px solid"}
              borderColor={"secondary.dark"}
              alignItems={"center"}
              justifyContent={"center"}
              sx={{ cursor: "pointer" }}
              borderRadius={3}
              bgcolor={"secondary.light"}
            >
              <Typography color="text.secondary">{items.title}</Typography>
              <Typography color="text.secondary">{items.amount}/-</Typography>
              <Typography color="text.secondary">{items.date}</Typography>
              <Button
                onClick={() => {
                  handleViewPlan(items.id);
                }}
                sx={{
                  mt: 2,
                  bgcolor: "secondary.main",
                  color: "text.secondary",
                  "&:hover": { bgcolor: "secondary.dark" },
                }}
              >
                Analyse Plan
              </Button>
            </Stack>
          ))
        ) : (
          <></>
        )}
      </Stack>
      <CreatePlanDialog
        open={open}
        toggleDialog={toggleDialog}
        setAllPlans={setAllPlans}
      />
    </Stack>
  );
};

export default CreatePlanPage;
