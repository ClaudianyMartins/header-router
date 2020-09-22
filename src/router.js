import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Musica from "./Components/Musica";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/musica" component={Musica} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
