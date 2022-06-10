import React, { useState, useEffect } from "react";
import { Integration } from "lit-ceramic-sdk";
import { useStore } from "../../store";
import { useNavigate } from "react-router-dom";

import { CenteredGrid } from "../common/styled-components";
import { User } from "../../types/general";
import ConnectButton from "../connect-button/ConnectButton";
import StepOne from "./step-one/step-one";
import StepTwo from "./step-two/step-two";
import StepThree from "./step-three/step-three";
import StepFour from "./step-four/step-four";
import StepFive from "./step-five/step-five";
import StepSix from "./step-six/step-six";

const options = ["testoption1", "testoption2", "testoption3", "testoption4"];

const SignUp: React.FunctionComponent = () => {
  const store = useStore((state) => state);

  const litCeramicIntegration = new Integration(
    "https://ceramic-clay.3boxlabs.com",
    "ethereum"
  );

  const [currentStep, setCurrentStep] = useState(1);
  const [user, setUser] = useState<User>(store.user);

  const navigate = useNavigate();

  litCeramicIntegration.startLitClient(window);

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

  const handleSubmit = async () => {
    await store.setUser(user);

    const accessControlConditions = [
      {
        contractAddress: "",
        standardContractType: "",
        chain: "ethereum",
        method: "",
        parameters: [":userAddress"],
        returnValueTest: {
          comparator: "=",
          value: user.authWalletAdress,
        },
      },
    ];

    const stringToEncrypt = JSON.stringify(user);

    const response = litCeramicIntegration
      .encryptAndWrite(stringToEncrypt, accessControlConditions)
      .then((streamID: string) => console.log("streamID:", streamID));

    navigate("/home");
  };

  console.log("user:", user);

  return (
    <>
      <ConnectButton />
      <CenteredGrid>
        <form onSubmit={handleSubmit}>
          {currentStep === 1 && <StepOne onSignUpClick={handleNextClick} />}
          {currentStep === 2 && (
            <StepTwo
              onChange={handleInputChange}
              onNextClick={handleNextClick}
            />
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
    </>
  );
};

export default SignUp;
