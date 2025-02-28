import { Button, Stack, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { allPlansProps } from "../type";

interface setAllPlansProps {
  setAllPlans: React.Dispatch<React.SetStateAction<allPlansProps[]>>;
  toggleDialog: () => void;
}

const CreatePlanDialogContent: React.FC<setAllPlansProps> = ({
  setAllPlans,
  toggleDialog,
}) => {
  const [data, setData] = useState({
    title: "",
    amount: "",
  });

  const handleDateChange = (date: Dayjs | null) => {
    setSelectedDate(date);
  };
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());

  const handleSave = () => {
    if (!data.title || !data.amount || !selectedDate) {
      return; // Prevent saving invalid data
    }

    setAllPlans((pdata) => [
      ...pdata,
      {
        title: data.title,
        amount: data.amount,
        date: selectedDate.format("DD-MM-YYYY"), // Ensure it's always a string
        id: `${Date.now()}`,
      },
    ]);

    setSelectedDate(null); // Corrected
    setData({
      title: "",
      amount: "",
    });

    toggleDialog();
  };

  return (
    <Stack pt={1} gap={2}>
      <TextField
        label="Enter the plan heading"
        placeholder="Saving for Bike"
        type="text"
        value={data.title}
        onChange={(
          e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => {
          setData((pdata) => ({ ...pdata, title: e.target.value }));
        }}
      />

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Select Date when you want to achive the task"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </LocalizationProvider>
      <TextField
        label="Enter the amount you want to save"
        placeholder="120000"
        type="number"
        onChange={(
          e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => {
          setData((pdata) => ({ ...pdata, amount: e.target.value }));
        }}
      />
      <Button
        onClick={handleSave}
        sx={{
          mt: 2,
          bgcolor: "secondary.main",
          color: "text.secondary",
          "&:hover": { bgcolor: "secondary.dark" },
        }}
      >
        Save Plan
      </Button>
    </Stack>
  );
};

export default CreatePlanDialogContent;
