import React from "react";
import WelcomeSection from "../sections/WelcomeSection";
import { Route, Switch } from "react-router";
import NotFoundSection from "../sections/NotFoundSection";
import UnderConstructionSection from "../sections/UnderConstructionSection";
import MyNav from '../components/Navigation';

export default function SectionsWrapper(){
  let sections = MyNav.top.map((routeItem, sectionIndex) => {
    return <Route key={sectionIndex} path={routeItem.url} exact>
      {routeItem.section}
    </Route>
  });

  return (
    <Switch>
      {sections}
      <Route>
        <NotFoundSection />
      </Route>
    </Switch>
  )
}