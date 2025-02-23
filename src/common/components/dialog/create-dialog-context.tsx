import { createContext } from "react";

interface DialogContextType {
  open: boolean;
  toggleDialog: () => void;
}

export const DialogContext = createContext<DialogContextType | undefined>(
  undefined
);
