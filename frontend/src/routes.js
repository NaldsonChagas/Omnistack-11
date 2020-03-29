import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from 'react';
import Logon from "./pages/Logon";
import Register from "./pages/Register";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Logon} exact />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  )
}
