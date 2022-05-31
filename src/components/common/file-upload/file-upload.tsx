import React from "react";
import { TextButton } from "../../common/styled-components";
import Button from "@mui/material/Button";

import { styled } from "@mui/material/styles";

type Props = {
  name:string;
  text: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = styled("input")({
  display: "none",
});

const FileUpload: React.FunctionComponent<Props> = ({name, text, onChange }) => {
  return (
    <label htmlFor="contained-button-file">
      <Input name={name} onChange={onChange} accept="image/*" id="contained-button-file" multiple type="file" />
      <Button
        component="span"
        sx={{
          color: "#fff",
          transition: "transform 0.2s ease-out",
          textTransform: "none",
          "&:hover": {
            background: "none",
            transform: "scale(1.05)",
          },
          "&:active": {
            transform: "scale(0.95)",
          },
          "&:focus": {
            backgrounds: "none",
          },
        }}
      >
        {text}
      </Button>
    </label>
  );
};

export default FileUpload;
