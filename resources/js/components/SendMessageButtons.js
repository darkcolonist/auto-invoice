import { Button, TextField, Box } from '@mui/material';
import axios from 'axios';
import React, { Fragment, useRef } from 'react';
import SubscribeToChannelWidget from './SubscribeToChannelWidget';

export default function SendMessageButtons() {

  const customMessage = useRef("hello");
  const customChannel = useRef("custom");

  const boxProps = {
    component:"form",
    sx:{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
      p: 1,
      m: 1,
      backgroundColor: "rgba(255,255,255,.05)",
      borderRadius: "5px"
    },
    noValidate: true,
    autoComplete: "off"
  };

  // useEffect(() => {
    
  // });

  function handleDefaultGlobalClick(){
    axios.get("/test")
      .then(result => {});
  }

  function handleCustomChannelClick(){
    
    axios.get('/test/custom', {
      params: {
        channel: customChannel.current,
        message: customMessage.current
      }
    })
      .then(result => {});
  }

  return (
    <Fragment>
      <Box {...boxProps}>
        <div>
          <Button onClick={handleDefaultGlobalClick} variant="outlined">default global</Button>
        </div>
      </Box>
      <Box {...boxProps}>
        <div>
          <TextField variant="outlined" onChange={e => customChannel.current = e.target.value} defaultValue={customChannel.current} label="channel"></TextField>
          <TextField variant="outlined" onChange={e => customMessage.current = e.target.value} defaultValue={customMessage.current} label="message"></TextField>
          <Button onClick={handleCustomChannelClick} variant="outlined">custom channel</Button>
        </div>
      </Box>
      <Box {...boxProps}>
        <SubscribeToChannelWidget />
      </Box>
    </Fragment>
  );
}