import React from 'react';
import styled from '@mui/material/styles/styled';

export default function MyCode(props){
  let CodeWrapper = styled('code')({
    color: "red",
    border: "1px dotted red",
    backgroundColor: "#380000",
    borderRadius: "5px",
    padding: "3px",
  });

  if(props.variant === "info")
    CodeWrapper = styled('code')({
      color: "#667df2",
      border: "1px dotted #667df2",
      backgroundColor: "#011161",
      borderRadius: "5px",
      padding: "3px",
    });

  return <CodeWrapper>{props.children}</CodeWrapper>
}