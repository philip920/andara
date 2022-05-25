import React, { useState } from "react";
import { CenteredGrid } from "../common/styled-components";
import StepOne from "./step-one/step-one";
import StepTwo from "./step-two/step-two";
import StepThree from "./step-three/step-three";
import StepFour from "./step-four/step-four";


const SignUpFlow: React.FunctionComponent = () => {
  const [currentStep, setCurrentStep] = useState(4);

  return (
    <CenteredGrid>
      {currentStep === 1 && <StepOne />}
      {currentStep === 2 && <StepTwo />}
      {currentStep === 3 && <StepThree />}
      {currentStep === 4 && <StepFour />}
    </CenteredGrid>
  );
};

export default SignUpFlow;
