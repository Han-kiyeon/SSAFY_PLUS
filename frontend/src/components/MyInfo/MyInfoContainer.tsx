import React from "react";
import styled from "styled-components";
import MyInfoPresenter from "components/MyInfo/MyInfoPresenter";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import axios from "axios";

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
    association: string;
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
        association: "",
      },
      {
        id: 2,
        type: "",
        name: "",
        date: "",
        grade: "",
        association: "",
      },
      {
        id: 3,
        type: "",
        name: "",
        date: "",
        grade: "",
        association: "",
      },
      {
        id: 4,
        type: "",
        name: "",
        date: "",
        grade: "",
        association: "",
      },
    ],
    classificationLen: 0,
    tempValue: "",
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
    } else if (name.startsWith("university")) {
      if (name === "university_name") {
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
        this.state.tempValue = value;
        if (
          this.state.tempValue.length === 5 &&
          value.substring(4, 5) !== "."
        ) {
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
        } else if (
          this.state.tempValue.length === 5 &&
          value.substring(4, 5) === "."
        ) {
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
          this.state.tempValue.length === 8 &&
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
        } else if (
          this.state.tempValue.length === 10 &&
          value.substring(9, 10) === " "
        ) {
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
        } else if (
          this.state.tempValue.length === 15 &&
          value.substring(14, 15) !== "."
        ) {
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
        } else if (
          this.state.tempValue.length === 15 &&
          value.substring(14, 15) === "."
        ) {
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
        } else if (this.state.tempValue.length > 17) {
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
      }
    } else if (name.startsWith("highschool")) {
      if (name === "highschool_name") {
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
        this.state.tempValue = value;
        if (
          this.state.tempValue.length === 5 &&
          value.substring(4, 5) !== "."
        ) {
          this.setState({
            highschool: {
              name: this.state.highschool.name,
              location: this.state.highschool.location,
              duration: value.substring(0, 4) + "." + value.substring(4, 5),
            },
          });
        } else if (
          this.state.tempValue.length === 5 &&
          value.substring(4, 5) === "."
        ) {
          this.setState({
            highschool: {
              name: this.state.highschool.name,
              location: this.state.highschool.location,
              duration: value.substring(0, 4),
            },
          });
        } else if (
          this.state.tempValue.length === 8 &&
          value.substring(7, 8) !== " "
        ) {
          this.setState({
            highschool: {
              name: this.state.highschool.name,
              location: this.state.highschool.location,
              duration: value.substring(0, 7) + " - " + value.substring(7, 8),
            },
          });
        } else if (
          this.state.tempValue.length === 10 &&
          value.substring(9, 10) === " "
        ) {
          this.setState({
            highschool: {
              name: this.state.highschool.name,
              location: this.state.highschool.location,
              duration: value.substring(0, 7),
            },
          });
        } else if (
          this.state.tempValue.length === 15 &&
          value.substring(14, 15) !== "."
        ) {
          this.setState({
            highschool: {
              name: this.state.highschool.name,
              location: this.state.highschool.location,
              duration: value.substring(0, 14) + "." + value.substring(14, 15),
            },
          });
        } else if (
          this.state.tempValue.length === 15 &&
          value.substring(14, 15) === "."
        ) {
          this.setState({
            highschool: {
              name: this.state.highschool.name,
              location: this.state.highschool.location,
              duration: value.substring(0, 14),
            },
          });
        } else if (this.state.tempValue.length > 17) {
          this.setState({
            highschool: {
              name: this.state.highschool.name,
              location: this.state.highschool.location,
              duration: value.substring(0, 17),
            },
          });
        }
      }
    } else if (name.startsWith("careers")) {
      if (name === "careers[0]_name") {
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
        this.state.tempValue = value;
        if (
          this.state.tempValue.length === 5 &&
          value.substring(4, 5) !== "."
        ) {
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
        } else if (
          this.state.tempValue.length === 5 &&
          value.substring(4, 5) === "."
        ) {
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
        } else if (
          this.state.tempValue.length === 8 &&
          value.substring(7, 8) !== " "
        ) {
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
        } else if (
          this.state.tempValue.length === 10 &&
          value.substring(9, 10) === " "
        ) {
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
        } else if (
          this.state.tempValue.length === 15 &&
          value.substring(14, 15) !== "."
        ) {
          this.setState({
            careers: [
              {
                id: this.state.careers[0].id,
                name: this.state.careers[0].name,
                position: this.state.careers[0].position,
                duration:
                  value.substring(0, 14) + "." + value.substring(14, 15),
                description: this.state.careers[0].description,
              },
              this.state.careers[1],
              this.state.careers[2],
              this.state.careers[3],
            ],
          });
        } else if (
          this.state.tempValue.length === 15 &&
          value.substring(14, 15) === "."
        ) {
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
        } else if (this.state.tempValue.length > 17) {
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
      } else if (name === "careers[1]_name") {
        this.setState({
          careers: [
            this.state.careers[0],
            {
              id: this.state.careers[1].id,
              name: value,
              position: this.state.careers[1].position,
              duration: this.state.careers[1].duration,
              description: this.state.careers[1].description,
            },
            this.state.careers[2],
            this.state.careers[3],
          ],
        });
      } else if (name === "careers[1]_position") {
        this.setState({
          careers: [
            this.state.careers[0],
            {
              id: this.state.careers[1].id,
              name: this.state.careers[1].name,
              position: value,
              duration: this.state.careers[1].duration,
              description: this.state.careers[1].description,
            },
            this.state.careers[2],
            this.state.careers[3],
          ],
        });
      } else if (name === "careers[1]_duration") {
        await this.setState({
          careers: [
            this.state.careers[0],
            {
              id: this.state.careers[1].id,
              name: this.state.careers[1].name,
              position: this.state.careers[1].position,
              duration: value,
              description: this.state.careers[1].description,
            },
            this.state.careers[2],
            this.state.careers[3],
          ],
        });
        this.state.tempValue = value;
        if (
          this.state.tempValue.length === 5 &&
          value.substring(4, 5) !== "."
        ) {
          this.setState({
            careers: [
              this.state.careers[0],
              {
                id: this.state.careers[1].id,
                name: this.state.careers[1].name,
                position: this.state.careers[1].position,
                duration: value.substring(0, 4) + "." + value.substring(4, 5),
                description: this.state.careers[1].description,
              },
              this.state.careers[2],
              this.state.careers[3],
            ],
          });
        } else if (
          this.state.tempValue.length === 5 &&
          value.substring(4, 5) === "."
        ) {
          this.setState({
            careers: [
              this.state.careers[0],
              {
                id: this.state.careers[1].id,
                name: this.state.careers[1].name,
                position: this.state.careers[1].position,
                duration: value.substring(0, 4),
                description: this.state.careers[1].description,
              },
              this.state.careers[2],
              this.state.careers[3],
            ],
          });
        } else if (
          this.state.tempValue.length === 8 &&
          value.substring(7, 8) !== " "
        ) {
          this.setState({
            careers: [
              this.state.careers[0],
              {
                id: this.state.careers[1].id,
                name: this.state.careers[1].name,
                position: this.state.careers[1].position,
                duration: value.substring(0, 7) + " - " + value.substring(7, 8),
                description: this.state.careers[1].description,
              },
              this.state.careers[2],
              this.state.careers[3],
            ],
          });
        } else if (
          this.state.tempValue.length === 10 &&
          value.substring(9, 10) === " "
        ) {
          this.setState({
            careers: [
              this.state.careers[0],
              {
                id: this.state.careers[1].id,
                name: this.state.careers[1].name,
                position: this.state.careers[1].position,
                duration: value.substring(0, 7),
                description: this.state.careers[1].description,
              },
              this.state.careers[2],
              this.state.careers[3],
            ],
          });
        } else if (
          this.state.tempValue.length === 15 &&
          value.substring(14, 15) !== "."
        ) {
          this.setState({
            careers: [
              this.state.careers[0],
              {
                id: this.state.careers[1].id,
                name: this.state.careers[1].name,
                position: this.state.careers[1].position,
                duration:
                  value.substring(0, 14) + "." + value.substring(14, 15),
                description: this.state.careers[1].description,
              },
              this.state.careers[2],
              this.state.careers[3],
            ],
          });
        } else if (
          this.state.tempValue.length === 15 &&
          value.substring(14, 15) === "."
        ) {
          this.setState({
            careers: [
              this.state.careers[0],
              {
                id: this.state.careers[1].id,
                name: this.state.careers[1].name,
                position: this.state.careers[1].position,
                duration: value.substring(0, 14),
                description: this.state.careers[1].description,
              },
              this.state.careers[2],
              this.state.careers[3],
            ],
          });
        } else if (this.state.tempValue.length > 17) {
          this.setState({
            careers: [
              this.state.careers[0],
              {
                id: this.state.careers[1].id,
                name: this.state.careers[1].name,
                position: this.state.careers[1].position,
                duration: value.substring(0, 17),
                description: this.state.careers[1].description,
              },
              this.state.careers[2],
              this.state.careers[3],
            ],
          });
        }
      } else if (name === "careers[1]_description") {
        this.setState({
          careers: [
            this.state.careers[0],
            {
              id: this.state.careers[1].id,
              name: this.state.careers[1].name,
              position: this.state.careers[1].position,
              duration: this.state.careers[1].duration,
              description: value,
            },
            this.state.careers[2],
            this.state.careers[3],
          ],
        });
      } else if (name === "careers[2]_name") {
        this.setState({
          careers: [
            this.state.careers[0],
            this.state.careers[1],
            {
              id: this.state.careers[2].id,
              name: value,
              position: this.state.careers[2].position,
              duration: this.state.careers[2].duration,
              description: this.state.careers[2].description,
            },
            this.state.careers[3],
          ],
        });
      } else if (name === "careers[2]_position") {
        this.setState({
          careers: [
            this.state.careers[0],
            this.state.careers[1],
            {
              id: this.state.careers[2].id,
              name: this.state.careers[2].name,
              position: value,
              duration: this.state.careers[2].duration,
              description: this.state.careers[2].description,
            },
            this.state.careers[3],
          ],
        });
      } else if (name === "careers[2]_duration") {
        await this.setState({
          careers: [
            this.state.careers[0],
            this.state.careers[1],
            {
              id: this.state.careers[2].id,
              name: this.state.careers[2].name,
              position: this.state.careers[2].position,
              duration: value,
              description: this.state.careers[2].description,
            },
            this.state.careers[3],
          ],
        });
        this.state.tempValue = value;
        if (
          this.state.tempValue.length === 5 &&
          value.substring(4, 5) !== "."
        ) {
          this.setState({
            careers: [
              this.state.careers[0],
              this.state.careers[1],
              {
                id: this.state.careers[2].id,
                name: this.state.careers[2].name,
                position: this.state.careers[2].position,
                duration: value.substring(0, 4) + "." + value.substring(4, 5),
                description: this.state.careers[2].description,
              },
              this.state.careers[3],
            ],
          });
        } else if (
          this.state.tempValue.length === 5 &&
          value.substring(4, 5) === "."
        ) {
          this.setState({
            careers: [
              this.state.careers[0],
              this.state.careers[1],
              {
                id: this.state.careers[2].id,
                name: this.state.careers[2].name,
                position: this.state.careers[2].position,
                duration: value.substring(0, 4),
                description: this.state.careers[2].description,
              },
              this.state.careers[3],
            ],
          });
        } else if (
          this.state.tempValue.length === 8 &&
          value.substring(7, 8) !== " "
        ) {
          this.setState({
            careers: [
              this.state.careers[0],
              this.state.careers[1],
              {
                id: this.state.careers[2].id,
                name: this.state.careers[2].name,
                position: this.state.careers[2].position,
                duration: value.substring(0, 7) + " - " + value.substring(7, 8),
                description: this.state.careers[2].description,
              },
              this.state.careers[3],
            ],
          });
        } else if (
          this.state.tempValue.length === 10 &&
          value.substring(9, 10) === " "
        ) {
          this.setState({
            careers: [
              this.state.careers[0],
              this.state.careers[1],
              {
                id: this.state.careers[2].id,
                name: this.state.careers[2].name,
                position: this.state.careers[2].position,
                duration: value.substring(0, 7),
                description: this.state.careers[2].description,
              },
              this.state.careers[3],
            ],
          });
        } else if (
          this.state.tempValue.length === 15 &&
          value.substring(14, 15) !== "."
        ) {
          this.setState({
            careers: [
              this.state.careers[0],
              this.state.careers[1],
              {
                id: this.state.careers[2].id,
                name: this.state.careers[2].name,
                position: this.state.careers[2].position,
                duration:
                  value.substring(0, 14) + "." + value.substring(14, 15),
                description: this.state.careers[2].description,
              },
              this.state.careers[3],
            ],
          });
        } else if (
          this.state.tempValue.length === 15 &&
          value.substring(14, 15) === "."
        ) {
          this.setState({
            careers: [
              this.state.careers[0],
              this.state.careers[1],
              {
                id: this.state.careers[2].id,
                name: this.state.careers[2].name,
                position: this.state.careers[2].position,
                duration: value.substring(0, 14),
                description: this.state.careers[2].description,
              },
              this.state.careers[3],
            ],
          });
        } else if (this.state.tempValue.length > 17) {
          this.setState({
            careers: [
              this.state.careers[0],
              this.state.careers[1],
              {
                id: this.state.careers[2].id,
                name: this.state.careers[2].name,
                position: this.state.careers[2].position,
                duration: value.substring(0, 17),
                description: this.state.careers[2].description,
              },
              this.state.careers[3],
            ],
          });
        }
      } else if (name === "careers[2]_description") {
        this.setState({
          careers: [
            this.state.careers[0],
            this.state.careers[1],
            {
              id: this.state.careers[2].id,
              name: this.state.careers[2].name,
              position: this.state.careers[2].position,
              duration: this.state.careers[2].duration,
              description: value,
            },
            this.state.careers[3],
          ],
        });
      } else if (name === "careers[3]_name") {
        this.setState({
          careers: [
            this.state.careers[0],
            this.state.careers[1],
            this.state.careers[2],
            {
              id: this.state.careers[3].id,
              name: value,
              position: this.state.careers[3].position,
              duration: this.state.careers[3].duration,
              description: this.state.careers[3].description,
            },
          ],
        });
      } else if (name === "careers[3]_position") {
        this.setState({
          careers: [
            this.state.careers[0],
            this.state.careers[1],
            this.state.careers[2],
            {
              id: this.state.careers[3].id,
              name: this.state.careers[3].name,
              position: value,
              duration: this.state.careers[3].duration,
              description: this.state.careers[3].description,
            },
          ],
        });
      } else if (name === "careers[3]_duration") {
        await this.setState({
          careers: [
            this.state.careers[0],
            this.state.careers[1],
            this.state.careers[2],
            {
              id: this.state.careers[3].id,
              name: this.state.careers[3].name,
              position: this.state.careers[3].position,
              duration: value,
              description: this.state.careers[3].description,
            },
          ],
        });
        this.state.tempValue = value;
        if (
          this.state.tempValue.length === 5 &&
          value.substring(4, 5) !== "."
        ) {
          this.setState({
            careers: [
              this.state.careers[0],
              this.state.careers[1],
              this.state.careers[2],
              {
                id: this.state.careers[3].id,
                name: this.state.careers[3].name,
                position: this.state.careers[3].position,
                duration: value.substring(0, 4) + "." + value.substring(4, 5),
                description: this.state.careers[3].description,
              },
            ],
          });
        } else if (
          this.state.tempValue.length === 5 &&
          value.substring(4, 5) === "."
        ) {
          this.setState({
            careers: [
              this.state.careers[0],
              this.state.careers[1],
              this.state.careers[2],
              {
                id: this.state.careers[3].id,
                name: this.state.careers[3].name,
                position: this.state.careers[3].position,
                duration: value.substring(0, 4),
                description: this.state.careers[3].description,
              },
            ],
          });
        } else if (
          this.state.tempValue.length === 8 &&
          value.substring(7, 8) !== " "
        ) {
          this.setState({
            careers: [
              this.state.careers[0],
              this.state.careers[1],
              this.state.careers[2],
              {
                id: this.state.careers[3].id,
                name: this.state.careers[3].name,
                position: this.state.careers[3].position,
                duration: value.substring(0, 7) + " - " + value.substring(7, 8),
                description: this.state.careers[3].description,
              },
            ],
          });
        } else if (
          this.state.tempValue.length === 10 &&
          value.substring(9, 10) === " "
        ) {
          this.setState({
            careers: [
              this.state.careers[0],
              this.state.careers[1],
              this.state.careers[2],
              {
                id: this.state.careers[3].id,
                name: this.state.careers[3].name,
                position: this.state.careers[3].position,
                duration: value.substring(0, 7),
                description: this.state.careers[3].description,
              },
            ],
          });
        } else if (
          this.state.tempValue.length === 15 &&
          value.substring(14, 15) !== "."
        ) {
          this.setState({
            careers: [
              this.state.careers[0],
              this.state.careers[1],
              this.state.careers[2],
              {
                id: this.state.careers[3].id,
                name: this.state.careers[3].name,
                position: this.state.careers[3].position,
                duration:
                  value.substring(0, 14) + "." + value.substring(14, 15),
                description: this.state.careers[3].description,
              },
            ],
          });
        } else if (
          this.state.tempValue.length === 15 &&
          value.substring(14, 15) === "."
        ) {
          this.setState({
            careers: [
              this.state.careers[0],
              this.state.careers[1],
              this.state.careers[2],
              {
                id: this.state.careers[3].id,
                name: this.state.careers[3].name,
                position: this.state.careers[3].position,
                duration: value.substring(0, 14),
                description: this.state.careers[3].description,
              },
            ],
          });
        } else if (this.state.tempValue.length > 17) {
          this.setState({
            careers: [
              this.state.careers[0],
              this.state.careers[1],
              this.state.careers[2],
              {
                id: this.state.careers[3].id,
                name: this.state.careers[3].name,
                position: this.state.careers[3].position,
                duration: value.substring(0, 17),
                description: this.state.careers[3].description,
              },
            ],
          });
        }
      } else if (name === "careers[3]_description") {
        this.setState({
          careers: [
            this.state.careers[0],
            this.state.careers[1],
            this.state.careers[2],
            {
              id: this.state.careers[3].id,
              name: this.state.careers[3].name,
              position: this.state.careers[3].position,
              duration: this.state.careers[3].duration,
              description: value,
            },
          ],
        });
      }
    } else if (name.startsWith("awards")) {
      if (name === "awards[0]_name") {
        this.setState({
          awards: [
            {
              id: this.state.awards[0].id,
              name: value,
              date: this.state.awards[0].date,
              organization: this.state.awards[0].organization,
            },
            this.state.awards[1],
            this.state.awards[2],
            this.state.awards[3],
          ],
        });
      } else if (name === "awards[0]_date") {
        await this.setState({
          awards: [
            {
              id: this.state.awards[0].id,
              name: this.state.awards[0].name,
              date: value,
              organization: this.state.awards[0].organization,
            },
            this.state.awards[1],
            this.state.awards[2],
            this.state.awards[3],
          ],
        });
        this.state.tempValue = value;
        if (
          this.state.tempValue.length === 5 &&
          value.substring(4, 5) !== "."
        ) {
          this.setState({
            awards: [
              {
                id: this.state.awards[0].id,
                name: this.state.awards[0].name,
                date: value.substring(0, 4) + "." + value.substring(4, 5),
                organization: this.state.awards[0].organization,
              },
              this.state.awards[1],
              this.state.awards[2],
              this.state.awards[3],
            ],
          });
        } else if (
          this.state.tempValue.length === 5 &&
          value.substring(4, 5) === "."
        ) {
          this.setState({
            awards: [
              {
                id: this.state.awards[0].id,
                name: this.state.awards[0].name,
                date: value.substring(0, 4),
                organization: this.state.awards[0].organization,
              },
              this.state.awards[1],
              this.state.awards[2],
              this.state.awards[3],
            ],
          });
        } else if (
          this.state.tempValue.length === 8 &&
          value.substring(7, 8) !== "."
        ) {
          this.setState({
            awards: [
              {
                id: this.state.awards[0].id,
                name: this.state.awards[0].name,
                date: value.substring(0, 7) + "." + value.substring(7, 8),
                organization: this.state.awards[0].organization,
              },
              this.state.awards[1],
              this.state.awards[2],
              this.state.awards[3],
            ],
          });
        } else if (
          this.state.tempValue.length === 8 &&
          value.substring(7, 8) === "."
        ) {
          this.setState({
            awards: [
              {
                id: this.state.awards[0].id,
                name: this.state.awards[0].name,
                date: value.substring(0, 7),
                organization: this.state.awards[0].organization,
              },
              this.state.awards[1],
              this.state.awards[2],
              this.state.awards[3],
            ],
          });
        } else if (this.state.tempValue.length === 11) {
          this.setState({
            awards: [
              {
                id: this.state.awards[0].id,
                name: this.state.awards[0].name,
                date: value.substring(0, 10),
                organization: this.state.awards[0].organization,
              },
              this.state.awards[1],
              this.state.awards[2],
              this.state.awards[3],
            ],
          });
        }
      } else if (name === "awards[0]_organization") {
        this.setState({
          awards: [
            {
              id: this.state.awards[0].id,
              name: this.state.awards[0].name,
              date: this.state.awards[0].date,
              organization: value,
            },
            this.state.awards[1],
            this.state.awards[2],
            this.state.awards[3],
          ],
        });
      } else if (name === "awards[1]_name") {
        this.setState({
          awards: [
            this.state.awards[0],
            {
              id: this.state.awards[1].id,
              name: value,
              date: this.state.awards[1].date,
              organization: this.state.awards[1].organization,
            },
            this.state.awards[2],
            this.state.awards[3],
          ],
        });
      } else if (name === "awards[1]_date") {
        await this.setState({
          awards: [
            this.state.awards[0],
            {
              id: this.state.awards[1].id,
              name: this.state.awards[1].name,
              date: value,
              organization: this.state.awards[1].organization,
            },
            this.state.awards[2],
            this.state.awards[3],
          ],
        });
        this.state.tempValue = value;
        if (
          this.state.tempValue.length === 5 &&
          value.substring(4, 5) !== "."
        ) {
          this.setState({
            awards: [
              this.state.awards[0],
              {
                id: this.state.awards[1].id,
                name: this.state.awards[1].name,
                date: value.substring(0, 4) + "." + value.substring(4, 5),
                organization: this.state.awards[1].organization,
              },
              this.state.awards[2],
              this.state.awards[3],
            ],
          });
        } else if (
          this.state.tempValue.length === 5 &&
          value.substring(4, 5) === "."
        ) {
          this.setState({
            awards: [
              this.state.awards[0],
              {
                id: this.state.awards[1].id,
                name: this.state.awards[1].name,
                date: value.substring(0, 4),
                organization: this.state.awards[1].organization,
              },
              this.state.awards[2],
              this.state.awards[3],
            ],
          });
        } else if (
          this.state.tempValue.length === 8 &&
          value.substring(7, 8) !== "."
        ) {
          this.setState({
            awards: [
              this.state.awards[0],
              {
                id: this.state.awards[1].id,
                name: this.state.awards[1].name,
                date: value.substring(0, 7) + "." + value.substring(7, 8),
                organization: this.state.awards[1].organization,
              },
              this.state.awards[2],
              this.state.awards[3],
            ],
          });
        } else if (
          this.state.tempValue.length === 8 &&
          value.substring(7, 8) === "."
        ) {
          this.setState({
            awards: [
              this.state.awards[0],
              {
                id: this.state.awards[1].id,
                name: this.state.awards[1].name,
                date: value.substring(0, 7),
                organization: this.state.awards[1].organization,
              },
              this.state.awards[2],
              this.state.awards[3],
            ],
          });
        } else if (this.state.tempValue.length === 11) {
          this.setState({
            awards: [
              this.state.awards[0],
              {
                id: this.state.awards[1].id,
                name: this.state.awards[1].name,
                date: value.substring(0, 10),
                organization: this.state.awards[1].organization,
              },
              this.state.awards[2],
              this.state.awards[3],
            ],
          });
        }
      } else if (name === "awards[1]_organization") {
        this.setState({
          awards: [
            this.state.awards[0],
            {
              id: this.state.awards[1].id,
              name: this.state.awards[1].name,
              date: this.state.awards[1].date,
              organization: value,
            },
            this.state.awards[2],
            this.state.awards[3],
          ],
        });
      } else if (name === "awards[2]_name") {
        this.setState({
          awards: [
            this.state.awards[0],
            this.state.awards[1],
            {
              id: this.state.awards[2].id,
              name: value,
              date: this.state.awards[2].date,
              organization: this.state.awards[2].organization,
            },
            this.state.awards[3],
          ],
        });
      } else if (name === "awards[2]_date") {
        await this.setState({
          awards: [
            this.state.awards[0],
            this.state.awards[1],
            {
              id: this.state.awards[2].id,
              name: this.state.awards[2].name,
              date: value,
              organization: this.state.awards[2].organization,
            },
            this.state.awards[3],
          ],
        });
        this.state.tempValue = value;
        if (
          this.state.tempValue.length === 5 &&
          value.substring(4, 5) !== "."
        ) {
          this.setState({
            awards: [
              this.state.awards[0],
              this.state.awards[1],
              {
                id: this.state.awards[2].id,
                name: this.state.awards[2].name,
                date: value.substring(0, 4) + "." + value.substring(4, 5),
                organization: this.state.awards[2].organization,
              },
              this.state.awards[3],
            ],
          });
        } else if (
          this.state.tempValue.length === 5 &&
          value.substring(4, 5) === "."
        ) {
          this.setState({
            awards: [
              this.state.awards[0],
              this.state.awards[1],
              {
                id: this.state.awards[2].id,
                name: this.state.awards[2].name,
                date: value.substring(0, 4),
                organization: this.state.awards[2].organization,
              },
              this.state.awards[3],
            ],
          });
        } else if (
          this.state.tempValue.length === 8 &&
          value.substring(7, 8) !== "."
        ) {
          this.setState({
            awards: [
              this.state.awards[0],
              this.state.awards[1],
              {
                id: this.state.awards[2].id,
                name: this.state.awards[2].name,
                date: value.substring(0, 7) + "." + value.substring(7, 8),
                organization: this.state.awards[2].organization,
              },
              this.state.awards[3],
            ],
          });
        } else if (
          this.state.tempValue.length === 8 &&
          value.substring(7, 8) === "."
        ) {
          this.setState({
            awards: [
              this.state.awards[0],
              this.state.awards[1],
              {
                id: this.state.awards[2].id,
                name: this.state.awards[2].name,
                date: value.substring(0, 7),
                organization: this.state.awards[2].organization,
              },
              this.state.awards[3],
            ],
          });
        } else if (this.state.tempValue.length === 11) {
          this.setState({
            awards: [
              this.state.awards[0],
              this.state.awards[1],
              {
                id: this.state.awards[2].id,
                name: this.state.awards[2].name,
                date: value.substring(0, 10),
                organization: this.state.awards[2].organization,
              },
              this.state.awards[3],
            ],
          });
        }
      } else if (name === "awards[2]_organization") {
        this.setState({
          awards: [
            this.state.awards[0],
            this.state.awards[1],
            {
              id: this.state.awards[2].id,
              name: this.state.awards[2].name,
              date: this.state.awards[2].date,
              organization: value,
            },
            this.state.awards[3],
          ],
        });
      } else if (name === "awards[3]_name") {
        this.setState({
          awards: [
            this.state.awards[0],
            this.state.awards[1],
            this.state.awards[2],
            {
              id: this.state.awards[3].id,
              name: value,
              date: this.state.awards[3].date,
              organization: this.state.awards[3].organization,
            },
          ],
        });
      } else if (name === "awards[3]_date") {
        await this.setState({
          awards: [
            this.state.awards[0],
            this.state.awards[1],
            this.state.awards[2],
            {
              id: this.state.awards[3].id,
              name: this.state.awards[3].name,
              date: value,
              organization: this.state.awards[3].organization,
            },
          ],
        });
        this.state.tempValue = value;
        if (
          this.state.tempValue.length === 5 &&
          value.substring(4, 5) !== "."
        ) {
          this.setState({
            awards: [
              this.state.awards[0],
              this.state.awards[1],
              this.state.awards[2],
              {
                id: this.state.awards[3].id,
                name: this.state.awards[3].name,
                date: value.substring(0, 4) + "." + value.substring(4, 5),
                organization: this.state.awards[3].organization,
              },
            ],
          });
        } else if (
          this.state.tempValue.length === 5 &&
          value.substring(4, 5) === "."
        ) {
          this.setState({
            awards: [
              this.state.awards[0],
              this.state.awards[1],
              this.state.awards[2],
              {
                id: this.state.awards[3].id,
                name: this.state.awards[3].name,
                date: value.substring(0, 4),
                organization: this.state.awards[3].organization,
              },
            ],
          });
        } else if (
          this.state.tempValue.length === 8 &&
          value.substring(7, 8) !== "."
        ) {
          this.setState({
            awards: [
              this.state.awards[0],
              this.state.awards[1],
              this.state.awards[2],
              {
                id: this.state.awards[3].id,
                name: this.state.awards[3].name,
                date: value.substring(0, 7) + "." + value.substring(7, 8),
                organization: this.state.awards[3].organization,
              },
            ],
          });
        } else if (
          this.state.tempValue.length === 8 &&
          value.substring(7, 8) === "."
        ) {
          this.setState({
            awards: [
              this.state.awards[0],
              this.state.awards[1],
              this.state.awards[2],
              {
                id: this.state.awards[3].id,
                name: this.state.awards[3].name,
                date: value.substring(0, 7),
                organization: this.state.awards[3].organization,
              },
            ],
          });
        } else if (this.state.tempValue.length === 11) {
          this.setState({
            awards: [
              this.state.awards[0],
              this.state.awards[1],
              this.state.awards[2],
              {
                id: this.state.awards[3].id,
                name: this.state.awards[3].name,
                date: value.substring(0, 10),
                organization: this.state.awards[3].organization,
              },
            ],
          });
        }
      } else if (name === "awards[3]_organization") {
        this.setState({
          awards: [
            this.state.awards[0],
            this.state.awards[1],
            this.state.awards[2],
            {
              id: this.state.awards[3].id,
              name: this.state.awards[3].name,
              date: this.state.awards[3].date,
              organization: value,
            },
          ],
        });
      }
    } else if (name.startsWith("classifications")) {
      if (name === "classifications[0]_type") {
        this.setState({
          classifications: [
            {
              type: value,
              name: this.state.classifications[0].name,
              date: this.state.classifications[0].date,
              grade: this.state.classifications[0].grade,
              association: this.state.classifications[0].association,
            },
            this.state.classifications[1],
            this.state.classifications[2],
            this.state.classifications[3],
          ],
        });
      } else if (name === "classifications[0]_name") {
        this.setState({
          classifications: [
            {
              type: this.state.classifications[0].type,
              name: value,
              date: this.state.classifications[0].date,
              grade: this.state.classifications[0].grade,
              association: this.state.classifications[0].association,
            },
            this.state.classifications[1],
            this.state.classifications[2],
            this.state.classifications[3],
          ],
        });
      } else if (name === "classifications[0]_date") {
        await this.setState({
          classifications: [
            {
              type: this.state.classifications[0].type,
              name: this.state.classifications[0].name,
              date: value,
              grade: this.state.classifications[0].grade,
              association: this.state.classifications[0].association,
            },
            this.state.classifications[1],
            this.state.classifications[2],
            this.state.classifications[3],
          ],
        });
        this.state.tempValue = value;
        if (
          this.state.tempValue.length === 5 &&
          value.substring(4, 5) !== "."
        ) {
          this.setState({
            classifications: [
              {
                type: this.state.classifications[0].type,
                name: this.state.classifications[0].name,
                date: value.substring(0, 4) + "." + value.substring(4, 5),

                grade: this.state.classifications[0].grade,
                association: this.state.classifications[0].association,
              },
              this.state.classifications[1],
              this.state.classifications[2],
              this.state.classifications[3],
            ],
          });
        } else if (
          this.state.tempValue.length === 5 &&
          value.substring(4, 5) === "."
        ) {
          this.setState({
            classifications: [
              {
                type: this.state.classifications[0].type,
                name: this.state.classifications[0].name,
                date: value.substring(0, 4),

                grade: this.state.classifications[0].grade,
                association: this.state.classifications[0].association,
              },
              this.state.classifications[1],
              this.state.classifications[2],
              this.state.classifications[3],
            ],
          });
        } else if (
          this.state.tempValue.length === 8 &&
          value.substring(7, 8) !== "."
        ) {
          this.setState({
            classifications: [
              {
                type: this.state.classifications[0].type,
                name: this.state.classifications[0].name,
                date: value.substring(0, 7) + "." + value.substring(7, 8),
                grade: this.state.classifications[0].grade,
                association: this.state.classifications[0].association,
              },
              this.state.classifications[1],
              this.state.classifications[2],
              this.state.classifications[3],
            ],
          });
        } else if (
          this.state.tempValue.length === 8 &&
          value.substring(7, 8) === "."
        ) {
          this.setState({
            classifications: [
              {
                type: this.state.classifications[0].type,
                name: this.state.classifications[0].name,
                date: value.substring(0, 7),

                grade: this.state.classifications[0].grade,
                association: this.state.classifications[0].association,
              },
              this.state.classifications[1],
              this.state.classifications[2],
              this.state.classifications[3],
            ],
          });
        } else if (this.state.tempValue.length === 11) {
          this.setState({
            classifications: [
              {
                type: this.state.classifications[0].type,
                name: this.state.classifications[0].name,
                date: value.substring(0, 10),
                grade: this.state.classifications[0].grade,
                association: this.state.classifications[0].association,
              },
              this.state.classifications[1],
              this.state.classifications[2],
              this.state.classifications[3],
            ],
          });
        }
      } else if (name === "classifications[0]_grade") {
        this.setState({
          classifications: [
            {
              type: this.state.classifications[0].type,
              name: this.state.classifications[0].name,
              date: this.state.classifications[0].date,
              grade: value,
              association: this.state.classifications[0].association,
            },
            this.state.classifications[1],
            this.state.classifications[2],
            this.state.classifications[3],
          ],
        });
      } else if (name === "classifications[0]_association") {
        this.setState({
          classifications: [
            {
              type: this.state.classifications[0].type,
              name: this.state.classifications[0].name,
              date: this.state.classifications[0].date,
              grade: this.state.classifications[0].grade,
              association: value,
            },
            this.state.classifications[1],
            this.state.classifications[2],
            this.state.classifications[3],
          ],
        });
      } else if (name === "classifications[1]_type") {
        this.setState({
          classifications: [
            this.state.classifications[0],
            {
              type: value,
              name: this.state.classifications[1].name,
              date: this.state.classifications[1].date,
              grade: this.state.classifications[1].grade,
              association: this.state.classifications[1].association,
            },
            this.state.classifications[2],
            this.state.classifications[3],
          ],
        });
      } else if (name === "classifications[1]_name") {
        this.setState({
          classifications: [
            this.state.classifications[0],
            {
              type: this.state.classifications[1].type,
              name: value,
              date: this.state.classifications[1].date,
              grade: this.state.classifications[1].grade,
              association: this.state.classifications[1].association,
            },
            this.state.classifications[2],
            this.state.classifications[3],
          ],
        });
      } else if (name === "classifications[1]_date") {
        await this.setState({
          classifications: [
            this.state.classifications[0],
            {
              type: this.state.classifications[1].type,
              name: this.state.classifications[1].name,
              date: value,
              grade: this.state.classifications[1].grade,
              association: this.state.classifications[1].association,
            },
            this.state.classifications[2],
            this.state.classifications[3],
          ],
        });
        this.state.tempValue = value;
        if (
          this.state.tempValue.length === 5 &&
          value.substring(4, 5) !== "."
        ) {
          this.setState({
            classifications: [
              this.state.classifications[0],
              {
                type: this.state.classifications[1].type,
                name: this.state.classifications[1].name,
                date: value.substring(0, 4) + "." + value.substring(4, 5),
                grade: this.state.classifications[1].grade,
                association: this.state.classifications[1].association,
              },
              this.state.classifications[2],
              this.state.classifications[3],
            ],
          });
        } else if (
          this.state.tempValue.length === 5 &&
          value.substring(4, 5) === "."
        ) {
          this.setState({
            classifications: [
              this.state.classifications[0],
              {
                type: this.state.classifications[1].type,
                name: this.state.classifications[1].name,
                date: value.substring(0, 4),
                grade: this.state.classifications[1].grade,
                association: this.state.classifications[1].association,
              },
              this.state.classifications[2],
              this.state.classifications[3],
            ],
          });
        } else if (
          this.state.tempValue.length === 8 &&
          value.substring(7, 8) !== "."
        ) {
          this.setState({
            classifications: [
              this.state.classifications[0],
              {
                type: this.state.classifications[1].type,
                name: this.state.classifications[1].name,
                date: value.substring(0, 7) + "." + value.substring(7, 8),
                grade: this.state.classifications[1].grade,
                association: this.state.classifications[1].association,
              },
              this.state.classifications[2],
              this.state.classifications[3],
            ],
          });
        } else if (
          this.state.tempValue.length === 8 &&
          value.substring(7, 8) === "."
        ) {
          this.setState({
            classifications: [
              this.state.classifications[0],
              {
                type: this.state.classifications[1].type,
                name: this.state.classifications[1].name,
                date: value.substring(0, 7),
                grade: this.state.classifications[1].grade,
                association: this.state.classifications[1].association,
              },
              this.state.classifications[2],
              this.state.classifications[3],
            ],
          });
        } else if (this.state.tempValue.length === 11) {
          this.setState({
            classifications: [
              this.state.classifications[0],
              {
                type: this.state.classifications[1].type,
                name: this.state.classifications[1].name,
                date: value.substring(0, 10),
                grade: this.state.classifications[1].grade,
                association: this.state.classifications[1].association,
              },
              this.state.classifications[2],
              this.state.classifications[3],
            ],
          });
        }
      } else if (name === "classifications[1]_grade") {
        this.setState({
          classifications: [
            this.state.classifications[0],
            {
              type: this.state.classifications[1].type,
              name: this.state.classifications[1].name,
              date: this.state.classifications[1].date,
              grade: value,
              association: this.state.classifications[1].association,
            },
            this.state.classifications[2],
            this.state.classifications[3],
          ],
        });
      } else if (name === "classifications[1]_association") {
        this.setState({
          classifications: [
            this.state.classifications[0],
            {
              type: this.state.classifications[1].type,
              name: this.state.classifications[1].name,
              date: this.state.classifications[1].date,
              grade: this.state.classifications[1].grade,
              association: value,
            },
            this.state.classifications[2],
            this.state.classifications[3],
          ],
        });
      } else if (name === "classifications[2]_type") {
        this.setState({
          classifications: [
            this.state.classifications[0],
            this.state.classifications[1],
            {
              type: value,
              name: this.state.classifications[2].name,
              date: this.state.classifications[2].date,
              grade: this.state.classifications[2].grade,
              association: this.state.classifications[2].association,
            },
            this.state.classifications[3],
          ],
        });
      } else if (name === "classifications[2]_name") {
        this.setState({
          classifications: [
            this.state.classifications[0],
            this.state.classifications[1],
            {
              type: this.state.classifications[2].type,
              name: value,
              date: this.state.classifications[2].date,
              grade: this.state.classifications[2].grade,
              association: this.state.classifications[2].association,
            },
            this.state.classifications[3],
          ],
        });
      } else if (name === "classifications[2]_date") {
        await this.setState({
          classifications: [
            this.state.classifications[0],
            this.state.classifications[1],
            {
              type: this.state.classifications[2].type,
              name: this.state.classifications[2].name,
              date: value,
              grade: this.state.classifications[2].grade,
              association: this.state.classifications[2].association,
            },
            this.state.classifications[3],
          ],
        });
        this.state.tempValue = value;
        if (
          this.state.tempValue.length === 5 &&
          value.substring(4, 5) !== "."
        ) {
          this.setState({
            classifications: [
              this.state.classifications[0],
              this.state.classifications[1],
              {
                type: this.state.classifications[2].type,
                name: this.state.classifications[2].name,
                date: value.substring(0, 4) + "." + value.substring(4, 5),
                grade: this.state.classifications[2].grade,
                association: this.state.classifications[2].association,
              },
              this.state.classifications[3],
            ],
          });
        } else if (
          this.state.tempValue.length === 5 &&
          value.substring(4, 5) === "."
        ) {
          this.setState({
            classifications: [
              this.state.classifications[0],
              this.state.classifications[1],
              {
                type: this.state.classifications[2].type,
                name: this.state.classifications[2].name,
                date: value.substring(0, 4),
                grade: this.state.classifications[2].grade,
                association: this.state.classifications[2].association,
              },
              this.state.classifications[3],
            ],
          });
        } else if (
          this.state.tempValue.length === 8 &&
          value.substring(7, 8) !== "."
        ) {
          this.setState({
            classifications: [
              this.state.classifications[0],
              this.state.classifications[1],
              {
                type: this.state.classifications[2].type,
                name: this.state.classifications[2].name,
                date: value.substring(0, 7) + "." + value.substring(7, 8),
                grade: this.state.classifications[2].grade,
                association: this.state.classifications[2].association,
              },
              this.state.classifications[3],
            ],
          });
        } else if (
          this.state.tempValue.length === 8 &&
          value.substring(7, 8) === "."
        ) {
          this.setState({
            classifications: [
              this.state.classifications[0],
              this.state.classifications[1],
              {
                type: this.state.classifications[2].type,
                name: this.state.classifications[2].name,
                date: value.substring(0, 7),
                grade: this.state.classifications[2].grade,
                association: this.state.classifications[2].association,
              },
              this.state.classifications[3],
            ],
          });
        } else if (this.state.tempValue.length === 11) {
          this.setState({
            classifications: [
              this.state.classifications[0],
              this.state.classifications[1],
              {
                type: this.state.classifications[2].type,
                name: this.state.classifications[2].name,
                date: value.substring(0, 10),
                grade: this.state.classifications[2].grade,
                association: this.state.classifications[2].association,
              },
              this.state.classifications[3],
            ],
          });
        }
      } else if (name === "classifications[2]_grade") {
        this.setState({
          classifications: [
            this.state.classifications[0],
            this.state.classifications[1],
            {
              type: this.state.classifications[2].type,
              name: this.state.classifications[2].name,
              date: this.state.classifications[2].date,
              grade: value,
              association: this.state.classifications[2].association,
            },
            this.state.classifications[3],
          ],
        });
      } else if (name === "classifications[2]_association") {
        this.setState({
          classifications: [
            this.state.classifications[0],
            this.state.classifications[1],
            {
              type: this.state.classifications[2].type,
              name: this.state.classifications[2].name,
              date: this.state.classifications[2].date,
              grade: this.state.classifications[2].grade,
              association: value,
            },
            this.state.classifications[3],
          ],
        });
      } else if (name === "classifications[3]_type") {
        this.setState({
          classifications: [
            this.state.classifications[0],
            this.state.classifications[1],
            this.state.classifications[2],
            {
              type: value,
              name: this.state.classifications[3].name,
              date: this.state.classifications[3].date,
              grade: this.state.classifications[3].grade,
              association: this.state.classifications[3].association,
            },
          ],
        });
      } else if (name === "classifications[3]_name") {
        this.setState({
          classifications: [
            this.state.classifications[0],
            this.state.classifications[1],
            this.state.classifications[2],
            {
              type: this.state.classifications[3].type,
              name: value,
              date: this.state.classifications[3].date,
              grade: this.state.classifications[3].grade,
              association: this.state.classifications[3].association,
            },
          ],
        });
      } else if (name === "classifications[3]_date") {
        await this.setState({
          classifications: [
            this.state.classifications[0],
            this.state.classifications[1],
            this.state.classifications[2],
            {
              type: this.state.classifications[3].type,
              name: this.state.classifications[3].name,
              date: value,
              grade: this.state.classifications[3].grade,
              association: this.state.classifications[3].association,
            },
          ],
        });
        this.state.tempValue = value;
        if (
          this.state.tempValue.length === 5 &&
          value.substring(4, 5) !== "."
        ) {
          this.setState({
            classifications: [
              this.state.classifications[0],
              this.state.classifications[1],
              this.state.classifications[2],
              {
                type: this.state.classifications[3].type,
                name: this.state.classifications[3].name,
                date: value.substring(0, 4) + "." + value.substring(4, 5),
                grade: this.state.classifications[3].grade,
                association: this.state.classifications[3].association,
              },
            ],
          });
        } else if (
          this.state.tempValue.length === 5 &&
          value.substring(4, 5) === "."
        ) {
          this.setState({
            classifications: [
              this.state.classifications[0],
              this.state.classifications[1],
              this.state.classifications[2],
              {
                type: this.state.classifications[3].type,
                name: this.state.classifications[3].name,
                date: value.substring(0, 4),
                grade: this.state.classifications[3].grade,
                association: this.state.classifications[3].association,
              },
            ],
          });
        } else if (
          this.state.tempValue.length === 8 &&
          value.substring(7, 8) !== "."
        ) {
          this.setState({
            classifications: [
              this.state.classifications[0],
              this.state.classifications[1],
              this.state.classifications[2],
              {
                type: this.state.classifications[3].type,
                name: this.state.classifications[3].name,
                date: value.substring(0, 7) + "." + value.substring(7, 8),
                grade: this.state.classifications[3].grade,
                association: this.state.classifications[3].association,
              },
            ],
          });
        } else if (
          this.state.tempValue.length === 8 &&
          value.substring(7, 8) === "."
        ) {
          this.setState({
            classifications: [
              this.state.classifications[0],
              this.state.classifications[1],
              this.state.classifications[2],
              {
                type: this.state.classifications[3].type,
                name: this.state.classifications[3].name,
                date: value.substring(0, 7),
                grade: this.state.classifications[3].grade,
                association: this.state.classifications[3].association,
              },
            ],
          });
        } else if (this.state.tempValue.length === 11) {
          this.setState({
            classifications: [
              this.state.classifications[0],
              this.state.classifications[1],
              this.state.classifications[2],
              {
                type: this.state.classifications[3].type,
                name: this.state.classifications[3].name,
                date: value.substring(0, 10),
                grade: this.state.classifications[3].grade,
                association: this.state.classifications[3].association,
              },
            ],
          });
        }
      } else if (name === "classifications[3]_grade") {
        this.setState({
          classifications: [
            this.state.classifications[0],
            this.state.classifications[1],
            this.state.classifications[2],
            {
              type: this.state.classifications[3].type,
              name: this.state.classifications[3].name,
              date: this.state.classifications[3].date,
              grade: value,
              association: this.state.classifications[3].association,
            },
          ],
        });
      } else if (name === "classifications[3]_association") {
        this.setState({
          classifications: [
            this.state.classifications[0],
            this.state.classifications[1],
            this.state.classifications[2],
            {
              type: this.state.classifications[3].type,
              name: this.state.classifications[3].name,
              date: this.state.classifications[3].date,
              grade: this.state.classifications[3].grade,
              association: value,
            },
          ],
        });
      }
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
      input50: {
        "& > *": {
          marginTop: "2vh",
          width: "50vw",
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
