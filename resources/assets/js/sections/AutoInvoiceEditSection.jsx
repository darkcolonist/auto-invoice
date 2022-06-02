import React from "react";
import { useFormik } from 'formik';
import { useHistory, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import Select from "@mui/material/Select";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import * as Yup from 'yup';
import CircularProgress from "@mui/material/CircularProgress";
import axios from '../components/Axios';

const FormValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3)
    .required(),
  schedule_time: Yup.string()
    .required(),
  status: Yup.string()
    .required(),
  frequency: Yup.string()
    .required(),
});

const FormInitialValues = {
  name: '',
  schedule_time: '09:00',
  status: 'inactive',
  frequency: 'bi-monthly',
};

const EditForm = (props) => {
  const [formValues,setFormValues] = React.useState(FormInitialValues);

  const fetchData = (hash = 0) => axios.get('invoice/'+hash)
    .then((data) => { 
      // setFormValues(data.data);
      return data.data });

  const {
    isLoading,
    isFetching,
    error,
    data } = useQuery(
      ['autoinvoice-form-data', [formValues, props.hash]],
      () => fetchData(props.hash));

  const formik = useFormik({
    initialValues: formValues,
    validationSchema: FormValidationSchema,
    enableReinitialize: true,
    onSubmit: (values, actions) => {
      // console.log(values);

      // setTimeout(() => {
      //   actions.setSubmitting(false);
      // }, 2000);

      axios.patch('invoice/'+props.hash, values)
        .then((response) => {
          if (response.data.code !== 200) return;
          if (typeof props.successCallback === 'function')
            props.successCallback(response.data);
        })
        .then(() => {
          actions.setSubmitting(false);
        });
    },
  });

  return <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
    onSubmit={formik.handleSubmit}>
    <TextField label="Hash" variant="outlined" size="small"
      disabled
      value={formik.values.hash} />

    <TextField label="Name" variant="outlined" size="small"
      error={formik.errors.name !== undefined}
      helperText={formik.errors.name}
      id="name" name="name" onChange={formik.handleChange} value={formik.values.name} />

    <TextField label="Schedule Time" variant="outlined" size="small"
      error={formik.errors.schedule_time !== undefined}
      helperText={formik.errors.schedule_time}
      id="schedule_time" name="schedule_time" onChange={formik.handleChange} value={formik.values.schedule_time} />
    
    <FormControl fullWidth size="small">
      <InputLabel id="labelstatus">Status</InputLabel>
      <Select
        labelId="labelstatus"
        id="status"
        label="Status"
        onChange={formik.handleChange}
        error={formik.errors.status !== undefined}
        value={formik.values.status}>
        <MenuItem value="active">active</MenuItem>
        <MenuItem value="inactive">inactive</MenuItem>
      </Select>
      <FormHelperText>{formik.errors.status}</FormHelperText>
    </FormControl>

    <FormControl fullWidth size="small">
      <InputLabel id="labelfrequency">Frequency</InputLabel>
      <Select
        labelId="labelfrequency"
        id="frequency"
        label="frequency"
        onChange={formik.handleChange}
        error={formik.errors.frequency !== undefined}
        value={formik.values.frequency}>
        <MenuItem value="bi-monthly">bi-monthly</MenuItem>
        <MenuItem value="monthly">monthly</MenuItem>
      </Select>
      <FormHelperText>{formik.errors.frequency}</FormHelperText>
    </FormControl>
    <div>
      <FormHelperText>following the +0800 timezone</FormHelperText>
      <Button startIcon={formik.isSubmitting ? <CircularProgress size={16} /> : <SaveIcon />} variant="outlined"
        type="submit" size="large" disabled={formik.isSubmitting}>Save</Button>
    </div>
  </Box>
}

const queryClient = new QueryClient();
export default function AutoInvoiceEditSection(){
  const { hash } = useParams();
  const history = useHistory();

  return <QueryClientProvider client={queryClient}>
    <IconButton title="go back" onClick={() => { history.push('/autoinvoice') }}><ArrowBackIcon /></IconButton>
    <EditForm {...{ hash }} />
  </QueryClientProvider>
}