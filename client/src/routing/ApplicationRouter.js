import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Landing from "../landing/Landing";

const ApplicationRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Landing} />
      </Switch>
    </BrowserRouter>
  );
};

export default ApplicationRouter;
