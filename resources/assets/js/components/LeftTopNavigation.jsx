import React from 'react';
import List from '@mui/material/List';
import NavigationLinkItem from './NavigationLinkItem';
import MyNav from '../components/Navigation';

export default function LeftTopNavigation(){
  return <List>
    {MyNav.top.map((menuItem, index) => (
      <NavigationLinkItem key={"left-top-" + index} {...menuItem} />
    ))}
  </List>
}