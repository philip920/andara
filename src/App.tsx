import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { Paper, Typography } from '@mui/material';
import { defaultTheme } from './themes'
import ConnectButton from './components/connect-button/ConnectButton';

const App: React.FunctionComponent = () => {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Paper className="App">
        <Typography variant="h3" color="textPrimary">
          Test
        </Typography>
        <Typography variant="h3" color="textSecondary">
          Test
        </Typography>
        <ConnectButton />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
