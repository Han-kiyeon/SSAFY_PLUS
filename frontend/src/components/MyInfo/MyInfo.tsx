import React from "react";
import styled from "styled-components";
import MyInfoPresenter from "components/MyInfo/MyInfoPresenter";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export default class extends React.Component {
  state = {
    // 인적 사항
    name: "음영현",
    birth: "",
    email: "",
    gender: "",
    phone: "",
    // 학력 사항
    // 대학
    university: {
      name: "",
      location: "",
      major: "",
      subMajor: "",
      gradeAvg: "",
      duration: "",
      classification: "",
    },
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
  useStyles = makeStyles((theme: Theme) =>
    createStyles({
      pageButtonLeft: {
        "& > *": {
          margin: theme.spacing(1),
          position: "absolute",
          bottom: "10px",
          left: "-30px",
          "&:hover": {
            bottom: "11px",
            left: "-30px",
          },
        },
      },
    })
  );
  render() {
    const { name } = this.state;
    return <MyInfoPresenter name={name} useStyles={this.useStyles} />;
  }
}
