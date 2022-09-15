import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Dashboard from "./layouts/Admin.js";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <HashRouter>
        <Switch>
          <Route path={`/admin`} component={Dashboard} />
          <Redirect from={`/`} to="/admin/dashboard" />
        </Switch>
      </HashRouter>
    </RecoilRoot>
    ,
  </React.StrictMode>
);
