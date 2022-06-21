import { Route, Switch } from "react-router";
import loadable from '@loadable/component'
import MyNav from '../components/Navigation';
import NotFoundSection from "../sections/NotFoundSection";
import React from "react";
import { loadableParams } from "./MyLoadable";

export default function SectionsWrapper(){

  const myMapper = (routeItem, sectionIndex) => {
    return <Route key={sectionIndex} path={routeItem.url} exact
      component={routeItem.section} />
  };

  let topSections = MyNav.top.map(myMapper);
  let bottomSections = MyNav.bottom.map(myMapper);

  return (
    <Switch>
      {topSections}
      {bottomSections}
      <Route path="/autoinvoice/edit/:hash" component={loadable(() => import("../sections/AutoInvoiceEditSection"), loadableParams)} />
      <Route path="/autoinvoice/new" component={loadable(() => import("../sections/AutoInvoiceEditSection"), loadableParams)} />
      <Route>
        <NotFoundSection />
      </Route>
    </Switch>
  )
}