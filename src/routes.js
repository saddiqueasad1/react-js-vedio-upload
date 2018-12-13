import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Welcome from "./WellCome";
import App from "./App";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route path="/App" component={App} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
