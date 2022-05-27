import React from "react";
import { Typography, Grid } from "@mui/material";
import {
  TextField,
  Autocomplete,
} from "../../common/styled-components";

const options = ["testoption1", "testoption2", "testoption3", "testoption4"];

const StepFour: React.FunctionComponent = () => {
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
        options={options}
        renderInput={(params) => <TextField {...params} variant="standard" />}
      />
    </Grid>
  );
};

export default StepFour;
