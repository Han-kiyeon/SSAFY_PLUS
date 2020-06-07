import React from "react";
import PortfolioPresenter from "./PortfolioPresenter";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import axios from "axios";

interface PortfolioDTO {
  name: string;
  birth: string;
  email: string;
  phone: string;
  characters: string[];
  projects: Array<ProjectDTO>;
  skills: Array<SkillDTO>;
  project_len: number;
}
interface SkillDTO {
  description: "string";
  name: "string";
  percentage: number;
}
interface ProjectDTO {
  description: "string";
  name: "string";
  period: "string";
  roles: Array<string>;
  myStack: Array<String>;
  stacks: "string";
  url: "string";
}
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
  profile_image_url: string;
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
    profile_image_url: "",
  };
  async componentDidMount() {
    window.scrollTo(0, 0);
    var link = window.location.href.split("/");
    var portfolio_id = link[6].split("#")[0];
    if (
      window.sessionStorage.getItem("portfolio_list") !== undefined &&
      window.sessionStorage.getItem("portfolio_list")?.includes(portfolio_id)
    ) {
    } else {
      window.location.href = "../../main";
    }
    var RecordResponse: any;
    var portfolio = axios
      .get(`http://13.125.238.102:8080/api/portfolio/${portfolio_id}`)
      .then(response => {
        RecordResponse = response.data;
        window.sessionStorage.setItem("portfolio_name", response.data.name);
        window.sessionStorage.setItem("portfolio_birth", response.data.birth);
        window.sessionStorage.setItem("portfolio_phone", response.data.phone);
        window.sessionStorage.setItem("portfolio_email", response.data.email);
        window.sessionStorage.setItem(
          "portfolio_feature_list",
          response.data.characters || "[]"
        );
        window.sessionStorage.setItem(
          "portfolio_2_skills",
          JSON.stringify(response.data.skills) || "[]"
        );
        window.sessionStorage.setItem(
          "portfolio_3_projects",
          JSON.stringify(response.data.projects) || "[]"
        );
      })
      .finally(() => {
        var birth = RecordResponse.birth.split("-");

        this.setState({
          name: RecordResponse.name || "",
          year: parseInt(birth[0]) || 1994,
          month: parseInt(birth[1]) || 1,
          day: parseInt(birth[2]) || 15,
          email: RecordResponse.email || "",
          phone: RecordResponse.phone || "",
          customer: RecordResponse.characters.includes("customer") || false, // 고객지향
          national: RecordResponse.characters.includes("national") || false, // 국제적인
          positive: RecordResponse.characters.includes("positive") || false, // 긍정적인
          steady: RecordResponse.characters.includes("steady") || false, // 꾸준한
          versatile: RecordResponse.characters.includes("versatile") || false, // 다재다능한
          reliable: RecordResponse.characters.includes("reliable") || false, // 듬직한
          goal: RecordResponse.characters.includes("goal") || false, // 목표지향적인
          bright: RecordResponse.characters.includes("bright") || false, // 밝은
          learner: RecordResponse.characters.includes("learner") || false, // 빨리배우는
          sincere: RecordResponse.characters.includes("sincere") || false, // 성실한
          communicating:
            RecordResponse.characters.includes("communicating") || false, // 소통하는
          doing: RecordResponse.characters.includes("doing") || false, // 실행력
          passionate: RecordResponse.characters.includes("passionate") || false, // 열정적인
          polite: RecordResponse.characters.includes("polite") || false, // 예의바른
          perfective: RecordResponse.characters.includes("perfective") || false, // 완벽주의
          principles: RecordResponse.characters.includes("principles") || false, // 원칙적인
          flexible: RecordResponse.characters.includes("flexible") || false, // 유연한
          patience: RecordResponse.characters.includes("patience") || false, // 인내심
          active: RecordResponse.characters.includes("active") || false, // 적극적인
          honesty: RecordResponse.characters.includes("honesty") || false, // 정직한
          creative: RecordResponse.characters.includes("creative") || false, // 창의적인
          responsibility:
            RecordResponse.characters.includes("responsibility") || false, //책임감
          best: RecordResponse.characters.includes("best") || false, // 최고의
          leading: RecordResponse.characters.includes("leading") || false, // 팀을이끄는
          committed: RecordResponse.characters.includes("committed") || false, // 헌신적인
          innovative: RecordResponse.characters.includes("innovative") || false, // 혁신적인
          realistic: RecordResponse.characters.includes("realistic") || false, // 현실적인
          cooperative:
            RecordResponse.characters.includes("cooperative") || false, // 협동적인
        });
      });
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
          margin: theme.spacing(1),
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
          margin: theme.spacing(1),
          width: "28ch",
        },
      },
      phone: {
        "& > *": {
          margin: theme.spacing(1),
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
          position: "absolute",
          bottom: "10px",
          right: "-30px",
          "&:hover": {
            bottom: "11px",
            right: "-30px",
          },
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
  handleNextButton = async (event: React.FormEvent) => {
    var feature_list = new Array();
    if (this.state.customer) {
      await feature_list.push("customer");
    }
    if (this.state.national) {
      await feature_list.push("national");
    }
    if (this.state.positive) {
      await feature_list.push("positive");
    }
    if (this.state.steady) {
      await feature_list.push("steady");
    }
    if (this.state.versatile) {
      await feature_list.push("versatile");
    }
    if (this.state.reliable) {
      await feature_list.push("reliable");
    }
    if (this.state.goal) {
      await feature_list.push("goal");
    }
    if (this.state.bright) {
      await feature_list.push("bright");
    }
    if (this.state.learner) {
      await feature_list.push("learner");
    }
    if (this.state.sincere) {
      await feature_list.push("sincere");
    }
    if (this.state.communicating) {
      await feature_list.push("communicating");
    }
    if (this.state.doing) {
      await feature_list.push("doing");
    }
    if (this.state.passionate) {
      await feature_list.push("passionate");
    }
    if (this.state.polite) {
      await feature_list.push("polite");
    }
    if (this.state.perfective) {
      await feature_list.push("perfective");
    }
    if (this.state.principles) {
      await feature_list.push("principles");
    }
    if (this.state.flexible) {
      await feature_list.push("flexible");
    }
    if (this.state.patience) {
      await feature_list.push("patience");
    }
    if (this.state.active) {
      await feature_list.push("active");
    }
    if (this.state.honesty) {
      await feature_list.push("honesty");
    }
    if (this.state.creative) {
      await feature_list.push("creative");
    }
    if (this.state.responsibility) {
      await feature_list.push("responsibility");
    }
    if (this.state.best) {
      await feature_list.push("best");
    }
    if (this.state.leading) {
      await feature_list.push("leading");
    }
    if (this.state.committed) {
      await feature_list.push("committed");
    }
    if (this.state.innovative) {
      await feature_list.push("innovative");
    }
    if (this.state.realistic) {
      await feature_list.push("realistic");
    }
    if (this.state.cooperative) {
      await feature_list.push("cooperative");
    }
    if (
      feature_list.length === 4 &&
      this.state.email !== "" &&
      this.state.phone !== "" &&
      this.state.name !== ""
    ) {
      var birth =
        this.state.year + "-" + this.state.month + "-" + this.state.day;
      await window.sessionStorage.setItem("portfolio_name", this.state.name);
      await window.sessionStorage.setItem("portfolio_birth", birth);
      await window.sessionStorage.setItem("portfolio_email", this.state.email);
      await window.sessionStorage.setItem("portfolio_phone", this.state.phone);
      await window.sessionStorage.setItem(
        "portfolio_feature_list",
        JSON.stringify(feature_list)
      );
      var link = window.location.href.split("/");
      var portfolio_id = link[6].split("#")[0];
      window.location.href = `../2/${portfolio_id}`;
    }
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
      email,
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
      profile_image_url,
    } = this.state;
    return (
      <PortfolioPresenter
        name={name}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
        useStyles={this.useStyles}
        handleNextButton={this.handleNextButton}
        years={years}
        year={year}
        months={months}
        month={month}
        days={days}
        day={day}
        email={email}
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
        profile_image_url={profile_image_url}
      />
    );
  }
}
