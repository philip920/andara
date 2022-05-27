import React, { useState } from "react";
import { CenteredGrid } from "../common/styled-components";
import StepOne from "./step-one/step-one";
import StepTwo from "./step-two/step-two";
import StepThree from "./step-three/step-three";
import StepFour from "./step-four/step-four";
import StepFive from "./step-five/step-five";
import StepSix from "./step-six/step-six";


const SignUpFlow: React.FunctionComponent = () => {
  const [currentStep, setCurrentStep] = useState(6);

  return (
    <CenteredGrid>
      {currentStep === 1 && <StepOne />}
      {currentStep === 2 && <StepTwo />}
      {currentStep === 3 && <StepThree />}
      {currentStep === 4 && <StepFour />}
      {currentStep === 5 && <StepFive />}
      {currentStep === 6 && <StepSix />}
    </CenteredGrid>
  )
};

export default SignUpFlow;
