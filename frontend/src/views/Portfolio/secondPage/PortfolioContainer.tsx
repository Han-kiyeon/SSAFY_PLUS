import React from "react";
import PortfolioPresenter from "./PortfolioPresenter";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export default class extends React.Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  useStyles = makeStyles((theme: Theme) =>
    createStyles({
      pageButton: {
        "& > *": {
          margin: theme.spacing(1),
        },
      },
    })
  );
  render() {
    return <PortfolioPresenter useStyles={this.useStyles} />;
  }
}
