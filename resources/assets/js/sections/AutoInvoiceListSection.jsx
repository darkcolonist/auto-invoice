import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import { useFormik } from 'formik';
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Divider from "@mui/material/Divider";

import SearchIcon from '@mui/icons-material/Search';
import axios from '../components/Axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import MyMoment from "../components/MyMoment";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  {
    field: 'action',
    headerName: 'Actions',
    sortable: false,
    renderCell: (params) => {
      const onClick = (e) => {
        e.stopPropagation(); // don't select this row after clicking

        const row = params.row;
        return alert(JSON.stringify(row, null, 4));
      };

      return <Button onClick={onClick}>Click</Button>;
    },
  },
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''
      }`,
  }];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const SearchForm = (props) => {
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
          if(response.data.code !== 200) return;
          if(typeof props.leavesDataResultsCallback === 'function')
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
      <Button startIcon={formik.isSubmitting ? <CircularProgress size={16} /> : <SearchIcon />} variant="outlined" 
        type="submit" size="large" disabled={formik.isSubmitting}>Submit</Button>
    </Box>
}

const LeavesDataResults = (props) => {

  const LeaveDataLines = (props) => {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Employee</TableCell>
              <TableCell align="left">From</TableCell>
              <TableCell align="left">To</TableCell>
              <TableCell align="center">Authorized</TableCell>
              <TableCell align="center">Type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.lines.map((row) => (
              <TableRow
                key={row.leave_id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Chip
                    avatar={<Avatar alt={row.username} src={row.url} />}
                    label={row.email}
                    variant="outlined"
                  />
                </TableCell>
                <TableCell align="left"><MyMoment format={appConfig.dateFormatFormal}>{row.from_date}</MyMoment></TableCell>
                <TableCell align="left"><MyMoment format={appConfig.dateFormatFormal}>{row.to_date}</MyMoment></TableCell>
                <TableCell align="center">{row.authorized}</TableCell>
                <TableCell align="center">{row.type}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  }

  let render;

  if(props.leavesData == null)
    // initial load
    render = <React.Fragment></React.Fragment>
  else if(props.leavesData.length > 0)
    // data available
    render = <LeaveDataLines lines={props.leavesData}/>
  else
    // empty result-set
    render = <Typography paragraph>no match found for keyword</Typography>

  return render;
}

export default function AutoInvoiceListSection(){
  // const myLeavesData = React.useContext(leavesDataContext);
  const [leavesData,setLeavesData] = useState(null);
  const [pageSize, setPageSize] = useState(5);

  function leavesDataResultsCallbackParent(response){
    setLeavesData(response);
  }

  return <React.Fragment>
    <Typography variant="h4">
      Automatic Invoices List
    </Typography>
    <Divider />
    <DataGrid pageSize={pageSize}
      onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
      rowsPerPageOptions={[5, 10, 20]}
      pagination
      autoHeight
      {...{
        columns,
        rows
      }} />
  </React.Fragment>
}