import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import { CenteredGrid, TextButton } from "../common/styled-components";
import StepOne from "./step-one/step-one";

const SignUpFlow: React.FunctionComponent = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return <CenteredGrid>{currentStep === 1 && <StepOne />}</CenteredGrid>;
};

export default SignUpFlow;
