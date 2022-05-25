import React from "react";
import { Typography } from "@mui/material";
import { TextField } from "../../common/styled-components";

const StepTwo: React.FunctionComponent = () => {
  return (
    <>
      <Typography>What's your user name?</Typography>
      <TextField color="primary" variant="standard" />
    </>
  );
};

export default StepTwo;
