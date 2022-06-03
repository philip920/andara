import React, { useEffect } from "react";
import { EthereumAuthProvider, useViewerConnection } from "@self.id/framework";
import { TextButton } from "../common/styled-components";
import { Typography } from "@mui/material";
import { useStore } from "../../store";

declare let window: any;

const ConnectButton: React.FunctionComponent = () => {
  const [connection, connect, disconnect] = useViewerConnection();

  const store = useStore((state) => state);

  useEffect(() => {

    const storeUser = async () => {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      store.setUser({
        ...store.user,
        isAuthenticated: true,
        // @ts-ignore
        did: connection.selfID.id,
        authWalletAdress: accounts[0],
      })
    }

    connection.status === "connected" && storeUser();
  }, [connection.status]);

  return connection.status === "connected" ? (
    <TextButton
      onClick={() => {
        disconnect();
      }}
    >
      Disconnect ({connection.selfID.id})
    </TextButton>
  ) : "ethereum" in window ? (
    <TextButton
      disabled={connection.status === "connecting"}
      onClick={async () => {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        await connect(new EthereumAuthProvider(window.ethereum, accounts[0]));
      }}
    >
      Connect
    </TextButton>
  ) : (
    <Typography>
      An injected Ethereum provider such as{" "}
      <a href="https://metamask.io/">MetaMask</a> is needed to authenticate.
    </Typography>
  );
};

export default ConnectButton;
