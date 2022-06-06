import { Stack } from "@mui/material";
import { useFormik } from 'formik';
import { useHistory, useParams } from "react-router-dom";
import * as Yup from 'yup';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from '../components/Axios';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import DeleteIcon from '@mui/icons-material/Delete';
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import SaveIcon from '@mui/icons-material/Save';
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import ConfirmDialog, { confirmDialog } from '../components/ConfirmDialog';
import MySnackbar, { showMySnackbar } from "../components/MySnackbar";

const FormValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3)
    .required('required'),
  schedule_time: Yup.string()
    .required('required'),
  status: Yup.string()
    .required('required'),
  frequency: Yup.string()
    .required('required'),
});

const FormInitialValues = {
  hash: '',
  name: '',
  schedule_time: '09:00',
  status: 'inactive',
  frequency: 'bi-monthly',
};

const EditForm = (props) => {
  const [formValues,setFormValues] = React.useState(FormInitialValues);
  const history = useHistory();
  const editMode = props.hash === undefined ? "new" : "edit";

  const handleDeleteClick = () => {
    confirmDialog('Are you sure you want to delete ' + formik.values.name + '?', () =>
      axios.delete('/invoice/'+formik.values.hash)
        .then((data) => {
          history.push("/autoinvoice");
        })
        .catch((error) => {
          showMySnackbar("something went wrong - " + error.message
              , "error");
        })
    );
  }

  React.useEffect(() => {
    if(editMode === "new")
      return;

    axios.get('invoice/' + props.hash)
      .then((data) => {
        setFormValues(data.data.data);
      })
      .catch(error => {
        history.push("/autoinvoice");
      });
  },[]);

  const formik = useFormik({
    initialValues: formValues,
    validationSchema: FormValidationSchema,
    enableReinitialize: true,
    onSubmit: (values, actions) => {
      var _axios;

      if(editMode === "new")
        _axios = axios.post('invoice', values);
      else if(editMode === "edit")
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

  return <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
    onSubmit={formik.handleSubmit}>
    <Stack spacing={2}>
      {formik.values.hash ? <TextField label="Hash" variant="outlined" size="small"
        disabled
        value={formik.values.hash} /> : ""}

      <TextField label="Name" variant="outlined" size="small"
        error={formik.errors.name !== undefined}
        helperText={formik.errors.name}
        id="name" name="name" onChange={formik.handleChange} value={formik.values.name} />

      <TextField label="Schedule Time" variant="outlined" size="small"
        error={formik.errors.schedule_time !== undefined}
        helperText={formik.errors.schedule_time}
        type="time"
        id="schedule_time" name="schedule_time" onChange={formik.handleChange} value={formik.values.schedule_time} />

      <FormControl fullWidth size="small">
        <InputLabel id="labelstatus">Status</InputLabel>
        <Select
          labelId="labelstatus"
          id="status"
          label="Status"
          onChange={formik.handleChange('status')}
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
          onChange={formik.handleChange('frequency')}
          error={formik.errors.frequency !== undefined}
          value={formik.values.frequency}>
          <MenuItem value="bi-monthly">bi-monthly</MenuItem>
          <MenuItem value="monthly">monthly</MenuItem>
        </Select>
        <FormHelperText>{formik.errors.frequency}</FormHelperText>
      </FormControl>
      
      <Box>
        <FormHelperText>following the +0800 timezone</FormHelperText>

        <Stack direction="row" spacing={1}>
          <Button startIcon={formik.isSubmitting ? <CircularProgress size={16} /> : <SaveIcon />} 
            variant="outlined" type="submit" size="large" disabled={formik.isSubmitting}>Save</Button>

          {editMode === "edit"?
            <Button startIcon={formik.isSubmitting ? <CircularProgress size={16} /> : <DeleteIcon />}
              variant="outlined" color="error" size="large" disabled={formik.isSubmitting}
              onClick={handleDeleteClick}>Delete</Button>
          :""}
        </Stack>
      </Box>
    </Stack>
  </Box>
}

// const queryClient = new QueryClient();
export default function AutoInvoiceEditSection(){
  const { hash } = useParams();
  const history = useHistory();

  return <React.Fragment>
    <IconButton title="go back" onClick={() => { history.push('/autoinvoice') }}><ArrowBackIcon /></IconButton>
    <EditForm {...{ hash }} />
    <ConfirmDialog />
    <MySnackbar />
  </React.Fragment>
}