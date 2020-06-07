/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
// core components
import styles from "assets/jss/material-dashboard-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="#home" className={classes.block}>
                Home
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="https://edu.ssafy.com/comm/login/SecurityLoginForm.do" className={classes.block}>
                EDU SSAFY
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="https://job.ssafy.com/comm/login/SecurityLoginForm.do" className={classes.block}>
                JOB SSAFY
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="https://meeting.ssafy.com/" className={classes.block}>
                MEETING SSAFY
              </a>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          <span>
            &copy; {1900 + new Date().getYear()}{" "}
            <a
              href="https://www.creative-tim.com?ref=mdr-footer"
              target="_blank"
              className={classes.a}
            >
              코딩의 신
            </a>
            두둥등장 (신상엽, 음영현, 정하정, 한기연, 한승민)
          </span>
        </p>
      </div>
    </footer>
  );
}
