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
import Chip from "@mui/material/Chip";
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

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
  { field: 'status', headerName: 'status', width: 100, 
    headerAlign: 'center', /* align: 'center', */
    renderCell: (params) => {
      let chipParams = {
        color: "success",
        size: "small",
        variant: "filled",
        label: params.value,
        icon: <RadioButtonCheckedIcon />
      };

      if (params.value !== "active"){
        chipParams = {
          ...chipParams,
          variant: "outlined",
          icon: <RadioButtonUncheckedIcon />,
          color: "default"
        }
      }
        
      return <Chip {...chipParams} />;
    }},
  { field: 'schedule_day', headerName: 'day', width: 50, 
    renderCell: (params) => {
      return params.value.substring(0,3).toUpperCase();
    }},
  { field: 'schedule_time', headerName: 'time', width: 80, },
  { field: 'frequency', headerName: 'frequency', width: 120, },
  { field: 'invoice_no', headerName: 'invoice no', width: 80, },
  { field: 'created_at', headerName: 'created', width: 120, renderCell: (params) => {
    return <MyMoment date={params.value} fromNow titleFormat={appConfig.dateFormatFormalLong} withTitle></MyMoment>
  }},
  { field: 'updated_at', headerName: 'updated', width: 120, renderCell: (params) => {
    return <MyMoment date={params.value} fromNow titleFormat={appConfig.dateFormatFormalLong} withTitle></MyMoment>
  }},
  {
    field: 'next_invoice', headerName: 'next invoice', width: 120, sortable: false,
    renderCell: (params) => {
      let render;

      if(params.row.job)
        render = <MyMoment date={params.row.job.available_at} fromNow titleFormat={appConfig.dateFormatFormalLong} withTitle></MyMoment>

      return render;
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
    // sortModel: [{ field: 'updated_at', sort: 'desc' }],
    sortModel: [],
    pageSize: appConfig.tableSize,
    searchKeyword: ""
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
    componentsProps={{
      toolbar: {
        quickSearchValue: dataGridOptions.searchKeyword,
        onQuickSearch: (searchKeyword) => useAutoinvoiceListStore.setState(state => { state.dataGridOptions.searchKeyword = searchKeyword })
      }
    }}
    density={appConfig.tableDensity}
    onPageSizeChange={(pageSize) => useAutoinvoiceListStore.setState(state => { state.dataGridOptions.pageSize = pageSize }) }
    rowsPerPageOptions={appConfig.tableSizes}
    pagination
    page={dataGridOptions.page}
    disableSelectionOnClick
    paginationMode="server"
    sortingMode="server"
    rowCount={totalRows}
    autoHeight
    getRowId={(row) => row.hash}
    loading={isFetching}
    disableColumnFilter
    disableColumnSelector
    disableDensitySelector
    disableColumnMenu 
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