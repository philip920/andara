import React from "react";
import { Typography, Autocomplete } from "@mui/material";
import FileUpload from "../../common/file-upload/file-upload";
import { TextButton, TextField } from "../../common/styled-components";

const options = ["testoption1", "testoption2", "testoption3", "testoption4"];

const StepThree: React.FunctionComponent = () => {
  return (
    <>
      <Typography>How are you using crypto?</Typography>
      <Typography>
        Select one or more use cases from our broad collection or add a new one.
      </Typography>
      <Typography>
        Once you're signed up you can add items to each use case.
      </Typography>
      <Autocomplete
        options={options}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
    </>
  );
};

export default StepThree;
