import React from "react";
import { Provider } from "@self.id/framework";
import { ThemeProvider } from "@mui/material/styles";
import { defaultTheme } from "./themes";
import ConnectButton from "./components/connect-button/ConnectButton";
import SignUpFlow from "./components/sign-up/signup";
import { Paper, Grid } from "@mui/material/";

const App: React.FunctionComponent = () => {
  return (
    <Provider client={{ ceramic: "testnet-clay" }}>
      <ThemeProvider theme={defaultTheme}>
        <Paper>
          <Grid sx={{ height: "100vh"}}>
            <ConnectButton />
            <SignUpFlow />
          </Grid>
        </Paper>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
