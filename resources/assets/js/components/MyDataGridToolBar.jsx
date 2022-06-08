import { Button, Grid } from '@mui/material';
import { GridToolbarContainer, GridToolbarQuickFilter } from '@mui/x-data-grid';
import AddIcon from '@mui/icons-material/Add';
import { useHistory } from "react-router-dom";
import React from 'react';

export default function MyDataGridToolBar(props){
  const history = useHistory();

  return <GridToolbarContainer>
    <Grid item>
      <Button onClick={() => {
        history.push('/autoinvoice/new');
      }}>
        <AddIcon /> New Item
      </Button>
    </Grid>

    <Grid style={{ flex: 1 }} />

    <Grid item>
      <GridToolbarQuickFilter
        quickFilterParser={(searchInput) =>
          // searchInput.split(',').map((value) => value.trim())
          searchInput.trim()
        }
        debounceMs={200} // time before applying the new quick filter value
      />
    </Grid>
  </GridToolbarContainer>
}