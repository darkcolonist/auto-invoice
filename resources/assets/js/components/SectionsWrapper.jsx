// import AutoInvoiceEditSection from "../sections/AutoInvoiceEditSection";
// import UnderConstructionSection from "../sections/UnderConstructionSection";
// import WelcomeSection from "../sections/WelcomeSection";
import { Route, Switch } from "react-router";
import loadable from '@loadable/component'
import MyNav from '../components/Navigation';
import NotFoundSection from "../sections/NotFoundSection";
import React from "react";
import { loadableParams } from "./MyLoadable";

export default function SectionsWrapper(){
  let sections = MyNav.top.map((routeItem, sectionIndex) => {
    return <Route key={sectionIndex} path={routeItem.url} exact
      component={routeItem.section} />
  });

  return (
    <Switch>
      {sections}
      <Route path="/autoinvoice/edit/:hash" component={loadable(() => import("../sections/AutoInvoiceEditSection"), loadableParams)} />
      <Route path="/autoinvoice/new" component={loadable(() => import("../sections/AutoInvoiceEditSection"), loadableParams)} />
      <Route>
        <NotFoundSection />
      </Route>
    </Switch>
  )
}