import React from "react";
import Typography from '@mui/material/Typography';
import { Button, Grid, Stack, TextField } from "@mui/material";
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { useAuthStore } from "../components/MyZustandStateStore";

const FormValidationSchema = Yup.object().shape({
  username: Yup.string()
    .min(3)
    .required('required'),
  password: Yup.string()
    .min(3)
    .required('required'),
});

const FormInitialValues = {
  username: '',
  password: '',
};

export default function LoginSection(){
  const [ formValues, setFormValues ] = React.useState(FormInitialValues);
  const { loggedIn, email } = useAuthStore();

  const formik = useFormik({
    initialValues: formValues,
    validationSchema: FormValidationSchema,
    enableReinitialize: true,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values, actions) => {
      var _axios;

      if (editMode === "new")
        _axios = axios.post('invoice', values);
      else if (editMode === "edit")
        _axios = axios.patch('invoice/' + props.hash, values);

      _axios.then((response) => {
        if (response.data.code !== 200) {
          showMySnackbar("something went wrong - " + response.data.message
            , "error");
          return;
        };

        showMySnackbar(response.data.data.name + " saved!");
        setFormValues(response.data.data);

        if (typeof props.successCallback === 'function')
          props.successCallback(response.data);

        if (editMode === "new") {
          history.push("/autoinvoice/edit/" + response.data.data.hash);
        }
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
    <Typography variant="h3">
      please login
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
          <TextField label="Username" size="small" variant="standard"
            error={formik.errors.username !== undefined}
            helperText={formik.errors.username}
            id="username" name="username" onChange={formik.handleChange} value={formik.values.username} />

          <TextField label="Password" size="small" variant="standard"
            error={formik.errors.password !== undefined} type="password"
            helperText={formik.errors.password}
            id="password" name="password" onChange={formik.handleChange} value={formik.values.password} />

          <Button type="button" color="primary">
            Log in
          </Button>
        </Stack>
      </Grid>
    </Grid>
  </React.Fragment>;
}