import React from "react";
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';
import MyCode from "../components/MyCode";
export default function NotFoundSection(){
  let location = useLocation();
  return <React.Fragment>
    <Typography variant="h3">
      Error 404
    </Typography>
    <Typography paragraph>
      The section <MyCode>{location.pathname}</MyCode> you're looking for cannot be found.
    </Typography>
    <Typography paragraph>
      Please select an item from the left panel.
    </Typography>
  </React.Fragment>;
}