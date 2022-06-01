import React from "react";
import { Typography, Grid } from "@mui/material";
import { UseCases } from "../../../types/general";
import {
  TextField,
  Autocomplete,
  TextButton,
} from "../../common/styled-components";

type Props = {
  options: string[];
  onChange: (value: UseCases | unknown) => void;
  onNextClick: () => void;
};

const StepFour: React.FunctionComponent<Props> = ({
  options,
  onChange,
  onNextClick,
}) => {
  return (
    <Grid sx={{ flexDirection: "column" }}>
      <Typography>How are you using crypto?</Typography>
      <Typography>
        Select one or more use cases from our broad collection or add a new one.
      </Typography>
      <Typography>
        Once you're signed up you can add items to each use case.
      </Typography>
      <Autocomplete
        onChange={(event, value) => onChange(value)}
        multiple
        options={options}
        renderInput={(params) => <TextField {...params} variant="standard" />}
      />
      <TextButton onClick={onNextClick}>Next</TextButton>
    </Grid>
  );
};

export default StepFour;
