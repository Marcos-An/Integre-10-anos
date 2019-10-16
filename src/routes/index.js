import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../Pages/Inicial";
import Segunda from "../Pages/Segunda";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Segunda" component={Segunda} />
    </Switch>
  </BrowserRouter>
);
export default Routes;