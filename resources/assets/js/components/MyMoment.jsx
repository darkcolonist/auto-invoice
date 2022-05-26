import React from 'react';
import styled from '@mui/material/styles/styled';
import Moment from 'react-moment';

export default function MyMoment(props){
  let CodeWrapper = styled(Moment)({
    fontFamily: "monospace"
  });

  return <CodeWrapper {...props}>{props.children}</CodeWrapper>
}