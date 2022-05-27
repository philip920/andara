import React from "react";
import { Typography, Grid } from "@mui/material";
import { TextField } from "../../common/styled-components";

const StepTwo: React.FunctionComponent = () => {
  return (
    <Grid sx={{ flexDirection: "column" }}>
      <Typography>What's your user name?</Typography>
      <TextField color="primary" variant="standard" />
    </Grid>
  );
};

export default StepTwo;
