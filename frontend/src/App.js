import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

//전체 적인 컨셉틀이 될 레이아웃
import SsafyPlus from "layouts/SsafyPlus.js";
import SignIn from "views/Auth/SignIn";
import SignUp from "views/Auth/SignUp";
import "assets/css/ssafyPlus.css";
import BreakingError from "views/BreakingError/BreakingError";

const hist = createBrowserHistory();

function App() {
  return (
    <Router history={hist}>
      <Switch>
        <Route path="/plus" component={SsafyPlus} />
        <Route path="/plus/breakingerror/" exact={true} component={SsafyPlus} />
        <Route path="/auth/SignIn" component={SignIn} />
        {window.sessionStorage.getItem("user_email") === null &&
          !window.location.href.includes("/auth/signIn") &&
          (window.location.href = "/auth/signIn")}
        {window.sessionStorage.getItem("user_email") !== null && (
          <Redirect from="/" to="/plus/main" />
        )}
      </Switch>
    </Router>
  );
}

export default App;
