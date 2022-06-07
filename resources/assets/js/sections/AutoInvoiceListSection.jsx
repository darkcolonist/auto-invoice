import { DataGrid } from "@mui/x-data-grid";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { useHistory } from "react-router-dom";
import axios from '../components/Axios';
import create from 'zustand';
import Divider from "@mui/material/Divider";
import EditIcon from '@mui/icons-material/Edit';
import IconButton from "@mui/material/IconButton";
import MyMoment from "../components/MyMoment";
import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import MyDataGridToolBar from "../components/MyDataGridToolBar";

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
  { field: 'created_at', headerName: 'created', width: 120, renderCell: (params) => {
    return <MyMoment date={params.value} fromNow titleFormat={appConfig.dateFormatFormal} withTitle></MyMoment>
  }},
  { field: 'updated_at', headerName: 'updated', width: 120, renderCell: (params) => {
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

const useAutoinvoiceListStore = create((set) => ({
  dataGridOptions: {
    page: 0,
    sortModel: [{ field: 'updated_at', sort: 'desc' }],
    pageSize: appConfig.tableSize,
    filterModel: { "items": [], "quickFilterValues": [""] }
  }
}));

function AutoInvoiceDataGrid(props){
  const { dataGridOptions } = useAutoinvoiceListStore();
  
  var history = useHistory();
  var rows = [];
  var totalRows = 0;

  onActionButtonClick = (e, hash, action) => {
    e.stopPropagation(); // don't select this row after clicking

    history.push('/autoinvoice/' + action + '/' + hash);
  };

  const fetchData = ( dataGridOptions ) => axios.get('invoice',{
    params: { 
      ...dataGridOptions,
      page: dataGridOptions.page + 1,
      limit: dataGridOptions.pageSize
    }
  }).then((data) => { return data.data });

  const { 
    isLoading,
    isFetching,
    error, 
    data } = useQuery(
      ['autoinvoice-list-data', [dataGridOptions] ], 
      () => fetchData(dataGridOptions));
  
  if (!isLoading){
    rows = data.data;
    totalRows = data.totalRows;
  }

  if (error) return 'An error has occurred: ' + error.message

  return <DataGrid 
    pageSize={dataGridOptions.pageSize}
    initialState={{
      sorting:{
        sortModel: dataGridOptions.sortModel,
      }
    }}
    components={{
      Toolbar: MyDataGridToolBar
    }}
    density={appConfig.tableDensity}
    onPageSizeChange={(pageSize) => useAutoinvoiceListStore.setState(state => { state.dataGridOptions.pageSize = pageSize }) }
    rowsPerPageOptions={appConfig.tableSizes}
    pagination
    page={dataGridOptions.page}
    disableSelectionOnClick
    paginationMode="server"
    sortingMode="server"
    filterMode="server"
    filterModel={dataGridOptions.filterModel}
    onFilterModelChange={(filterModel) => useAutoinvoiceListStore.setState(state => { state.dataGridOptions.filterModel = filterModel }) }
    rowCount={totalRows}
    autoHeight
    getRowId={(row) => row.hash}
    loading={isFetching}
    onPageChange={(page) => useAutoinvoiceListStore.setState(state => { state.dataGridOptions.page = page }) }
    onSortModelChange={(sortModel) => useAutoinvoiceListStore.setState(state => { state.dataGridOptions.sortModel = sortModel }) }
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