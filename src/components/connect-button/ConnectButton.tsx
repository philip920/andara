import React, { useEffect } from 'react';
import { EthereumAuthProvider, useViewerConnection } from '@self.id/framework'
import { TextButton } from '../common/styled-components'

declare let window: any;

const ConnectButton: React.FunctionComponent = () => {
  const [connection, connect, disconnect] = useViewerConnection()

  useEffect(() => {
    console.log("connection:", connection);
  }, [connection])

  return connection.status === 'connected' ? (
    <TextButton
      onClick={() => {
        disconnect()
      }}>
      Disconnect ({connection.selfID.id})
    </TextButton>
  ) : 'ethereum' in window ? (
    <TextButton
      disabled={connection.status === 'connecting'}
      onClick={async () => {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        })
        await connect(new EthereumAuthProvider(window.ethereum, accounts[0]))
      }}>
      Connect
    </TextButton>
  ) : (
    <p>
      An injected Ethereum provider such as{' '}
      <a href="https://metamask.io/">MetaMask</a> is needed to authenticate.
    </p>
  )
}

export default ConnectButton