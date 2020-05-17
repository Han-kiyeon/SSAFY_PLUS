import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

//전체 적인 컨셉틀이 될 레이아웃
import SsafyPlus from "layouts/SsafyPlus.js";
import "assets/css/material-dashboard-react.css?v=1.8.0";

const hist = createBrowserHistory();

function App() {
  console.log("app들어옴");
  return (
    <Router history={hist}>
      <Switch>
        <Route path="/plus" component={SsafyPlus} />
        <Redirect from="/" to="/plus/main" />
      </Switch>
    </Router>
  );
}

export default App;
