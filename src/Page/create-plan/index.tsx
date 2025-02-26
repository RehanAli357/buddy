import { Stack, Typography } from "@mui/material";

const CreatePlanPage = () => {
    
  return (
    <Stack>
      <Typography color="text.primary" variant="h3" textAlign={"center"} my={2}>
        All Plans
      </Typography>
      <Stack
        bgcolor={"secondary.main"}
        width={"fit-content"}
        pr={2}
        borderRadius={"0px 40px 40px 0px"}
      >
        <Typography variant="h4" color="text.secondary" ml={2}>
          Step 2
        </Typography>
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
        >
          <Typography variant="h4" textAlign={"center"} color="secondary.light">
            Create a Plan
          </Typography>
          <Typography variant="h3" textAlign={"center"} color="secondary.light">
            +
          </Typography>
        </Stack>
        
      </Stack>
    </Stack>
  );
};

export default CreatePlanPage;
