import { Grid, Stack } from "@mui/material";
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
  schedule_day: Yup.string()
    .required('required'),
  frequency: Yup.string()
    .required('required'),
});

const FormInitialValues = {
  hash: '',
  name: '',
  schedule_time: '09:00',
  status: '',
  frequency: '',
  schedule_day: '',
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
    validateOnBlur: false,
    validateOnChange: false,
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

  return <Grid container spacing={2}
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
    onSubmit={formik.handleSubmit}>
      <Grid item xs={4}>
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
            <FormHelperText
              error={formik.errors.status !== undefined}
            >{formik.errors.status}</FormHelperText>
          </FormControl>

          <FormControl fullWidth size="small">
            <InputLabel id="labelDay">Day</InputLabel>
            <Select
              labelId="labelDay"
              id="schedule_day"
              label="schedule_day"
              onChange={formik.handleChange('schedule_day')}
              error={formik.errors.schedule_day !== undefined}
              value={formik.values.schedule_day}>
              <MenuItem value="monday">monday</MenuItem>
              <MenuItem value="tuesday">tuesday</MenuItem>
              <MenuItem value="wednesday">wednesday</MenuItem>
              <MenuItem value="thursday">thursday</MenuItem>
              <MenuItem value="friday">friday</MenuItem>
              <MenuItem value="saturday">saturday</MenuItem>
              <MenuItem value="sunday">sunday</MenuItem>
            </Select>
            <FormHelperText
              error={formik.errors.schedule_day !== undefined}
            >{formik.errors.schedule_day}</FormHelperText>
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
            <FormHelperText
              error={formik.errors.frequency !== undefined}
            >{formik.errors.frequency}</FormHelperText>
          </FormControl>
        </Stack>
      </Grid>

      <Grid item xs={4}>
        <Stack spacing={2}>
          {[
            { field: "contact_details", label: "Contact Details" },
            { field: "bill_to_details", label: "Bill To Details" },
            { field: "account_details", label: "Account Details" },
          ].map((v) => (
            <TextField
              key={v.field} id={v.field} name={v.field}
              onChange={formik.handleChange}
              value={formik.values[v.field] ?? ""}
              helperText={formik.errors[v.field]}
              label={v.label}
              placeholder={v.placeholder ?? "as json format ie., { \"something\": \"something's value\" }"}
              rows={v.rows ?? 3}
              multiline
              size="small"
            />
          ))}
        </Stack>
      </Grid>

      <Grid item xs={12}>
        <FormHelperText>following the +0800 timezone</FormHelperText>
        <Stack direction="row" spacing={1}>
          {editMode === "edit"
            ?
            <React.Fragment>
              <Button startIcon={formik.isSubmitting ? <CircularProgress size={16} /> : <SaveIcon />}
                variant="outlined" type="submit" size="large" disabled={formik.isSubmitting}>Update</Button>
              <Button startIcon={formik.isSubmitting ? <CircularProgress size={16} /> : <DeleteIcon />}
                variant="outlined" color="error" size="large" disabled={formik.isSubmitting}
                onClick={handleDeleteClick}>Delete</Button>
            </React.Fragment>
            :
            <React.Fragment>
              <Button startIcon={formik.isSubmitting ? <CircularProgress size={16} /> : <SaveIcon />}
                variant="outlined" type="submit" size="large" disabled={formik.isSubmitting}>Create</Button>
            </React.Fragment>
          }
        </Stack>
      </Grid>
  </Grid>
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