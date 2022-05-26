import React from "react";
import Typography from '@mui/material/Typography';
import {useLocation} from 'react-router-dom';
import MyCode from "../components/MyCode";
export default function UnderConstructionSection(){
  let location = useLocation();

  return <React.Fragment>
    <Typography variant="h3">
      Under Construction
    </Typography>
    <Typography paragraph>
      The section <MyCode variant="info">{location.pathname}</MyCode> is not yet complete.
    </Typography>
    <Typography paragraph>
      Please select another item from the left panel.
    </Typography>
  </React.Fragment>;
}