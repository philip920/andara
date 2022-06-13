import React from "react";
import { Grid, Typography } from "@mui/material";
import { TextButton } from "../../common/styled-components";

type Props = {
  onSignUpClick: () => void;
};

const Initiation: React.FunctionComponent<Props> = ({ onSignUpClick }) => {
  return (
    <Grid sx={{ flexDirection: "column" }}>
      <Typography>New to Andara?</Typography>
      <Grid sx={{ flexDirection: "row" }}>
        <TextButton onClick={onSignUpClick}>
          <Typography>Yes, sign me up</Typography>
        </TextButton>
        <TextButton>
          <Typography>No, use different wallet</Typography>
        </TextButton>
      </Grid>
    </Grid>
  );
};

export default Initiation;
