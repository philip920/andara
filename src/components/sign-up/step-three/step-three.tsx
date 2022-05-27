import React from "react";
import { Typography, Grid } from "@mui/material";
import FileUpload from "../../common/file-upload/file-upload";
import { TextButton } from "../../common/styled-components";

const StepThree: React.FunctionComponent = () => {
  return (
    <Grid sx={{ flexDirection: "column" }}>
      <Typography>Do you want to add a profile picture?</Typography>
      <FileUpload text="Yes" />
      <TextButton>No, thanks</TextButton>
    </Grid>
  );
};

export default StepThree;
