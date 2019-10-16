import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../Pages/Inicial";
import Segunda from "../Pages/Segunda";
import Terceira from "../Pages/Terceira";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Segunda" component={Segunda} />
      <Route exact path="/Terceira" component={Terceira} />
    </Switch>
  </BrowserRouter>
);
export default Routes;