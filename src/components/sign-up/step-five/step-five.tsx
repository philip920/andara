import React, { useState } from "react";
import { Typography, Grid } from "@mui/material";
import { TextField, TextButton } from "../../common/styled-components";
import { ContactList } from "../../../types/general";

type Props = {
  onChange: (value: ContactList | unknown) => void;
  onNextClick: () => void;
};

// TODO: add contact verification before adding it to the list.

const StepFive: React.FunctionComponent<Props> = ({ onChange, onNextClick }) => {
  const [newContactList, setNewContactList] = useState<ContactList>([]);
  const [inputValue, setInputValue] = useState("");

  const onAddClick = (): void => {
    setNewContactList([...newContactList, { authWalletAdress: inputValue }]);
  };

  const onSaveClick = (): void => {
    onChange(newContactList);
    onNextClick();
  };

  return (
    <Grid sx={{ flexDirection: "column" }}>
      <Typography>Do you want to add some contacts?</Typography>
      <Typography>Add wallet adresses of friends that use Andara. </Typography>
      <TextField
        onChange={(e) => setInputValue(e.target.value)}
        variant="standard"
      />
      <TextButton onClick={onAddClick}>Add</TextButton>
      <TextButton onClick={onSaveClick}>Save contacts and proceed</TextButton>
    </Grid>
  );
};

export default StepFive;
