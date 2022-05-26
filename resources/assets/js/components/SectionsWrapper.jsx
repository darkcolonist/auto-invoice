import React from "react";
import WelcomeSection from "../sections/WelcomeSection";
import { Route, Switch } from "react-router";
import NotFoundSection from "../sections/NotFoundSection";
import UnderConstructionSection from "../sections/UnderConstructionSection";
import LeavesSection from "../sections/LeavesSection";

export default function SectionsWrapper(){
  return (
    <Switch >
      <Route path="/" exact>
        <WelcomeSection />
      </Route>
      <Route path="/leaves">
        <LeavesSection />
      </Route>
      <Route path="/hr-config-parser">
        <UnderConstructionSection />
      </Route>
      <Route path="/evaluation">
        <UnderConstructionSection />
      </Route>
      <Route path="/account">
        <UnderConstructionSection />
      </Route>
      <Route path="/logout">
        <UnderConstructionSection />
      </Route>
      <Route>
        <NotFoundSection />
      </Route>
    </Switch>
  )
}