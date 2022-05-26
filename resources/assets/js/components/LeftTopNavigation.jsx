import React from 'react';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import List from '@mui/material/List';
import NavigationLinkItem from './NavigationLinkItem';
import HomeIcon from '@mui/icons-material/Home';

export default function LeftTopNavigation(){
  return <List>
    {[
      {
        "label": "Home",
        "icon": <HomeIcon />,
        "url": "/"
      },
      {
        "label": "Leaves",
        "icon": <BookmarkIcon />
      },
      {
        "label": "Evaluation",
        "icon": <BookmarkIcon />
      },
      {
        "label": "HR Config Parser",
        "icon": <BookmarkIcon />,
        "url": "hr-config-parser"
      }
    ].map((menuItem, index) => (
      <NavigationLinkItem key={"left-top-" + index} {...menuItem} />
    ))}
  </List>
}