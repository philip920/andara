import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import { TextButton } from "../../common/styled-components";

const StepOne: React.FunctionComponent = () => {
  return (
    <>
      <Typography>New to Andara?</Typography>
      <Grid sx={{ flexDirection: "column" }}>
        <TextButton>
          <Typography>Yes, sign me up</Typography>
        </TextButton>
        <TextButton>
          <Typography>No, use different wallet</Typography>
        </TextButton>
      </Grid>
    </>
  );
};

export default StepOne;
