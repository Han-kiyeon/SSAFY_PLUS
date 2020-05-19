import React from "react";
import PortfolioPresenter from "./PortfolioPresenter";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

interface PortfolioIState {
  name: string;
  years: number[];
  year: number;
  months: number[];
  month: number;
  days: number[];
  day: number;
  email: string;
}
export default class extends React.Component<{}, PortfolioIState> {
  state = {
    name: "",
    years: [
      1985,
      1986,
      1987,
      1988,
      1989,
      1990,
      1991,
      1992,
      1993,
      1994,
      1995,
      1996,
      1997,
      1998,
      1999,
      2000,
    ],
    /* 
      싸피에 94년생이 가장 많다고
      싸피데이때 들었음
    */

    year: 1994,
    months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    month: 1,
    days: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
    ],
    day: 15,
    email: "",
  };
  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  updateTerm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value, name },
    } = event;
    if (name === "name") {
      this.setState({ name: value });
    } else if (name === "year") {
      this.setState({ year: parseInt(value) });
    } else if (name === "month") {
      this.setState({ month: parseInt(value) });
    } else if (name === "day") {
      this.setState({ day: parseInt(value) });
    } else if (name === "day") {
      this.setState({ day: parseInt(value) });
    } else if (name === "email") {
      this.setState({ email: value });
      console.log(this.state.email);
    }
  };

  useStyles = makeStyles((theme: Theme) =>
    createStyles({
      name: {
        "& > *": {
          margin: theme.spacing(3),
          width: "10ch",
        },
      },
      birth: {
        "& > *": {
          margin: theme.spacing(1),
          width: "10ch",
        },
      },
      email: {
        "& > *": {
          margin: theme.spacing(2),
          width: "28ch",
        },
      },
    })
  );

  render() {
    const { name, years, year, months, month, days, day, email } = this.state;
    return (
      <PortfolioPresenter
        name={name}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
        useStyles={this.useStyles}
        years={years}
        year={year}
        months={months}
        month={month}
        days={days}
        day={day}
        email={email}
      />
    );
  }
}
