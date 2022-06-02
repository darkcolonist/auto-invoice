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
import AddIcon from '@mui/icons-material/Add';
import axios from '../components/Axios';
import MyMoment from "../components/MyMoment";
import { DataGrid } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { useHistory } from "react-router-dom";

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
    return <MyMoment date={params.value} fromNow titleFormat={appConfig.dateFormatFormal} withTitle></MyMoment>
  }},
  { field: 'updated_at', headerName: 'updated', width: 200, renderCell: (params) => {
    return <MyMoment date={params.value} fromNow titleFormat={appConfig.dateFormatFormal} withTitle></MyMoment>
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

const MyCustomToolbar = (props) => {
  const history = useHistory();

  return <React.Fragment>
    <Button onClick={() => {
      history.push('/autoinvoice/new');
    }}>
      <AddIcon /> New Item
    </Button>
  </React.Fragment>
}

function AutoInvoiceDataGrid(props){
  const [pageSize, setPageSize] = useState(appConfig.tableSize);
  const [page, setPage] = React.useState(0);
  
  var history = useHistory();
  var rows = [];
  var totalRows = 0;

  onActionButtonClick = (e, hash, action) => {
    e.stopPropagation(); // don't select this row after clicking

    history.push('/autoinvoice/' + action + '/' + hash);
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
    components={{
      Toolbar: MyCustomToolbar
    }}
    density={appConfig.tableDensity}
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