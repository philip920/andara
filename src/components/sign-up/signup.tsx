import React, { useState } from "react";
import { CenteredGrid } from "../common/styled-components";
import { User } from "../../types/general";
import StepOne from "./step-one/step-one";
import StepTwo from "./step-two/step-two";
import StepThree from "./step-three/step-three";
import StepFour from "./step-four/step-four";
import StepFive from "./step-five/step-five";
import StepSix from "./step-six/step-six";

const options = ["testoption1", "testoption2", "testoption3", "testoption4"];

const SignUp: React.FunctionComponent = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [user, setUser] = useState<User>({
    authWalletAdress: "",
    username: "",
  });

  const handleNextClick = (): void => {
    setCurrentStep(currentStep + 1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleUseCaseChange = (value: any): void => {
    setUser({
      ...user,
      useCases: value,
    });
  };

  const handleContactListChange = (value: any): void => {
    setUser({
      ...user,
      contactList: value,
    });
  };

  const handleSubmit = (): void => {
    console.log("final user object:", user);
  };

  console.log("user:", user);

  return (
    <CenteredGrid>
      <form onSubmit={handleSubmit}>
        {currentStep === 1 && <StepOne onSignUpClick={handleNextClick} />}
        {currentStep === 2 && (
          <StepTwo onChange={handleInputChange} onNextClick={handleNextClick} />
        )}
        {currentStep === 3 && (
          <StepThree
            onChange={handleInputChange}
            onNextClick={handleNextClick}
          />
        )}
        {currentStep === 4 && (
          <StepFour
            options={options}
            onChange={handleUseCaseChange}
            onNextClick={handleNextClick}
          />
        )}
        {currentStep === 5 && (
          <StepFive
            onChange={handleContactListChange}
            onNextClick={handleNextClick}
          />
        )}
        {currentStep === 6 && <StepSix />}
      </form>
    </CenteredGrid>
  );
};

export default SignUp;
