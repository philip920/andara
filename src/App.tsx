import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { Paper } from '@mui/material';
import { defaultTheme } from './themes'
import ConnectButton from './components/connect-button/ConnectButton';
import SignUpFlow from './components/sign-up/signup'

const App: React.FunctionComponent = () => {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Paper className="App">
        <ConnectButton />
        <SignUpFlow />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
