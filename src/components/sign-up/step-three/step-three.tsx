import React from "react";
import { Typography, Input } from "@mui/material";
import FileUpload from "../../common/file-upload/file-upload";
import { TextButton } from "../../common/styled-components";

const StepThree: React.FunctionComponent = () => {
  return (
    <>
      <Typography>Do you want to add a profile picture?</Typography>
      <FileUpload text="Yes" />
      <TextButton>No, thanks</TextButton>
    </>
  );
};

export default StepThree;
