import React, { useState } from "react";
import { Integration } from "lit-ceramic-sdk";
import { useStore } from "../../store";
import { useNavigate } from "react-router-dom";
import { CenteredGrid } from "../common/styled-components";
import { User } from "../../types/general";
import ConnectButton from "../connect-button/ConnectButton";
import Initiation from "./initiation/initiation";
import UserNameInput from "./username-input/username-input";
import ProfilePicInput from "./profile-pic-input/profile-pic-input";
import UseCasesInput from "./use-cases-input/use-cases-input";
import ContactInput from "./contact-input/contact-input";
import CreateAccount from "./create-account/create-account";

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
          {currentStep === 1 && <Initiation onSignUpClick={handleNextClick} />}
          {currentStep === 2 && (
            <UserNameInput
              onChange={handleInputChange}
              onNextClick={handleNextClick}
            />
          )}
          {currentStep === 3 && (
            <ProfilePicInput
              onChange={handleInputChange}
              onNextClick={handleNextClick}
            />
          )}
          {currentStep === 4 && (
            <UseCasesInput
              options={options}
              onChange={handleUseCaseChange}
              onNextClick={handleNextClick}
            />
          )}
          {currentStep === 5 && (
            <ContactInput
              onChange={handleContactListChange}
              onNextClick={handleNextClick}
            />
          )}
          {currentStep === 6 && <CreateAccount />}
        </form>
      </CenteredGrid>
    </>
  );
};

export default SignUp;
