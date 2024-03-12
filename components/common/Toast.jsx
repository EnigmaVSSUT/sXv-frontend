import { Close } from "@mui/icons-material";
import { IconButton, Snackbar } from "@mui/material";
import { useState } from "react";

const Toast = ({ message, setMessage }) => {
  const handleClose = () => {
    setMessage((v) => null);
  };
  return (
    <Snackbar
      open={message ? true : false}
      autoHideDuration={6000}
      message={message}
      onClose={handleClose}
      action={
        <IconButton onClick={handleClose}>
          <Close />
        </IconButton>
      }
    />
  );
};

export default Toast;
