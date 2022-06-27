import React from 'react';
import { AppBar, Grid,  Skeleton } from '@mui/material';

function rand(){
  return Math.floor(Math.random() * 40) + 10;
}

export default function AppLoading(){
  return <Grid container spacing={2}>
    <Grid item xs={12}>
      <AppBar position="fixed" />
    </Grid>
    <Grid item xs={2}>
      {[...Array(10).keys()].map((key) => (<Skeleton key={key} height={rand()} />))}
    </Grid>
    <Grid item xs={10}>
      {[...Array(10).keys()].map((key) => (<Skeleton key={key} height={rand()} />))}
    </Grid>
  </Grid>
}
