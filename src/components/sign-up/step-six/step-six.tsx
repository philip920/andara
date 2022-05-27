import React from "react";
import { Typography, Grid } from "@mui/material";
import { TextButton } from "../../common/styled-components";
import { styled } from "@mui/system";

 const BorderTextButton= styled(TextButton)({
  marginTop:  "16px",
  border:  "1px solid",
  borderRadius: "8px",
  padding: "16px"
});

const StepSix: React.FunctionComponent = () => {
  return (
    <Grid sx={{ flexDirection: "column" }}>
      <Typography>Great! That's all we need to set up your account.</Typography>
      <BorderTextButton>
        <Typography variant="h5" fontWeight="bold">
          Create Account
        </Typography>
      </BorderTextButton>
    </Grid>
  );
};

export default StepSix;
