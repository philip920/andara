import React from "react";
import { Provider } from "@self.id/framework";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { defaultTheme } from "./themes";
import InitialConnect from "./components/initial-connect/initial-connect";
import SignUp from "./components/sign-up/signup";
import Home from "./components/home/home";

import { Paper, Grid } from "@mui/material/";

const App: React.FunctionComponent = () => {
  return (
    <Provider client={{ ceramic: "testnet-clay" }}>
      <ThemeProvider theme={defaultTheme}>
        <Paper>
          <Grid sx={{ height: "100vh" }}>
            <BrowserRouter>
              <Routes>
                <Route index element={<InitialConnect />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/home" element={<Home />} />
              </Routes>
            </BrowserRouter>
          </Grid>
        </Paper>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
