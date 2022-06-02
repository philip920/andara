import React from "react";
import { Provider } from "@self.id/framework";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { defaultTheme } from "./themes";
import ConnectButton from "./components/connect-button/ConnectButton";
import SignUpFlow from "./components/sign-up/signup";
import { Paper, Grid } from "@mui/material/";

const App: React.FunctionComponent = () => {
  return (
    <Provider client={{ ceramic: "testnet-clay" }}>
      <ThemeProvider theme={defaultTheme}>
        <Paper>
          <Grid sx={{ height: "100vh" }}>
            <BrowserRouter>
              <Routes>
                <Route index element={<ConnectButton />} />
                <Route path="/signup" element={<SignUpFlow />} />
              </Routes>
            </BrowserRouter>
          </Grid>
        </Paper>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
