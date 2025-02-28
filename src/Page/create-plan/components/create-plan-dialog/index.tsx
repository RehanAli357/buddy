import React from "react";

import { DialogInterface } from "../../../../common/components/dialog/dialog-interface";
import CommonDialog from "../../../../common/components/dialog/common-dialog";
import CreatePlanDialogContent from "../create-plan-dialog-content";
import { allPlansProps } from "../../type";



interface SetAllPlansDetails extends DialogInterface {
  setAllPlans: React.Dispatch<React.SetStateAction<allPlansProps[]>>;
}

const CreatePlanDialog: React.FC<SetAllPlansDetails> = ({
  open,
  toggleDialog,
  setAllPlans,
}) => {
  return (
    <CommonDialog open={open} onClose={toggleDialog} title={"Create a Plan"}>
      <CreatePlanDialogContent setAllPlans={setAllPlans} toggleDialog={toggleDialog}/>
    </CommonDialog>
  );
};

export default CreatePlanDialog;
