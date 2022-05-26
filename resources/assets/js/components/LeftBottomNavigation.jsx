import React from 'react';
import List from '@mui/material/List';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NavigationLinkItem from './NavigationLinkItem';

export default function LeftBottomNavigation(){
  return <List>
    {[
      {
        "label": "Account",
        "icon": <AccountCircleIcon />
      },
      {
        "label": "Logout",
        "icon": <LogoutIcon />
      }
    ].map((menuItem, index) => (
      <NavigationLinkItem key={"left-bottom-"+index} {...menuItem} />
    ))}
  </List>
}