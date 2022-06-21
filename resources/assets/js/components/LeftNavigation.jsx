import React from 'react';
import List from '@mui/material/List';
import NavigationLinkItem from './NavigationLinkItem';
export default function LeftNavigation(props) {
  const { nav } = props;

  return <List>
    {nav.map((menuItem, index) => (
      <NavigationLinkItem key={"left-nev-" + index} {...menuItem} />
    ))}
  </List>
}