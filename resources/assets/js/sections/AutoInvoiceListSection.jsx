import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import { useFormik } from 'formik';
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Divider from "@mui/material/Divider";

import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
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
import IconButton from "@mui/material/IconButton";

import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

import { useHistory } from "react-router-dom";
import Moment from "react-moment";

const queryClient = new QueryClient();

var onActionButtonClick;

/**
 * const columns = [
 *  { field: 'name', headerName: 'Name', width: 130 },
 *  {
 *    field: 'status',
 *    headerName: 'Status',
 *    type: 'number',
 *    width: 90,
 *  },
 *  {
 *    field: 'fullName',
 *    headerName: 'Full name',
 *    description: 'This column has a value getter and is not sortable.',
 *    sortable: false,
 *    width: 160,
 *    valueGetter: (params) =>
 *      `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''
 *      }`,
 *  },
 *  {
 *    field: 'action',
 *    headerName: 'Actions',
 *    sortable: false,
 *    headerAlign: 'center',
 *    align: 'center',
 *    renderCell: (params) => {
 *      return <React.Fragment>
 *        <IconButton onClick={(e) => { onActionButtonClick(e, params.row.hash, "edit") }}><EditIcon /></IconButton>
 *      </React.Fragment>;
 *    },
 *  },
 * ];
 */

const columns = [
  { field: 'name', headerName: 'name', width: 130 },
  { field: 'status', headerName: 'status', width: 90, },
  { field: 'schedule_day', headerName: 'day', width: 120, },
  { field: 'schedule_time', headerName: 'time', width: 80, },
  { field: 'frequency', headerName: 'frequency', width: 120, },
  { field: 'invoice_no', headerName: 'invoice no', width: 80, },
  { field: 'created_at', headerName: 'created', width: 200, renderCell: (params) => {
    return <Moment date={params.value} fromNow titleFormat={appConfig.dateFormatFormal} withTitle></Moment>
  }},
  { field: 'updated_at', headerName: 'updated', width: 200, renderCell: (params) => {
    return <Moment date={params.value} fromNow titleFormat={appConfig.dateFormatFormal} withTitle></Moment>
  }},
  {
    field: 'action',
    headerName: 'Actions',
    sortable: false,
    headerAlign: 'center',
    align: 'center',
    renderCell: (params) => {
      return <React.Fragment>
        <IconButton onClick={(e) => { onActionButtonClick(e, params.row.hash, "edit") }}><EditIcon /></IconButton>
      </React.Fragment>;
    },
  },
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

function AutoInvoiceDataGrid(props){
  const [pageSize, setPageSize] = useState(appConfig.tableSize);
  const [page, setPage] = React.useState(0);
  
  var history = useHistory();
  var rows = [];
  var totalRows = 0;

  onActionButtonClick = (e, hash, action) => {
    e.stopPropagation(); // don't select this row after clicking

    history.push('autoinvoice/' + action + '/' + hash);
  };

  const fetchData =(page = 0) => axios.get('invoice',{
    params: { 
      page: page + 1,
      limit: pageSize
    }
  }).then((data) => { return data.data });

  const { 
    isLoading,
    isFetching,
    error, 
    data } = useQuery(
      ['autoinvoice-list-data', [page, pageSize] ], 
      () => fetchData(page));
  
  if (!isLoading){
    rows = data.data;
    totalRows = data.totalRows;
  }

  if (error) return 'An error has occurred: ' + error.message

  return <DataGrid pageSize={pageSize}
    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
    rowsPerPageOptions={appConfig.tableSizes}
    pagination
    disableSelectionOnClick
    paginationMode="server"
    rowCount={totalRows}
    autoHeight
    getRowId={(row) => row.hash}
    loading={isFetching}
    onPageChange={setPage}
    {...{
      columns,
      rows
    }} />
}

export default function AutoInvoiceListSection(){
  // const myLeavesData = React.useContext(leavesDataContext);
  const [leavesData,setLeavesData] = useState(null);
  
  function leavesDataResultsCallbackParent(response){
    setLeavesData(response);
  }

  return <React.Fragment>
    <Typography variant="h4">
      Automatic Invoices List
    </Typography>
    <Divider />
    <QueryClientProvider client={queryClient}>
      <AutoInvoiceDataGrid />
    </QueryClientProvider>
  </React.Fragment>
}