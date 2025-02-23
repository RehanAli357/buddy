import { useState, ReactNode } from "react";
import { DialogContext } from "./create-dialog-context";

interface DialogProviderProps {
  children: ReactNode;
}

export const DialogProvider: React.FC<DialogProviderProps> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleDialog = () => {
    setOpen((prev) => !prev);
  };

  return (
    <DialogContext.Provider value={{ open, toggleDialog }}>
      {children}
    </DialogContext.Provider>
  );
};

