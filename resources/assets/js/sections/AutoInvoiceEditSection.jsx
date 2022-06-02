import React from "react";
import { useFormik } from 'formik';
import { useHistory, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const EditForm = (props) => {
  // const myLeavesData = React.useContext(leavesDataContext);
  const formik = useFormik({
    initialValues: {
      // txtSearch: 'christiannoel',
      txtSearch: ''
    },
    validate: values => {
      const errors = {};
      if (!values.txtSearch) {
        errors.txtSearch = 'Required';
      } else if (values.txtSearch.length < 3) {
        errors.txtSearch = 'Must be 3 characters or more';
      }

      return errors;
    },
    onSubmit: (values, actions) => {
      axios.post('getLeavesBySearchKeyword', values)
        .then((response) => {
          if (response.data.code !== 200) return;
          if (typeof props.leavesDataResultsCallback === 'function')
            props.leavesDataResultsCallback(response.data.data);
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
    onSubmit={formik.handleSubmit}
  >
    <TextField label="Search" variant="outlined" size="small"
      error={formik.errors.txtSearch !== undefined}
      helperText={formik.errors.txtSearch}
      id="txtSearch" name="txtSearch" onChange={formik.handleChange} value={formik.values.txtSearch} />
    <Button startIcon={formik.isSubmitting ? <CircularProgress size={16} /> : <SaveIcon />} variant="outlined"
      type="submit" size="large" disabled={formik.isSubmitting}>Save</Button>
  </Box>
}

export default function AutoInvoiceEditSection(){
  const { hash } = useParams();
  const history = useHistory();

  return <React.Fragment>
    <IconButton title="go back" onClick={() => {history.push('/autoinvoice')}}><ArrowBackIcon /></IconButton>
    <EditForm />
  </React.Fragment>
}