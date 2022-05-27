import React from "react";
import { Grid, Typography } from "@mui/material";
import { TextButton } from "../../common/styled-components";

const StepOne: React.FunctionComponent = () => {
  return (
    <Grid sx={{ flexDirection: "column" }}>
      <Typography>New to Andara?</Typography>
      <Grid sx={{ flexDirection: "row" }}>
        <TextButton>
          <Typography>Yes, sign me up</Typography>
        </TextButton>
        <TextButton>
          <Typography>No, use different wallet</Typography>
        </TextButton>
      </Grid>
    </Grid>
  );
};

export default StepOne;
