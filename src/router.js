import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/index";
import Musica from "./Components/Musica/index";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/musica" component={Musica} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
