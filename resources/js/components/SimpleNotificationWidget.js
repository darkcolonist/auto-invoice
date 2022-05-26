import React, { useEffect } from 'react';
import { useSnackbar } from 'notistack';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Slide from '@mui/material/Slide';

export default function SimpleNotificationWidget() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  useEffect(() => {
    window.Echo.channel('global-notifications')
    .listen('.UserEvent', (eventData) => {
      // $("#broadcast").append('<div class="alert alert-success">' + i + '.' + eventData.title + '</div>');
      enqueueSnackbar(
        <></>
        , {
          content: 
            <Alert severity='info' variant='outlined'>
              <AlertTitle>{eventData.title}</AlertTitle>
              {eventData.data.date}: {eventData.data.hash}
            </Alert>,
          TransitionComponent: Slide,
        });
        // console.log(eventData)
      });

    return () => {
      window.Echo.leave('global-notifications');
    };
  });

  return (
    <></>
  );
}