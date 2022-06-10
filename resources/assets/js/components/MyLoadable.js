import Skeleton from '@mui/material/Skeleton';
import React from 'react';

export const loadableParams = {
  fallback: <React.Fragment>
    <Skeleton height={50} />
    <Skeleton height={150} />
    <Skeleton height={10} />
    <Skeleton height={10} />
    <Skeleton height={10} />
    <Skeleton height={50} />
  </React.Fragment>
}