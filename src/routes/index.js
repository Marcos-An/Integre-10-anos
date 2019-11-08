import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../Pages/Inicial";
import Segunda from "../Pages/Segunda";
import Terceira from "../Pages/Terceira";
import Quarta from "../Pages/Quarta";
import Quinta from "../Pages/Quinta";
import Sexta from "../Pages/Sexta";
import Setima from "../Pages/Setima";
import Oitava from "../Pages/Oitava";
import Nona from "../Pages/Nona";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Segunda" component={Segunda} />
      <Route exact path="/Terceira" component={Terceira} />
      <Route exact path="/Quarta" component={Quarta} />
      <Route exact path="/Quinta" component={Quinta} />
      <Route exact path="/Sexta" component={Sexta} />
      <Route exact path="/Setima" component={Setima} />
      <Route exact path="/Oitava" component={Oitava} />
      <Route exact path="/Nona" component={Nona} />
    </Switch>
  </BrowserRouter>
);
export default Routes;