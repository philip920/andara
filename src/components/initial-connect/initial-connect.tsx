import React from "react";
import { CenteredGrid } from "../common/styled-components";
import ConnectButton from "../connect-button/ConnectButton";

const InitialConnect: React.FunctionComponent = () => {
  return (
    <CenteredGrid>
      <ConnectButton />
    </CenteredGrid>
  );
};

export default InitialConnect;
