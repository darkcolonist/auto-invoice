import create from 'zustand';
import React from 'react';
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const useMySnackbarStore = create((set) => ({
  message: 'hello',
  severity: undefined, // defaults to success in snackbar
  open: false
}));

export default function MySnackbar(){
  // destructure the store data and functions
  const { message, severity, open } = useMySnackbarStore();

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    useMySnackbarStore.setState({
      open: false
    });
  };

  return (
    <Snackbar open={open} autoHideDuration={appConfig.snackbarDuration}
      onClose={handleSnackbarClose} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
      <Alert onClose={handleSnackbarClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export const showMySnackbar = (message, severity) => {
  useMySnackbarStore.setState({
    message,
    severity,
    open: true
  });
};