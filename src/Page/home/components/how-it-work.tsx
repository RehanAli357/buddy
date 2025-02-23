import { Stack, Typography } from "@mui/material";
import { useMobileView } from "../../../common/hook/responsie-hook";

const HowItWork = () => {
  const isMobileView = useMobileView();
  const Steps = [
    {
      step: "Step 1",
      text: "Login and Create a Plan ➕",
    },
    {
      step: "Step 2",
      text: "Add Monthly Expenses 💰",
    },
    {
      step: "Step 3",
      text: "Monthly Plan is Ready 🤑",
    },
  ];

  return (
    <Stack mt={10}>
      {/* Title */}
      <Typography
        bgcolor={"secondary.main"}
        variant={isMobileView ? "h4" : "h2"}
        color="primary.main"
        textAlign={"center"}
        p={2}
      >
        How It Works
      </Typography>

      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        flexWrap={"wrap"}
        gap={5}
        mt={5}
        px={2}
      >
        {Steps.map((data, index) => (
          <Stack
            key={index}
            bgcolor={"primary.main"}
            p={3}
            px={2}
            width={isMobileView?'90%':'50%'}
            borderRadius={2}
            boxShadow={3}
            textAlign="center"
          >
            <Typography variant="h4" color="secondary.main" fontWeight="bold">
              {data.step}
            </Typography>
            <Typography variant="h5" color="text.secondary" mt={1}>
              {data.text}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default HowItWork;
