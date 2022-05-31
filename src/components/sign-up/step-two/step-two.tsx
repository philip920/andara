import React from "react";
import { Typography, Grid } from "@mui/material";
import { TextField, TextButton } from "../../common/styled-components";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onNextClick: () => void;
};

const StepTwo: React.FunctionComponent<Props> = ({ onChange, onNextClick }) => {
  return (
    <Grid sx={{ flexDirection: "column" }}>
      <Typography>What's your user name?</Typography>
      <TextField
        name="username"
        color="primary"
        variant="standard"
        onChange={onChange}
      />
      <TextButton onClick={onNextClick}>Next</TextButton>
    </Grid>
  );
};

export default StepTwo;
