import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React, { ReactNode } from "react";
import CloseIcon from "@mui/icons-material/Close";

interface CommonDialogProps {
  title: string;
  children: ReactNode;
  open: boolean;
  onClose: () => void;
}

const CommonDialog: React.FC<CommonDialogProps> = ({
  title,
  children,
  open,
  onClose,
}) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <Stack bgcolor={'primary.main'}>
        <DialogTitle>
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Stack flex={1} alignItems={"center"}>
              <Typography color="secondary.main" variant="h5">{title}</Typography>
            </Stack>
            <IconButton onClick={onClose}>
              <CloseIcon sx={{ color: "secondary.main" }} />
            </IconButton>
          </Stack>
        </DialogTitle>
        <DialogContent>{children}</DialogContent>
      </Stack>
    </Dialog>
  );
};

export default CommonDialog;
