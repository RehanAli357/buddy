import React from "react";

import { DialogInterface } from "../../../../common/components/dialog/dialog-interface";
import CommonDialog from "../../../../common/components/dialog/common-dialog";

const CreatePlanDialog: React.FC<DialogInterface> = ({ open, toggleDialog }) => {
  return (
    <CommonDialog
      open={open}
      onClose={toggleDialog}
      title={'Create a Plan'}
    >
        jij
    </CommonDialog>
  );
};

export default CreatePlanDialog;
