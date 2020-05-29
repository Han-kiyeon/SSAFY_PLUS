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
  university: {
    name: string;
    location: string;
    duration: string;
    major: string;
    subMajor: string;
    gradeAvg: string;
    classification: string;
  };
  highschool: {
    name: string;
    location: string;
    duration: string;
  };
  careers: Array<{
    id: number;
    name: string;
    position: string;
    duration: string;
    description: string;
  }>;
  careerLen: number;
  awards: Array<{
    id: number;
    name: string;
    date: string;
    organization: string;
  }>;
  awardLen: number;
  classifications: Array<{
    type: string;
    name: string;
    date: string;
    grade: string;
    Associtation: string;
  }>;
  classificationLen: number;
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
    university: {
      name: "",
      location: "",
      duration: "",
      major: "",
      subMajor: "",
      gradeAvg: "",
      classification: "",
    },

    // 고등학교
    highschool: {
      name: "",
      location: "",
      duration: "",
    },
    // 경력 사항
    careers: [
      {
        id: 1,
        name: "",
        position: "",
        duration: "",
        description: "",
      },
      {
        id: 2,
        name: "",
        position: "",
        duration: "",
        description: "",
      },
      {
        id: 3,
        name: "",
        position: "",
        duration: "",
        description: "",
      },
      {
        id: 4,
        name: "",
        position: "",
        duration: "",
        description: "",
      },
    ],
    careerLen: 0,
    // 수상 내역
    awards: [
      {
        id: 1,
        name: "",
        organization: "",
        date: "",
      },
      {
        id: 2,
        name: "",
        organization: "",
        date: "",
      },
      {
        id: 3,
        name: "",
        organization: "",
        date: "",
      },
      {
        id: 4,
        name: "",
        organization: "",
        date: "",
      },
    ],
    awardLen: 0,
    // 자격 사항
    classifications: [
      {
        id: 1,
        type: "",
        name: "",
        date: "",
        grade: "",
        Associtation: "",
      },
      {
        id: 2,
        type: "",
        name: "",
        date: "",
        grade: "",
        Associtation: "",
      },
      {
        id: 3,
        type: "",
        name: "",
        date: "",
        grade: "",
        Associtation: "",
      },
      {
        id: 4,
        type: "",
        name: "",
        date: "",
        grade: "",
        Associtation: "",
      },
    ],
    classificationLen: 0,
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
    } else if (name === "university_name") {
      this.setState({
        university: {
          name: value,
          location: this.state.university.location,
          duration: this.state.university.duration,
          major: this.state.university.major,
          subMajor: this.state.university.subMajor,
          gradeAvg: this.state.university.gradeAvg,
          classification: this.state.university.classification,
        },
      });
    } else if (name === "university_location") {
      this.setState({
        university: {
          name: this.state.university.name,
          location: value,
          duration: this.state.university.duration,
          major: this.state.university.major,
          subMajor: this.state.university.subMajor,
          gradeAvg: this.state.university.gradeAvg,
          classification: this.state.university.classification,
        },
      });
    } else if (name === "university_duration") {
      await this.setState({
        university: {
          name: this.state.university.name,
          location: this.state.university.location,
          duration: value,
          major: this.state.university.major,
          subMajor: this.state.university.subMajor,
          gradeAvg: this.state.university.gradeAvg,
          classification: this.state.university.classification,
        },
      });
      var tempValue = value;
      if (tempValue.length === 5 && value.substring(4, 5) !== ".") {
        this.setState({
          university: {
            name: this.state.university.name,
            location: this.state.university.location,
            duration: value.substring(0, 4) + "." + value.substring(4, 5),
            major: this.state.university.major,
            subMajor: this.state.university.subMajor,
            gradeAvg: this.state.university.gradeAvg,
            classification: this.state.university.classification,
          },
        });
      } else if (tempValue.length === 5 && value.substring(4, 5) === ".") {
        this.setState({
          university: {
            name: this.state.university.name,
            location: this.state.university.location,
            duration: value.substring(0, 4),
            major: this.state.university.major,
            subMajor: this.state.university.subMajor,
            gradeAvg: this.state.university.gradeAvg,
            classification: this.state.university.classification,
          },
        });
      } else if (
        //////
        tempValue.length === 8 &&
        value.substring(7, 8) !== " "
      ) {
        this.setState({
          university: {
            name: this.state.university.name,
            location: this.state.university.location,
            duration: value.substring(0, 7) + " - " + value.substring(7, 8),
            major: this.state.university.major,
            subMajor: this.state.university.subMajor,
            gradeAvg: this.state.university.gradeAvg,
            classification: this.state.university.classification,
          },
        });
      } else if (tempValue.length === 10 && value.substring(9, 10) === " ") {
        this.setState({
          university: {
            name: this.state.university.name,
            location: this.state.university.location,
            duration: value.substring(0, 7),
            major: this.state.university.major,
            subMajor: this.state.university.subMajor,
            gradeAvg: this.state.university.gradeAvg,
            classification: this.state.university.classification,
          },
        });
      } else if (tempValue.length === 15 && value.substring(14, 15) !== ".") {
        this.setState({
          university: {
            name: this.state.university.name,
            location: this.state.university.location,
            duration: value.substring(0, 14) + "." + value.substring(14, 15),
            major: this.state.university.major,
            subMajor: this.state.university.subMajor,
            gradeAvg: this.state.university.gradeAvg,
            classification: this.state.university.classification,
          },
        });
      } else if (tempValue.length === 15 && value.substring(14, 15) === ".") {
        this.setState({
          university: {
            name: this.state.university.name,
            location: this.state.university.location,
            duration: value.substring(0, 14),
            major: this.state.university.major,
            subMajor: this.state.university.subMajor,
            gradeAvg: this.state.university.gradeAvg,
            classification: this.state.university.classification,
          },
        });
      } else if (tempValue.length > 17) {
        this.setState({
          university: {
            name: this.state.university.name,
            location: this.state.university.location,
            duration: value.substring(0, 17),
            major: this.state.university.major,
            subMajor: this.state.university.subMajor,
            gradeAvg: this.state.university.gradeAvg,
            classification: this.state.university.classification,
          },
        });
      }
    } else if (name === "university_major") {
      this.setState({
        university: {
          name: this.state.university.name,
          location: this.state.university.location,
          duration: this.state.university.duration,
          major: value,
          subMajor: this.state.university.subMajor,
          gradeAvg: this.state.university.gradeAvg,
          classification: this.state.university.classification,
        },
      });
    } else if (name === "university_subMajor") {
      this.setState({
        university: {
          name: this.state.university.name,
          location: this.state.university.location,
          duration: this.state.university.duration,
          major: this.state.university.major,
          subMajor: value,
          gradeAvg: this.state.university.gradeAvg,
          classification: this.state.university.classification,
        },
      });
    } else if (name === "university_gradeAvg") {
      this.setState({
        university: {
          name: this.state.university.name,
          location: this.state.university.location,
          duration: this.state.university.duration,
          major: this.state.university.major,
          subMajor: this.state.university.subMajor,
          gradeAvg: value,
          classification: this.state.university.classification,
        },
      });
    } else if (name === "university_classification") {
      this.setState({
        university: {
          name: this.state.university.name,
          location: this.state.university.location,
          duration: this.state.university.duration,
          major: this.state.university.major,
          subMajor: this.state.university.subMajor,
          gradeAvg: this.state.university.gradeAvg,
          classification: value,
        },
      });
    } else if (name === "highschool_name") {
      this.setState({
        highschool: {
          name: value,
          location: this.state.highschool.location,
          duration: this.state.highschool.duration,
        },
      });
    } else if (name === "highschool_location") {
      this.setState({
        highschool: {
          name: this.state.highschool.name,
          location: value,
          duration: this.state.highschool.duration,
        },
      });
    } else if (name === "highschool_duration") {
      await this.setState({
        highschool: {
          name: this.state.highschool.name,
          location: this.state.highschool.location,
          duration: value,
        },
      });
      var tempValue = value;
      if (tempValue.length === 5 && value.substring(4, 5) !== ".") {
        this.setState({
          highschool: {
            name: this.state.highschool.name,
            location: this.state.highschool.location,
            duration: value.substring(0, 4) + "." + value.substring(4, 5),
          },
        });
      } else if (tempValue.length === 5 && value.substring(4, 5) === ".") {
        this.setState({
          highschool: {
            name: this.state.highschool.name,
            location: this.state.highschool.location,
            duration: value.substring(0, 4),
          },
        });
      } else if (tempValue.length === 8 && value.substring(7, 8) !== " ") {
        this.setState({
          highschool: {
            name: this.state.highschool.name,
            location: this.state.highschool.location,
            duration: value.substring(0, 7) + " - " + value.substring(7, 8),
          },
        });
      } else if (tempValue.length === 10 && value.substring(9, 10) === " ") {
        this.setState({
          highschool: {
            name: this.state.highschool.name,
            location: this.state.highschool.location,
            duration: value.substring(0, 7),
          },
        });
      } else if (tempValue.length === 15 && value.substring(14, 15) !== ".") {
        this.setState({
          highschool: {
            name: this.state.highschool.name,
            location: this.state.highschool.location,
            duration: value.substring(0, 14) + "." + value.substring(14, 15),
          },
        });
      } else if (tempValue.length === 15 && value.substring(14, 15) === ".") {
        this.setState({
          highschool: {
            name: this.state.highschool.name,
            location: this.state.highschool.location,
            duration: value.substring(0, 14),
          },
        });
      } else if (tempValue.length > 17) {
        this.setState({
          highschool: {
            name: this.state.highschool.name,
            location: this.state.highschool.location,
            duration: value.substring(0, 17),
          },
        });
      }
    } else if (name === "careers[0]_name") {
      this.setState({
        careers: [
          {
            id: this.state.careers[0].id,
            name: value,
            position: this.state.careers[0].position,
            duration: this.state.careers[0].duration,
            description: this.state.careers[0].description,
          },
          this.state.careers[1],
          this.state.careers[2],
          this.state.careers[3],
        ],
      });
    } else if (name === "careers[0]_position") {
      this.setState({
        careers: [
          {
            id: this.state.careers[0].id,
            name: this.state.careers[0].name,
            position: value,
            duration: this.state.careers[0].duration,
            description: this.state.careers[0].description,
          },
          this.state.careers[1],
          this.state.careers[2],
          this.state.careers[3],
        ],
      });
    } else if (name === "careers[0]_duration") {
      await this.setState({
        careers: [
          {
            id: this.state.careers[0].id,
            name: this.state.careers[0].name,
            position: this.state.careers[0].position,
            duration: value,
            description: this.state.careers[0].description,
          },
          this.state.careers[1],
          this.state.careers[2],
          this.state.careers[3],
        ],
      });
      var tempValue = value;
      if (tempValue.length === 5 && value.substring(4, 5) !== ".") {
        this.setState({
          careers: [
            {
              id: this.state.careers[0].id,
              name: this.state.careers[0].name,
              position: this.state.careers[0].position,
              duration: value.substring(0, 4) + "." + value.substring(4, 5),
              description: this.state.careers[0].description,
            },
            this.state.careers[1],
            this.state.careers[2],
            this.state.careers[3],
          ],
        });
      } else if (tempValue.length === 5 && value.substring(4, 5) === ".") {
        this.setState({
          careers: [
            {
              id: this.state.careers[0].id,
              name: this.state.careers[0].name,
              position: this.state.careers[0].position,
              duration: value.substring(0, 4),
              description: this.state.careers[0].description,
            },
            this.state.careers[1],
            this.state.careers[2],
            this.state.careers[3],
          ],
        });
      } else if (tempValue.length === 8 && value.substring(7, 8) !== " ") {
        this.setState({
          careers: [
            {
              id: this.state.careers[0].id,
              name: this.state.careers[0].name,
              position: this.state.careers[0].position,
              duration: value.substring(0, 7) + " - " + value.substring(7, 8),
              description: this.state.careers[0].description,
            },
            this.state.careers[1],
            this.state.careers[2],
            this.state.careers[3],
          ],
        });
      } else if (tempValue.length === 10 && value.substring(9, 10) === " ") {
        this.setState({
          careers: [
            {
              id: this.state.careers[0].id,
              name: this.state.careers[0].name,
              position: this.state.careers[0].position,
              duration: value.substring(0, 7),
              description: this.state.careers[0].description,
            },
            this.state.careers[1],
            this.state.careers[2],
            this.state.careers[3],
          ],
        });
      } else if (tempValue.length === 15 && value.substring(14, 15) !== ".") {
        this.setState({
          careers: [
            {
              id: this.state.careers[0].id,
              name: this.state.careers[0].name,
              position: this.state.careers[0].position,
              duration: value.substring(0, 14) + "." + value.substring(14, 15),
              description: this.state.careers[0].description,
            },
            this.state.careers[1],
            this.state.careers[2],
            this.state.careers[3],
          ],
        });
      } else if (tempValue.length === 15 && value.substring(14, 15) === ".") {
        this.setState({
          careers: [
            {
              id: this.state.careers[0].id,
              name: this.state.careers[0].name,
              position: this.state.careers[0].position,
              duration: value.substring(0, 14),
              description: this.state.careers[0].description,
            },
            this.state.careers[1],
            this.state.careers[2],
            this.state.careers[3],
          ],
        });
      } else if (tempValue.length > 17) {
        this.setState({
          careers: [
            {
              id: this.state.careers[0].id,
              name: this.state.careers[0].name,
              position: this.state.careers[0].position,
              duration: value.substring(0, 17),
              description: this.state.careers[0].description,
            },
            this.state.careers[1],
            this.state.careers[2],
            this.state.careers[3],
          ],
        });
      }
    } else if (name === "careers[0]_description") {
      this.setState({
        careers: [
          {
            id: this.state.careers[0].id,
            name: this.state.careers[0].name,
            position: this.state.careers[0].position,
            duration: this.state.careers[0].duration,
            description: value,
          },
          this.state.careers[1],
          this.state.careers[2],
          this.state.careers[3],
        ],
      });
    }
  };
  handleCareerMinus = (event: React.FormEvent) => {
    if (this.state.careerLen > 0) {
      this.setState({ careerLen: this.state.careerLen - 1 });
    }
  };
  handleCareerAdd = (event: React.FormEvent) => {
    if (this.state.careerLen < 4) {
      this.setState({ careerLen: this.state.careerLen + 1 });
    }
  };
  handleAwardMinus = (event: React.FormEvent) => {
    if (this.state.awardLen > 0) {
      this.setState({ awardLen: this.state.awardLen - 1 });
    }
  };
  handleAwardAdd = (event: React.FormEvent) => {
    if (this.state.awardLen < 4) {
      this.setState({ awardLen: this.state.awardLen + 1 });
    }
  };
  handleClassMinus = (event: React.FormEvent) => {
    if (this.state.classificationLen > 0) {
      this.setState({ classificationLen: this.state.classificationLen - 1 });
    }
  };
  handleClassAdd = (event: React.FormEvent) => {
    if (this.state.classificationLen < 4) {
      this.setState({ classificationLen: this.state.classificationLen + 1 });
    }
  };
  useStyles = makeStyles((theme: Theme) =>
    createStyles({
      input8: {
        "& > *": {
          marginTop: "2vh",
          width: "8vw",
        },
      },
      input10: {
        "& > *": {
          marginTop: "2vh",
          width: "10vw",
        },
      },
      input15: {
        "& > *": {
          marginTop: "2vh",
          width: "15vw",
        },
      },
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
      university,
      highschool,
      careers,
      careerLen,
      awards,
      awardLen,
      classifications,
      classificationLen,
    } = this.state;
    return (
      <MyInfoPresenter
        useStyles={this.useStyles}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
        handleCareerAdd={this.handleCareerAdd}
        handleCareerMinus={this.handleCareerMinus}
        handleAwardAdd={this.handleAwardAdd}
        handleAwardMinus={this.handleAwardMinus}
        handleClassAdd={this.handleClassAdd}
        handleClassMinus={this.handleClassMinus}
        name={name}
        birth={birth}
        email={email}
        gender={gender}
        phone={phone}
        university={university}
        highschool={highschool}
        careers={careers}
        careerLen={careerLen}
        awards={awards}
        awardLen={awardLen}
        classifications={classifications}
        classificationLen={classificationLen}
      />
    );
  }
}
