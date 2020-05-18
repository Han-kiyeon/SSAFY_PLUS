import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Navbar from "components/Navbar/Navbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";

import routes from "routes.js";

import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";

import logo from "assets/img/reactlogo.png";
import Container from "@material-ui/core/Container";

// 라우터 변경 부분
const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      return (
        <Route
          path={prop.layout + prop.path}
          component={prop.component}
          key={key}
        />
      );
      return null;
    })}
    <Redirect from="/plus" to="/plus/main" />
  </Switch>
);

const useStyles = makeStyles(styles);

export default function SsafyPlus({ ...rest }) {
  // styles
  const classes = useStyles();
  // ref to help us initialize PerfectScrollbar on windows devices
  const mainPanel = React.createRef();
  // states and functions
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.wrapper}>
      <Sidebar
        routes={routes}
        logoText={"SSAFY PLUS"}
        logo={logo}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        color={"blue"}
        {...rest}
      />
      <div className={classes.wrapper} ref={mainPanel}>
        <Navbar
          logoText={"SSAFY PLUS"}
          logo={logo}
          routes={routes}
          handleDrawerToggle={handleDrawerToggle}
          {...rest}
        />

        {/* 페이지 마다 바뀌는 부분 */}
        <Container>
          <div className={classes.content}>
            <div className={classes.container}>{switchRoutes}</div>
          </div>
        </Container>

        <Footer />
      </div>
    </div>
  );
}
