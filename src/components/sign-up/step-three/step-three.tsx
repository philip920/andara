import React from "react";
import { Typography, Grid } from "@mui/material";
import FileUpload from "../../common/file-upload/file-upload";
import { TextButton } from "../../common/styled-components";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onNextClick: () => void;
};

const StepThree: React.FunctionComponent<Props> = ({
  onChange,
  onNextClick,
}) => {
  return (
    <Grid sx={{ flexDirection: "column" }}>
      <Typography>Do you want to add a profile picture?</Typography>
      <FileUpload name="imageUrl" onChange={onChange} text="Yes" />
      <TextButton onClick={onNextClick}>No, thanks</TextButton>
      <TextButton onClick={onNextClick}>Next</TextButton>
    </Grid>
  );
};

export default StepThree;
