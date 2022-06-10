import { Button, Grid, TextField } from '@mui/material';
import { GridToolbarContainer } from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import { useHistory } from "react-router-dom";
import React from 'react';

export function CustomSearchBox(props){
  /**
   * below is the original
   */
  // return <GridToolbarQuickFilter
  //   quickFilterParser={(searchInput) =>
  //     // searchInput.split(',').map((value) => value.trim())
  //     searchInput.trim()
  //   }
  //   debounceMs={200} // time before applying the new quick filter value
  // />

  function keyPress(e){
    if (e.keyCode == 13) {
      // if(e.target.value.trim() === "")
      //   return false;

      var ourNewValue = e.target.value.trim();
      if(typeof props.onQuickSearch === 'function')
        props.onQuickSearch(ourNewValue);
    }
  }

  return <TextField
    size='small'
    placeholder='enter to search'
    variant='standard'
    defaultValue={props.quickSearchValue}
    onKeyUp={keyPress}
    InputProps={{
      startAdornment: <SearchIcon />
    }}
  ></TextField>
}

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
      <CustomSearchBox
        quickSearchValue={props.quickSearchValue}
        onQuickSearch={props.onQuickSearch}
      />
    </Grid>
  </GridToolbarContainer>
}