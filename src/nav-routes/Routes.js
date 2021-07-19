import React from "react";
import { Switch, Route } from "react-router-dom";
import SignupForm from "../user/SignupForm";
import UserList from "../user/UserList";
import Home from "../Home";

function Routes({ login, signup }) {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/admin">
          <UserList />
        </Route>
        <Route exact path="/signup">
          <SignupForm signup={signup} />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;
