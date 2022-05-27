import React from "react";
import { Typography, Grid } from "@mui/material";
import { TextField } from "../../common/styled-components";

const StepFive: React.FunctionComponent = () => {
  return (
    <Grid sx={{ flexDirection: "column" }}>
      <Typography>Do you want to add some contacts?</Typography>
      <Typography>Add wallet adresses of friends that use Andara. </Typography>
      <TextField variant="standard" />
    </Grid>
  );
};

export default StepFive;
