import React from 'react';
import { Grid,  Skeleton } from '@mui/material';

function rand(min, max){
  return Math.floor(Math.random() * max) + min;
}

function EnhancedSkeleton(props){
  return <Skeleton height={rand(10, 40)} width={rand(20, 60) + "%"} {...props} />
}

export default function AppLoading(){
  return <Grid container spacing={2}>
    <Grid item xs={12}>
      <Skeleton />
    </Grid>
    <Grid item xs={2}>
      {[...Array(rand(8,10)).keys()].map((key) => (<EnhancedSkeleton key={key} />))}
    </Grid>
    <Grid item xs={10}>
      {[...Array(rand(8, 10)).keys()].map((key) => (<EnhancedSkeleton key={key} />))}
    </Grid>
    <Grid item xs={12}>
      <Skeleton />
    </Grid>
    <Grid item xs={2}>
      {[...Array(rand(2, 3)).keys()].map((key) => (<EnhancedSkeleton key={key} />))}
    </Grid>
    <Grid item xs={10}>
      {[...Array(rand(2, 3)).keys()].map((key) => (<EnhancedSkeleton key={key} />))}
    </Grid>
    <Grid item xs={12}>
      <Skeleton />
    </Grid>
  </Grid>
}
