import React from "react";
import styled from "styled-components";
import MyInfoPresenter from "components/MyInfo/MyInfoPresenter";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
interface MyInfoIState {
  name: string;
  birth: string;
  email: string;
  gender: string;
  phone: string;
  university_name: string;
  university_location: string;
  university_duration: string;
  university_major: string;
  university_subMajor: string;
  university_gradeAvg: string;
  university_classification: string;

  highschool: {
    name: string;
    location: string;
    duration: string;
    classification: string;
  };
  career: {
    name: string;
    position: string;
    duration: string;
    description: string;
  };
  award: {
    name: string;
    organization: string;
    date: string;
  };
  classification: {
    type: string;
    name: string;
    date: string;
    grade: string;
    Associtation: string;
  };
}
export default class extends React.Component<{}, MyInfoIState> {
  state = {
    // 인적 사항
    name: "",
    birth: "",
    email: "",
    gender: "",
    phone: "",
    // 학력 사항
    // 대학
    university_name: "",
    university_location: "",
    university_major: "",
    university_subMajor: "",
    university_gradeAvg: "",
    university_duration: "",
    university_classification: "",

    // 고등학교
    highschool: {
      name: "",
      location: "",
      duration: "",
      classification: "",
    },
    // 경력 사항
    career: {
      name: "",
      position: "",
      duration: "",
      description: "",
    },
    // 수상 내역
    award: {
      name: "",
      organization: "",
      date: "",
    },
    // 자격 사항
    classification: {
      type: "",
      name: "",
      date: "",
      grade: "",
      Associtation: "",
    },
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
    } else if (name === "gender") {
      this.setState({ gender: value });
    } else if (name === "birth") {
      await this.setState({ birth: value });
      if (this.state.birth.length === 5 && value.substring(4, 5) !== ".") {
        this.setState({
          birth: value.substring(0, 4) + "." + value.substring(4, 5),
        });
      } else if (
        this.state.birth.length === 5 &&
        value.substring(4, 5) === "."
      ) {
        this.setState({
          birth: value.substring(0, 4),
        });
      } else if (
        this.state.birth.length === 8 &&
        value.substring(7, 8) !== "."
      ) {
        this.setState({
          birth: value.substring(0, 7) + "." + value.substring(7, 8),
        });
      } else if (
        this.state.birth.length === 8 &&
        value.substring(7, 8) === "."
      ) {
        this.setState({
          birth: value.substring(0, 7),
        });
      } else if (this.state.birth.length === 11) {
        this.setState({
          birth: value.substring(0, 10),
        });
      }
    } else if (name === "university_duration") {
      await this.setState({ university_duration: value });
      if (this.state.birth.length === 5 && value.substring(4, 5) !== ".") {
        this.setState({
          birth: value.substring(0, 4) + "." + value.substring(4, 5),
        });
      } else if (
        this.state.birth.length === 5 &&
        value.substring(4, 5) === "."
      ) {
        this.setState({
          birth: value.substring(0, 4),
        });
      } else if (
        this.state.birth.length === 8 &&
        value.substring(7, 8) !== "."
      ) {
        this.setState({
          birth: value.substring(0, 7) + "." + value.substring(7, 8),
        });
      } else if (
        this.state.birth.length === 8 &&
        value.substring(7, 8) === "."
      ) {
        this.setState({
          birth: value.substring(0, 7),
        });
      } else if (this.state.birth.length === 11) {
        this.setState({
          birth: value.substring(0, 10),
        });
      }
    }
  };
  useStyles = makeStyles((theme: Theme) =>
    createStyles({
      input20: {
        "& > *": {
          marginTop: "2vh",
          width: "20vw",
        },
      },
      input30: {
        "& > *": {
          marginTop: "2vh",
          width: "30vw",
        },
      },
    })
  );
  render() {
    const {
      name,
      birth,
      email,
      gender,
      phone,
      university_name,
      university_location,
      university_duration,
      university_major,
      university_subMajor,
      university_gradeAvg,
      university_classification,
      highschool,
      career,
      award,
      classification,
    } = this.state;
    return (
      <MyInfoPresenter
        useStyles={this.useStyles}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
        name={name}
        birth={birth}
        email={email}
        gender={gender}
        phone={phone}
        university_name={university_name}
        university_location={university_location}
        university_duration={university_duration}
        university_major={university_major}
        university_subMajor={university_subMajor}
        university_gradeAvg={university_gradeAvg}
        university_classification={university_classification}
        highschool={highschool}
        career={career}
        award={award}
        classification={classification}
      />
    );
  }
}
