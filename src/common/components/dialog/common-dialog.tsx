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
import { useMobileView } from "../../hook/responsie-hook";

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
  const isMobileView = useMobileView();
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      fullScreen={isMobileView}
      sx={
        isMobileView
          ? {
              "& .MuiDialog-paper": {
                height: "100%",
                backgroundColor: "primary.main",
              },
            }
          : {}
      }
    >
      <Stack bgcolor={"primary.main"}>
        <DialogTitle sx={{paddingY:0}}>
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Stack flex={1} alignItems={"center"}>
              <Typography
                textAlign={"center"}
                ml={5}
                mt={0.5}
                color="secondary.main"
                variant="h5"
              >
                {title}
              </Typography>
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
