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
  phone: string;
  customer: boolean; // 고객지향
  national: boolean; // 국제적인
  positive: boolean; // 긍정적인
  steady: boolean; // 꾸준한
  versatile: boolean; // 다재다능한
  reliable: boolean; // 듬직한
  goal: boolean; // 목표지향적인
  bright: boolean; // 밝은
  learner: boolean; // 빨리배우는
  sincere: boolean; // 성실한
  communicating: boolean; // 소통하는
  doing: boolean; // 실행력
  passionate: boolean; // 열정적인
  polite: boolean; // 예의바른
  perfective: boolean; // 완벽주의
  principles: boolean; // 원칙적인
  flexible: boolean; // 유연한
  patience: boolean; // 인내심
  active: boolean; // 적극적인
  honesty: boolean; // 정직한
  creative: boolean; // 창의적인
  responsibility: boolean; //책임감
  best: boolean; // 최고의
  leading: boolean; // 팀을이끄는
  committed: boolean; // 헌신적인
  innovative: boolean; // 혁신적인
  realistic: boolean; // 현실적인
  cooperative: boolean; // 협동적인
  error: boolean;
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
    phone: "",
    customer: false, // 고객지향
    national: false, // 국제적인
    positive: false, // 긍정적인
    steady: false, // 꾸준한
    versatile: false, // 다재다능한
    reliable: false, // 듬직한
    goal: false, // 목표지향적인
    bright: false, // 밝은
    learner: false, // 빨리배우는
    sincere: false, // 성실한
    communicating: false, // 소통하는
    doing: false, // 실행력
    passionate: false, // 열정적인
    polite: false, // 예의바른
    perfective: false, // 완벽주의
    principles: false, // 원칙적인
    flexible: false, // 유연한
    patience: false, // 인내심
    active: false, // 적극적인
    honesty: false, // 정직한
    creative: false, // 창의적인
    responsibility: false, //책임감
    best: false, // 최고의
    leading: false, // 팀을이끄는
    committed: false, // 헌신적인
    innovative: false, // 혁신적인
    realistic: false, // 현실적인
    cooperative: false, // 협동적인
    error: false,
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  updateTerm = async (event: React.ChangeEvent<HTMLInputElement>) => {
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
    } else if (name === "phone") {
      await this.setState({ phone: value });
      if (this.state.phone.length === 4 && value.substring(3, 4) !== "-") {
        this.setState({
          phone: value.substring(0, 3) + "-" + value.substring(3, 4),
        });
      } else if (
        this.state.phone.length === 4 &&
        value.substring(3, 4) === "-"
      ) {
        this.setState({
          phone: value.substring(0, 3),
        });
      } else if (
        this.state.phone.length === 9 &&
        value.substring(8, 9) !== "-"
      ) {
        this.setState({
          phone: value.substring(0, 8) + "-" + value.substring(8, 9),
        });
      } else if (
        this.state.phone.length === 9 &&
        value.substring(8, 9) === "-"
      ) {
        this.setState({
          phone: value.substring(0, 8),
        });
      } else if (value.length > 13) {
        this.setState({
          phone: value.substring(0, 13),
        });
      }
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
      phone: {
        "& > *": {
          margin: theme.spacing(2),
          width: "17ch",
        },
      },
      feature: {
        display: "inline-block",
      },
      formControl: {
        display: "inline-block",
        margin: theme.spacing(2),
      },
      label: {
        color: "#020202",
      },
      pageButton: {
        "& > *": {
          margin: theme.spacing(1),
        },
      },
    })
  );
  handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    await this.setState({
      ...this.state,
      [event.target.name]: event.target.checked,
    });
    this.setState({
      error:
        [
          this.state.customer,
          this.state.national,
          this.state.positive,
          this.state.steady,
          this.state.versatile,
          this.state.reliable,
          this.state.goal,
          this.state.bright,
          this.state.learner,
          this.state.sincere,
          this.state.communicating,
          this.state.doing,
          this.state.passionate,
          this.state.polite,
          this.state.perfective,
          this.state.principles,
          this.state.flexible,
          this.state.patience,
          this.state.active,
          this.state.honesty,
          this.state.creative,
          this.state.responsibility,
          this.state.best,
          this.state.leading,
          this.state.committed,
          this.state.innovative,
          this.state.realistic,
          this.state.cooperative,
        ].filter(v => v).length !== 4,
    });
  };

  render() {
    const {
      name,
      years,
      year,
      months,
      month,
      days,
      day,
      phone,
      customer,
      national,
      positive,
      steady,
      versatile,
      reliable,
      goal,
      bright,
      learner,
      sincere,
      communicating,
      doing,
      passionate,
      polite,
      perfective,
      principles,
      flexible,
      patience,
      active,
      honesty,
      creative,
      responsibility,
      best,
      leading,
      committed,
      innovative,
      realistic,
      cooperative,
      error,
    } = this.state;
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
        phone={phone}
        handleChange={this.handleChange}
        error={error}
        customer={customer}
        national={national}
        positive={positive}
        steady={steady}
        versatile={versatile}
        reliable={reliable}
        goal={goal}
        bright={bright}
        learner={learner}
        sincere={sincere}
        communicating={communicating}
        doing={doing}
        passionate={passionate}
        polite={polite}
        perfective={perfective}
        principles={principles}
        flexible={flexible}
        patience={patience}
        active={active}
        honesty={honesty}
        creative={creative}
        responsibility={responsibility}
        best={best}
        leading={leading}
        committed={committed}
        innovative={innovative}
        realistic={realistic}
        cooperative={cooperative}
      />
    );
  }
}
