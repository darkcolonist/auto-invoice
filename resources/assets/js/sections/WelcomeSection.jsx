import React from "react";
import Typography from '@mui/material/Typography';
export default function WelcomeSection(){
  return <React.Fragment>
    <Typography variant="h3">
      welcome!
    </Typography>
    <Typography paragraph>
      select a menu item to begin
    </Typography>
  </React.Fragment>;
}