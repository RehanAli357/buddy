import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import { useMobileView } from "../../common/hook/responsie-hook";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../Routes/routes";

const user = {
  name: "Rehan",
};

interface DataForm {
  income: string;
  expenses: string;
  savings: string;
}

const OnBoardPage = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [info, setFormInfo] = useState<DataForm>({
    income: "",
    expenses: "",
    savings: "",
  });
  const [stepLabels, setStepLabels] = useState<string[]>([
    "Fixed Monthly Income",
    "Fixed Monthly Expenses",
    "Fixed Monthly Savings",
  ]);

  const isMobileView = useMobileView();
  const navigate = useNavigate();
  const handleNext = () => {
    const updatedLabels = [...stepLabels];

    if (activeStep === 0 && info.income) {
      updatedLabels[0] = `Monthly fixed income is ${info.income}/- 💰`;
    } else if (activeStep === 1 && info.expenses) {
      updatedLabels[1] = `Monthly fixed expenses is ${info.expenses}/- 🤔`;
    } else if (activeStep === 2 && info.savings) {
      updatedLabels[2] = `Monthly fixed savings is ${info.savings}/- 🤑`;
    }

    setStepLabels(updatedLabels);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setStepLabels([
      "Fixed Monthly Income",
      "Fixed Monthly Expenses",
      "Fixed Monthly Savings",
    ]);
    setActiveStep(0);
    setFormInfo({ income: "", expenses: "", savings: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const steps = [
    {
      label: stepLabels[0],
      description: (
        <TextField
          fullWidth
          placeholder="Enter your fixed income"
          type="number"
          value={info.income}
          name="income"
          onChange={handleChange}
          variant="outlined"
        />
      ),
    },
    {
      label: stepLabels[1],
      description: (
        <TextField
          fullWidth
          placeholder="Enter your fixed expenses"
          type="number"
          value={info.expenses}
          name="expenses"
          onChange={handleChange}
          variant="outlined"
        />
      ),
    },
    {
      label: stepLabels[2],
      description: (
        <TextField
          fullWidth
          placeholder="Enter your fixed savings"
          type="number"
          value={info.savings}
          name="savings"
          onChange={handleChange}
          variant="outlined"
        />
      ),
    },
  ];

  return (
    <Stack>
      <Container maxWidth={isMobileView ? "sm" : "md"}>
        <Paper
          elevation={3}
          sx={{ p: 4, borderRadius: 3, my: 5, minHeight: "50vh" }}
        >
          <Stack
            bgcolor={"secondary.main"}
            width={"fit-content"}
            pr={2}
            borderRadius={"0px 40px 40px 0px"}
          >
            <Typography variant="h4" color="text.secondary" ml={2}>
              Step 1
            </Typography>
          </Stack>
          <Typography
            variant="h5"
            textAlign="center"
            fontWeight="bold"
            color="secondary"
          >
            Welcome, {user.name}!
          </Typography>
          <Typography
            variant="h6"
            textAlign="center"
            color="text.secondary"
            sx={{ mb: 3 }}
          >
            Let's begin your saving journey.
          </Typography>

          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
                  sx={{
                    "& .MuiStepIcon-root": {
                      color: "text.secondary",
                    },
                    "& .MuiStepIcon-root.Mui-active, & .MuiStepIcon-root.Mui-completed":
                      {
                        color: "secondary.main",
                      },
                    "& .MuiStepIcon-text": {
                      fill: "white",
                    },
                  }}
                >
                  <Typography variant="h6" fontWeight="normal">
                    {step.label}
                  </Typography>
                </StepLabel>
                <StepContent>
                  <Box
                    sx={{
                      p: 2,
                      backgroundColor: "#f5f5f5",
                      borderRadius: 2,
                      mb: 2,
                    }}
                  >
                    {step.description}
                  </Box>
                  <Stack direction="row" spacing={2} mt={2}>
                    <Button
                      variant="contained"
                      fullWidth
                      onClick={handleNext}
                      disabled={
                        !info[Object.keys(info)[index] as keyof DataForm]
                      }
                      sx={{
                        bgcolor: "secondary.main",
                        color: "white",
                        "&:hover": { bgcolor: "secondary.dark" },
                      }}
                    >
                      {index === steps.length - 1 ? "Finish" : "Continue"}
                    </Button>
                    {index !== 0 && (
                      <Button
                        fullWidth
                        variant="contained"
                        onClick={handleBack}
                        sx={{
                          borderColor: "primary.dark",
                          color: "secondary.main",
                          "&:hover": { bgcolor: "primary.light" },
                        }}
                      >
                        Back
                      </Button>
                    )}
                  </Stack>
                </StepContent>
              </Step>
            ))}
          </Stepper>

          {activeStep === steps.length && (
            <Stack
              mt={3}
              alignItems="center"
              flexDirection={"row"}
              justifyContent={"center"}
              gap={2}
            >
              <Button
                onClick={() => {
                  navigate(ROUTES.CREATE_PLAN);
                }}
                sx={{
                  mt: 2,
                  bgcolor: "secondary.main",
                  color: "white",
                  "&:hover": { bgcolor: "secondary.dark" },
                }}
              >
                Go to Step 2<sup>nd</sup> 😃
              </Button>
              <Button
                onClick={handleReset}
                sx={{
                  mt: 2,
                  bgcolor: "text.secondary",
                  color: "secondary.main",
                  "&:hover": { bgcolor: "primary.main" },
                }}
              >
                Reset 🖊️
              </Button>
            </Stack>
          )}
        </Paper>
      </Container>
    </Stack>
  );
};

export default OnBoardPage;
