import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import { useStore } from '../../store';
import { TextButton } from '../common/styled-components';
import { Typography, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

declare let window: any;

const ConnectButton: React.FunctionComponent = () => {
    const [authState, setAuthState] = useState('disconnected');
    const store = useStore((state) => state);
    const authWalletAdress = useStore((state) => state.user.authWalletAdress);

    const navigate = useNavigate();

    const connect = async () => {
        setAuthState('connecting');

        const accounts = await window.ethereum.request({
            method: 'eth_requestAccounts',
        });
        window.web3 = new Web3(window.ethereum);
        const account = window.web3.eth.accounts;
        const walletAddress = account.givenProvider.selectedAddress;

        store.setUser({
            ...store.user,
            authWalletAdress: walletAddress,
        });

        setAuthState('connected');
    };

    useEffect(() => {
        // Todo:
        // if user exists log him in with his DID and redirect to /home
        // if not redirect to /signup
        console.log('authWalletAdress in useffect:', authWalletAdress);

        if (authWalletAdress.length > 0) {
            navigate('/signup');
        }
    }, [authWalletAdress]);

    return authState === 'connected' ? (
        <TextButton>Disconnect</TextButton>
    ) : authState === 'connecting' ? (
        <TextButton disabled>Connecting...</TextButton>
    ) : 'ethereum' in window && authState === 'disconnected' ? (
        <TextButton onClick={connect}>Connect</TextButton>
    ) : (
        <Typography>
            An injected Ethereum provider such as{' '}
            <Link href='https://metamask.io/'>MetaMask</Link> is needed to
            authenticate.
        </Typography>
    );
};

export default ConnectButton;

// ConnectButton using self.id/framework

// import React, { useEffect } from "react";
// import { EthereumAuthProvider, useViewerConnection } from "@self.id/framework";
// import { useNavigate } from "react-router-dom";
// import { TextButton } from "../common/styled-components";
// import { Typography } from "@mui/material";
// import { useStore } from "../../store";

// declare let window: any;

// const ConnectButton: React.FunctionComponent = () => {
//   const [connection, connect, disconnect] = useViewerConnection();
//   const navigate = useNavigate();

//   const store = useStore((state) => state);

//   useEffect(() => {
//     const storeUserAndRedirect = async () => {
//       const accounts = await window.ethereum.request({
//         method: "eth_requestAccounts",
//       });

//       await store.setUser({
//         ...store.user,
//         isAuthenticated: true,
//         // @ts-ignore
//         did: connection.selfID.id,
//         authWalletAdress: accounts[0],
//       });

//       navigate("/signup");
//     };

//     connection.status === "connected" && storeUserAndRedirect();
//   }, [connection.status]);

//   return connection.status === "connected" ? (
//     <TextButton
//       onClick={() => {
//         disconnect();
//       }}
//     >
//       Disconnect ({connection.selfID.id})
//     </TextButton>
//   ) : "ethereum" in window ? (
//     <TextButton
//       disabled={connection.status === "connecting"}
//       onClick={async () => {
//         const accounts = await window.ethereum.request({
//           method: "eth_requestAccounts",
//         });
//         await connect(new EthereumAuthProvider(window.ethereum, accounts[0]));
//       }}
//     >
//       Connect
//     </TextButton>
//   ) : (
//     <Typography>
//       An injected Ethereum provider such as{" "}
//       <a href="https://metamask.io/">MetaMask</a> is needed to authenticate.
//     </Typography>
//   );
// };

// export default ConnectButton;

// ConnectButton using 3id/connect'

// import React, { useEffect } from "react";
// import { CeramicClient } from '@ceramicnetwork/http-client'
// import { DID } from 'dids'
// import { getResolver as getKeyResolver } from 'key-did-resolver'
// import { getResolver as get3IDResolver } from '@ceramicnetwork/3id-did-resolver'
// import { EthereumAuthProvider, ThreeIdConnect } from '@3id/connect'
// import { TextButton } from "../common/styled-components";
// import { useStore } from "../../store";

// declare let window: any;

// const ConnectButton: React.FunctionComponent = () => {

//   // Create a ThreeIdConnect connect instance as soon as possible in your app to start loading assets
//   const threeID = new ThreeIdConnect()

//   console.log("threeID:", threeID)

//   useEffect(() => {
//     console.log("threeID:", threeID)
//   }, [threeID.connected])

//   async function authenticateWithEthereum(ethereumProvider: { request: (arg0: { method: string; }) => any; }) {
//     // Request accounts from the Ethereum provider

//     const accounts = await ethereumProvider.request({
//       method: 'eth_requestAccounts',
//     })

//     // Create an EthereumAuthProvider using the Ethereum provider and requested account
//     const authProvider = new EthereumAuthProvider(ethereumProvider, accounts[0])
//     // Connect the created EthereumAuthProvider to the 3ID Connect instance so it can be used to
//     // generate the authentication secret
//     await threeID.connect(authProvider)

//     const ceramic = new CeramicClient()
//     const did = new DID({
//       // Get the DID provider from the 3ID Connect instance
//       provider: threeID.getDidProvider(),
//       resolver: {
//         ...get3IDResolver(ceramic),
//         ...getKeyResolver(),
//       },
//     })

//     // Authenticate the DID using the 3ID provider from 3ID Connect, this will trigger the
//     // authentication flow using 3ID Connect and the Ethereum provider
//     try {
//       await did.authenticate()
//     } catch (error) {
//       console.log("error in authenticateWithEthereum:", error)
//     }

//     // The Ceramic client can create and update streams using the authenticated DID
//     ceramic.did = did

//     console.log("threeID in f:", threeID)
//     console.log("did:", did)

//   }

//   // When using extensions such as MetaMask, an Ethereum provider may be injected as `window.ethereum`
//   async function tryAuthenticate() {
//     if (window.ethereum == null) {
//       throw new Error('No injected Ethereum provider')
//     }
//     await authenticateWithEthereum(window.ethereum)
//   }

//   const store = useStore((state) => state);

//   return <TextButton onClick={() => tryAuthenticate()}>Connect</TextButton>;
// };

// export default ConnectButton;
