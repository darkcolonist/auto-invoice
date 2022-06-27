import React from 'react';
import List from '@mui/material/List';
import NavigationLinkItem from './NavigationLinkItem';
import { useAuthStore } from "../components/MyZustandStateStore";
export default function LeftNavigation(props) {
  const { nav } = props;
  const { loggedIn } = useAuthStore();

  // const loggedIn = true; // for testing

  return <List>
    {nav.map((menuItem, index) => {      
      let navlink = <NavigationLinkItem key={"left-nav-" + index} {...menuItem} />;

      if(menuItem.scope.includes("all"))
        return navlink;

      if(menuItem.scope.includes("loggedIn"))
        if(!loggedIn)
          return;
        
      if (!menuItem.scope.includes("loggedIn"))
        if (loggedIn)
          return;
          
      return navlink;
    })}
  </List>
}