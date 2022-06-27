import React from "react";
import Typography from '@mui/material/Typography';
import { Button, CircularProgress, Grid, Stack, TextField } from "@mui/material";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import MySnackbar, { showMySnackbar } from "../components/MySnackbar";
import LoginIcon from '@mui/icons-material/Login';
import axios from '../components/Axios';

import { useAuthStore } from "../components/MyZustandStateStore";

const FormValidationSchema = Yup.object().shape({
  email: Yup.string()
    .min(3)
    .email()
    .required('required'),
  password: Yup.string()
    .min(3)
    .required('required'),
});

const FormInitialValues = {
  email: '',
  password: '',
};

export default function LoginSection(){
  const [formValues,setFormValues] = React.useState(FormInitialValues);

  const { loggedIn } = useAuthStore();

  if (loggedIn) window.location = appBaseURL;


  const formik = useFormik({
    initialValues: formValues,
    validationSchema: FormValidationSchema,
    enableReinitialize: true,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values, actions) => {
      actions.setSubmitting(true);

      axios.post('login', values)
        .then((response) => {
          if (response.data.code !== 200) {
            showMySnackbar(response.data.message, "error");
            return;
          };

          showMySnackbar("logging you in, please wait.");
          setTimeout(() => {
            window.location = appBaseURL;
          }, 2000);
        })
        .then(() => {
          actions.setSubmitting(false);
        })
        .catch(function (error) {
          showMySnackbar("something went wrong - " + error.message
            , "error");
          actions.setSubmitting(false);
        });
    },
  });

  return <React.Fragment>
    <Typography variant="h5">
      LOGIN
    </Typography>
    <Grid container spacing={2}
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={formik.handleSubmit}>
      <Grid item xs={3}>
        <Stack spacing={2}>
          <MySnackbar></MySnackbar>
          <TextField label="Email" size="small" variant="standard"
            error={formik.errors.email !== undefined}
            helperText={formik.errors.email}
            id="email" name="email" onChange={formik.handleChange} value={formik.values.email} />

          <TextField label="Password" size="small" variant="standard"
            error={formik.errors.password !== undefined} type="password"
            helperText={formik.errors.password}
            id="password" name="password" onChange={formik.handleChange} value={formik.values.password} />

          <Button startIcon={formik.isSubmitting ? <CircularProgress size={16} /> : <LoginIcon />}
            variant="outlined" type="submit" size="large" disabled={formik.isSubmitting}>Login</Button>
        </Stack>
      </Grid>
    </Grid>
  </React.Fragment>;
}