import { Alert, AlertTitle, Button, TextField } from '@mui/material';
import React, { Fragment, useRef } from 'react';
import { useSnackbar } from 'notistack';

export default function SubscribeToChannelWidget() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const channelRef = useRef("");
  const previousChannelRef = useRef("");

  function handleSubscribeClick(){
    if (channelRef.current === previousChannelRef.current ||
        channelRef.current.trim() === ""){
      enqueueSnackbar("no change detected or empty values not allowed", {
        variant: "warning"
      });
      return;
    }

    channelRef.current = channelRef.current.trim();

    if (previousChannelRef.current !== ""){
      window.Echo.leave(previousChannelRef.current);
      enqueueSnackbar(`unsubscribed from ${previousChannelRef.current}`);
    }
    
    previousChannelRef.current = channelRef.current;

    window.Echo.channel(channelRef.current)
      .listen('.UserEvent', (eventData) => {
        enqueueSnackbar(
          <></>
          , {
            content:
              <Alert severity='warning' variant='outlined'>
                <AlertTitle>{eventData.title}</AlertTitle>
                {eventData.data.date}: {eventData.data.message}
              </Alert>,
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'right',
            }
          });
      });

    enqueueSnackbar(`subscribed to ${channelRef.current}`);
  }

  return (
    <div>
      <TextField variant="outlined" onBlur={e => { channelRef.current = e.target.value }} defaultValue={channelRef.current} label="channel"></TextField>
      <Button onClick={handleSubscribeClick} variant="outlined">subscribe</Button>
    </div>
  );
}