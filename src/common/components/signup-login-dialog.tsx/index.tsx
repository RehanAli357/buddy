import React, { useState } from "react";
import CommonDialog from "../dialog/common-dialog";
import { DialogInterface } from "../dialog/dialog-interface";
import SignupLoginContent from "./component/signup-login-content";

const SignUpDialog: React.FC<DialogInterface> = ({ open, toggleDialog }) => {
  const [isSignUp, setIsSignUp] = useState<boolean>(true);
  return (
    <CommonDialog open={open} onClose={toggleDialog} title={isSignUp?"Signup":'Login'}>
      <SignupLoginContent isSignUp={isSignUp} setIsSignUp={setIsSignUp}/>
    </CommonDialog>
  );
};

export default SignUpDialog;
