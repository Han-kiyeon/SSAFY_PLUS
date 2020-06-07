import React from "react";
import MyInfoPresenter from "components/MyInfo/MyInfoPresenter";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import axios from "axios";

interface MyInfoIState {
  name: string;
  birth: string;
  email: string;
  gender: string;
  phone: string;
  university: universityDTO;
  highschool: highschoolDTO;
  careers: Array<careersDTO>;
  careerLen: number;
  awards: Array<awardDTO>;
  awardLen: number;
  licences: Array<licenceDTO>;
  licenceLen: number;
  postInfo: boolean;
}
interface universityDTO {
  id: number;
  name: string;
  location: string;
  duration: string;
  major: string;
  minor: string;
  grade: string;
  classification: string;
}
interface highschoolDTO {
  name: string;
  location: string;
  duration: string;
}
interface careersDTO {
  name: string;
  position: string;
  duration: string;
  description: string;
}
interface awardDTO {
  name: string;
  date: string;
  association: string;
}
interface licenceDTO {
  type: string;
  name: string;
  date: string;
  grade: string;
  association: string;
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
      id: 0,
      name: "",
      location: "",
      duration: "",
      major: "",
      minor: "",
      grade: "",
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
        name: "",
        position: "",
        duration: "",
        description: "",
      },
      {
        name: "",
        position: "",
        duration: "",
        description: "",
      },
      {
        name: "",
        position: "",
        duration: "",
        description: "",
      },
      {
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
        name: "",
        association: "",
        date: "",
      },
      {
        name: "",
        association: "",
        date: "",
      },
      {
        name: "",
        association: "",
        date: "",
      },
      {
        name: "",
        association: "",
        date: "",
      },
    ],
    awardLen: 0,
    // 자격 사항
    licences: [
      {
        type: "",
        name: "",
        date: "",
        grade: "",
        association: "",
      },
      {
        type: "",
        name: "",
        date: "",
        grade: "",
        association: "",
      },
      {
        type: "",
        name: "",
        date: "",
        grade: "",
        association: "",
      },
      {
        type: "",
        name: "",
        date: "",
        grade: "",
        association: "",
      },
    ],
    licenceLen: 0,
    tempValue: "",
    postInfo: false,
  };
  componentDidMount() {
    window.scrollTo(0, 0);
    axios
      .get(
        `http://13.125.238.102:8080/api/userInfo/get/${window.sessionStorage.getItem(
          "user_email"
        )}/`
      )
      .then(res => {
        this.setState({
          name: res.data.name || this.state.name,
          gender: res.data.gender || this.state.gender,
          birth: res.data.birth || this.state.birth,
          phone: res.data.phone || this.state.phone,
          email: res.data.email || this.state.email,
          university: res.data.university || this.state.university,
          highschool: res.data.highschool || this.state.highschool,
          careers: res.data.careers,
          careerLen: res.data.careers.length || 0,
          awards: res.data.awards || this.state.awards,
          awardLen: res.data.awards.length || 0,
          licences: res.data.licences || this.state.licences,
          licenceLen: res.data.licences.length || 0,
        });
      })
      .catch(e => {
        console.log("기존 회원정보가 존재하지 않습니다.");
        console.log("이 콘솔을 보고계시다면 개발자시겠죠?");
        console.log("본인의 인적사항을 적어주세요!");
        this.setState({
          postInfo: true,
        });
      });
  }
  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  asyncValue = () => {
    if (this.state.awards[0] === undefined) {
      this.setState({ awards: [] });
    } else if (this.state.awards[1] === undefined) {
      this.setState({ awards: [this.state.awards[0]] });
    } else if (this.state.awards[2] === undefined) {
      this.setState({ awards: [this.state.awards[0], this.state.awards[1]] });
    } else if (this.state.awards[3] === undefined) {
      this.setState({
        awards: [
          this.state.awards[0],
          this.state.awards[1],
          this.state.awards[2],
        ],
      });
    }
    if (this.state.licences[0] === undefined) {
      this.setState({ licences: [] });
    } else if (this.state.licences[1] === undefined) {
      this.setState({ licences: [this.state.licences[0]] });
    } else if (this.state.licences[2] === undefined) {
      this.setState({
        licences: [this.state.licences[0], this.state.licences[1]],
      });
    } else if (this.state.licences[3] === undefined) {
      this.setState({
        licences: [
          this.state.licences[0],
          this.state.licences[1],
          this.state.licences[2],
        ],
      });
    }
    if (this.state.careers[0] === undefined) {
      this.setState({ careers: [] });
    } else if (this.state.careers[1] === undefined) {
      this.setState({ careers: [this.state.careers[0]] });
    } else if (this.state.careers[2] === undefined) {
      this.setState({
        careers: [this.state.careers[0], this.state.careers[1]],
      });
    } else if (this.state.careers[3] === undefined) {
      this.setState({
        careers: [
          this.state.careers[0],
          this.state.careers[1],
          this.state.careers[2],
        ],
      });
    }
  };
  submitAxios = async (event: React.FormEvent) => {
    if (this.state.postInfo) {
      await this.asyncValue();
      axios
        .post(
          `http://13.125.238.102:8080/api/userInfo/${window.sessionStorage.getItem(
            "user_id"
          )}`,
          {
            name: this.state.name,
            birth: this.state.birth,
            user_email: window.sessionStorage.getItem("user_email"),
            gender: this.state.gender,
            phone: this.state.phone,
            email: this.state.email,
            university: this.state.university,
            highschool: this.state.highschool,
            careers: this.state.careers,
            awards: this.state.awards,
            licences: this.state.licences,
          }
        )
        .then(res => {
          console.log("Success", res);
          this.setState({
            postInfo: false,
          });
        })
        .catch(e => {
          console.log("fail", e);
        });
    } else {
      await this.asyncValue();
      console.log(this.state.licences, this.state.awards, this.state.careers);
      axios
        .put(
          `http://13.125.238.102:8080/api/userInfo/${window.sessionStorage.getItem(
            "user_id"
          )}`,
          {
            name: this.state.name,
            birth: this.state.birth,
            user_email: window.sessionStorage.getItem("user_email"),
            gender: this.state.gender,
            phone: this.state.phone,
            email: this.state.email,
            university: this.state.university,
            highschool: this.state.highschool,
            careers: this.state.careers,
            awards: this.state.awards,
            licences: this.state.licences,
          }
        )
        .then(res => {
          console.log("Success", res);
        })
        .catch(e => {
          console.log("fail", e);
        });
    }
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
            id: this.state.university.id,
            name: value,
            location: this.state.university.location,
            duration: this.state.university.duration,
            major: this.state.university.major,
            minor: this.state.university.minor,
            grade: this.state.university.grade,
            classification: this.state.university.classification,
          },
        });
      } else if (name === "university_location") {
        this.setState({
          university: {
            id: this.state.university.id,
            name: this.state.university.name,
            location: value,
            duration: this.state.university.duration,
            major: this.state.university.major,
            minor: this.state.university.minor,
            grade: this.state.university.grade,
            classification: this.state.university.classification,
          },
        });
      } else if (name === "university_duration") {
        await this.setState({
          university: {
            id: this.state.university.id,
            name: this.state.university.name,
            location: this.state.university.location,
            duration: value,
            major: this.state.university.major,
            minor: this.state.university.minor,
            grade: this.state.university.grade,
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
              id: this.state.university.id,
              name: this.state.university.name,
              location: this.state.university.location,
              duration: value.substring(0, 4) + "." + value.substring(4, 5),
              major: this.state.university.major,
              minor: this.state.university.minor,
              grade: this.state.university.grade,
              classification: this.state.university.classification,
            },
          });
        } else if (
          this.state.tempValue.length === 5 &&
          value.substring(4, 5) === "."
        ) {
          this.setState({
            university: {
              id: this.state.university.id,
              name: this.state.university.name,
              location: this.state.university.location,
              duration: value.substring(0, 4),
              major: this.state.university.major,
              minor: this.state.university.minor,
              grade: this.state.university.grade,
              classification: this.state.university.classification,
            },
          });
        } else if (
          this.state.tempValue.length === 8 &&
          value.substring(7, 8) !== " "
        ) {
          this.setState({
            university: {
              id: this.state.university.id,
              name: this.state.university.name,
              location: this.state.university.location,
              duration: value.substring(0, 7) + " - " + value.substring(7, 8),
              major: this.state.university.major,
              minor: this.state.university.minor,
              grade: this.state.university.grade,
              classification: this.state.university.classification,
            },
          });
        } else if (
          this.state.tempValue.length === 10 &&
          value.substring(9, 10) === " "
        ) {
          this.setState({
            university: {
              id: this.state.university.id,
              name: this.state.university.name,
              location: this.state.university.location,
              duration: value.substring(0, 7),
              major: this.state.university.major,
              minor: this.state.university.minor,
              grade: this.state.university.grade,
              classification: this.state.university.classification,
            },
          });
        } else if (
          this.state.tempValue.length === 15 &&
          value.substring(14, 15) !== "."
        ) {
          this.setState({
            university: {
              id: this.state.university.id,
              name: this.state.university.name,
              location: this.state.university.location,
              duration: value.substring(0, 14) + "." + value.substring(14, 15),
              major: this.state.university.major,
              minor: this.state.university.minor,
              grade: this.state.university.grade,
              classification: this.state.university.classification,
            },
          });
        } else if (
          this.state.tempValue.length === 15 &&
          value.substring(14, 15) === "."
        ) {
          this.setState({
            university: {
              id: this.state.university.id,
              name: this.state.university.name,
              location: this.state.university.location,
              duration: value.substring(0, 14),
              major: this.state.university.major,
              minor: this.state.university.minor,
              grade: this.state.university.grade,
              classification: this.state.university.classification,
            },
          });
        } else if (this.state.tempValue.length > 17) {
          this.setState({
            university: {
              id: this.state.university.id,
              name: this.state.university.name,
              location: this.state.university.location,
              duration: value.substring(0, 17),
              major: this.state.university.major,
              minor: this.state.university.minor,
              grade: this.state.university.grade,
              classification: this.state.university.classification,
            },
          });
        }
      } else if (name === "university_major") {
        this.setState({
          university: {
            id: this.state.university.id,
            name: this.state.university.name,
            location: this.state.university.location,
            duration: this.state.university.duration,
            major: value,
            minor: this.state.university.minor,
            grade: this.state.university.grade,
            classification: this.state.university.classification,
          },
        });
      } else if (name === "university_minor") {
        this.setState({
          university: {
            id: this.state.university.id,
            name: this.state.university.name,
            location: this.state.university.location,
            duration: this.state.university.duration,
            major: this.state.university.major,
            minor: value,
            grade: this.state.university.grade,
            classification: this.state.university.classification,
          },
        });
      } else if (name === "university_grade") {
        this.setState({
          university: {
            id: this.state.university.id,
            name: this.state.university.name,
            location: this.state.university.location,
            duration: this.state.university.duration,
            major: this.state.university.major,
            minor: this.state.university.minor,
            grade: value,
            classification: this.state.university.classification,
          },
        });
      } else if (name === "university_licence") {
        this.setState({
          university: {
            id: this.state.university.id,
            name: this.state.university.name,
            location: this.state.university.location,
            duration: this.state.university.duration,
            major: this.state.university.major,
            minor: this.state.university.minor,
            grade: this.state.university.grade,
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
              name: value,
              date: this.state.awards[0].date,
              association: this.state.awards[0].association,
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
              name: this.state.awards[0].name,
              date: value,
              association: this.state.awards[0].association,
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
                name: this.state.awards[0].name,
                date: value.substring(0, 4) + "." + value.substring(4, 5),
                association: this.state.awards[0].association,
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
                name: this.state.awards[0].name,
                date: value.substring(0, 4),
                association: this.state.awards[0].association,
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
                name: this.state.awards[0].name,
                date: value.substring(0, 7) + "." + value.substring(7, 8),
                association: this.state.awards[0].association,
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
                name: this.state.awards[0].name,
                date: value.substring(0, 7),
                association: this.state.awards[0].association,
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
                name: this.state.awards[0].name,
                date: value.substring(0, 10),
                association: this.state.awards[0].association,
              },
              this.state.awards[1],
              this.state.awards[2],
              this.state.awards[3],
            ],
          });
        }
      } else if (name === "awards[0]_association") {
        this.setState({
          awards: [
            {
              name: this.state.awards[0].name,
              date: this.state.awards[0].date,
              association: value,
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
              name: value,
              date: this.state.awards[1].date,
              association: this.state.awards[1].association,
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
              name: this.state.awards[1].name,
              date: value,
              association: this.state.awards[1].association,
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
                name: this.state.awards[1].name,
                date: value.substring(0, 4) + "." + value.substring(4, 5),
                association: this.state.awards[1].association,
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
                name: this.state.awards[1].name,
                date: value.substring(0, 4),
                association: this.state.awards[1].association,
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
                name: this.state.awards[1].name,
                date: value.substring(0, 7) + "." + value.substring(7, 8),
                association: this.state.awards[1].association,
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
                name: this.state.awards[1].name,
                date: value.substring(0, 7),
                association: this.state.awards[1].association,
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
                name: this.state.awards[1].name,
                date: value.substring(0, 10),
                association: this.state.awards[1].association,
              },
              this.state.awards[2],
              this.state.awards[3],
            ],
          });
        }
      } else if (name === "awards[1]_association") {
        this.setState({
          awards: [
            this.state.awards[0],
            {
              name: this.state.awards[1].name,
              date: this.state.awards[1].date,
              association: value,
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
              name: value,
              date: this.state.awards[2].date,
              association: this.state.awards[2].association,
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
              name: this.state.awards[2].name,
              date: value,
              association: this.state.awards[2].association,
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
                name: this.state.awards[2].name,
                date: value.substring(0, 4) + "." + value.substring(4, 5),
                association: this.state.awards[2].association,
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
                name: this.state.awards[2].name,
                date: value.substring(0, 4),
                association: this.state.awards[2].association,
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
                name: this.state.awards[2].name,
                date: value.substring(0, 7) + "." + value.substring(7, 8),
                association: this.state.awards[2].association,
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
                name: this.state.awards[2].name,
                date: value.substring(0, 7),
                association: this.state.awards[2].association,
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
                name: this.state.awards[2].name,
                date: value.substring(0, 10),
                association: this.state.awards[2].association,
              },
              this.state.awards[3],
            ],
          });
        }
      } else if (name === "awards[2]_association") {
        this.setState({
          awards: [
            this.state.awards[0],
            this.state.awards[1],
            {
              name: this.state.awards[2].name,
              date: this.state.awards[2].date,
              association: value,
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
              name: value,
              date: this.state.awards[3].date,
              association: this.state.awards[3].association,
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
              name: this.state.awards[3].name,
              date: value,
              association: this.state.awards[3].association,
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
                name: this.state.awards[3].name,
                date: value.substring(0, 4) + "." + value.substring(4, 5),
                association: this.state.awards[3].association,
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
                name: this.state.awards[3].name,
                date: value.substring(0, 4),
                association: this.state.awards[3].association,
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
                name: this.state.awards[3].name,
                date: value.substring(0, 7) + "." + value.substring(7, 8),
                association: this.state.awards[3].association,
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
                name: this.state.awards[3].name,
                date: value.substring(0, 7),
                association: this.state.awards[3].association,
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
                name: this.state.awards[3].name,
                date: value.substring(0, 10),
                association: this.state.awards[3].association,
              },
            ],
          });
        }
      } else if (name === "awards[3]_association") {
        this.setState({
          awards: [
            this.state.awards[0],
            this.state.awards[1],
            this.state.awards[2],
            {
              name: this.state.awards[3].name,
              date: this.state.awards[3].date,
              association: value,
            },
          ],
        });
      }
    } else if (name.startsWith("licences")) {
      if (name === "licences[0]_type") {
        this.setState({
          licences: [
            {
              type: value,
              name: this.state.licences[0].name,
              date: this.state.licences[0].date,
              grade: this.state.licences[0].grade,
              association: this.state.licences[0].association,
            },
            this.state.licences[1],
            this.state.licences[2],
            this.state.licences[3],
          ],
        });
      } else if (name === "licences[0]_name") {
        this.setState({
          licences: [
            {
              type: this.state.licences[0].type,
              name: value,
              date: this.state.licences[0].date,
              grade: this.state.licences[0].grade,
              association: this.state.licences[0].association,
            },
            this.state.licences[1],
            this.state.licences[2],
            this.state.licences[3],
          ],
        });
      } else if (name === "licences[0]_date") {
        await this.setState({
          licences: [
            {
              type: this.state.licences[0].type,
              name: this.state.licences[0].name,
              date: value,
              grade: this.state.licences[0].grade,
              association: this.state.licences[0].association,
            },
            this.state.licences[1],
            this.state.licences[2],
            this.state.licences[3],
          ],
        });
        this.state.tempValue = value;
        if (
          this.state.tempValue.length === 5 &&
          value.substring(4, 5) !== "."
        ) {
          this.setState({
            licences: [
              {
                type: this.state.licences[0].type,
                name: this.state.licences[0].name,
                date: value.substring(0, 4) + "." + value.substring(4, 5),

                grade: this.state.licences[0].grade,
                association: this.state.licences[0].association,
              },
              this.state.licences[1],
              this.state.licences[2],
              this.state.licences[3],
            ],
          });
        } else if (
          this.state.tempValue.length === 5 &&
          value.substring(4, 5) === "."
        ) {
          this.setState({
            licences: [
              {
                type: this.state.licences[0].type,
                name: this.state.licences[0].name,
                date: value.substring(0, 4),

                grade: this.state.licences[0].grade,
                association: this.state.licences[0].association,
              },
              this.state.licences[1],
              this.state.licences[2],
              this.state.licences[3],
            ],
          });
        } else if (
          this.state.tempValue.length === 8 &&
          value.substring(7, 8) !== "."
        ) {
          this.setState({
            licences: [
              {
                type: this.state.licences[0].type,
                name: this.state.licences[0].name,
                date: value.substring(0, 7) + "." + value.substring(7, 8),
                grade: this.state.licences[0].grade,
                association: this.state.licences[0].association,
              },
              this.state.licences[1],
              this.state.licences[2],
              this.state.licences[3],
            ],
          });
        } else if (
          this.state.tempValue.length === 8 &&
          value.substring(7, 8) === "."
        ) {
          this.setState({
            licences: [
              {
                type: this.state.licences[0].type,
                name: this.state.licences[0].name,
                date: value.substring(0, 7),

                grade: this.state.licences[0].grade,
                association: this.state.licences[0].association,
              },
              this.state.licences[1],
              this.state.licences[2],
              this.state.licences[3],
            ],
          });
        } else if (this.state.tempValue.length === 11) {
          this.setState({
            licences: [
              {
                type: this.state.licences[0].type,
                name: this.state.licences[0].name,
                date: value.substring(0, 10),
                grade: this.state.licences[0].grade,
                association: this.state.licences[0].association,
              },
              this.state.licences[1],
              this.state.licences[2],
              this.state.licences[3],
            ],
          });
        }
      } else if (name === "licences[0]_grade") {
        this.setState({
          licences: [
            {
              type: this.state.licences[0].type,
              name: this.state.licences[0].name,
              date: this.state.licences[0].date,
              grade: value,
              association: this.state.licences[0].association,
            },
            this.state.licences[1],
            this.state.licences[2],
            this.state.licences[3],
          ],
        });
      } else if (name === "licences[0]_association") {
        this.setState({
          licences: [
            {
              type: this.state.licences[0].type,
              name: this.state.licences[0].name,
              date: this.state.licences[0].date,
              grade: this.state.licences[0].grade,
              association: value,
            },
            this.state.licences[1],
            this.state.licences[2],
            this.state.licences[3],
          ],
        });
      } else if (name === "licences[1]_type") {
        this.setState({
          licences: [
            this.state.licences[0],
            {
              type: value,
              name: this.state.licences[1].name,
              date: this.state.licences[1].date,
              grade: this.state.licences[1].grade,
              association: this.state.licences[1].association,
            },
            this.state.licences[2],
            this.state.licences[3],
          ],
        });
      } else if (name === "licences[1]_name") {
        this.setState({
          licences: [
            this.state.licences[0],
            {
              type: this.state.licences[1].type,
              name: value,
              date: this.state.licences[1].date,
              grade: this.state.licences[1].grade,
              association: this.state.licences[1].association,
            },
            this.state.licences[2],
            this.state.licences[3],
          ],
        });
      } else if (name === "licences[1]_date") {
        await this.setState({
          licences: [
            this.state.licences[0],
            {
              type: this.state.licences[1].type,
              name: this.state.licences[1].name,
              date: value,
              grade: this.state.licences[1].grade,
              association: this.state.licences[1].association,
            },
            this.state.licences[2],
            this.state.licences[3],
          ],
        });
        this.state.tempValue = value;
        if (
          this.state.tempValue.length === 5 &&
          value.substring(4, 5) !== "."
        ) {
          this.setState({
            licences: [
              this.state.licences[0],
              {
                type: this.state.licences[1].type,
                name: this.state.licences[1].name,
                date: value.substring(0, 4) + "." + value.substring(4, 5),
                grade: this.state.licences[1].grade,
                association: this.state.licences[1].association,
              },
              this.state.licences[2],
              this.state.licences[3],
            ],
          });
        } else if (
          this.state.tempValue.length === 5 &&
          value.substring(4, 5) === "."
        ) {
          this.setState({
            licences: [
              this.state.licences[0],
              {
                type: this.state.licences[1].type,
                name: this.state.licences[1].name,
                date: value.substring(0, 4),
                grade: this.state.licences[1].grade,
                association: this.state.licences[1].association,
              },
              this.state.licences[2],
              this.state.licences[3],
            ],
          });
        } else if (
          this.state.tempValue.length === 8 &&
          value.substring(7, 8) !== "."
        ) {
          this.setState({
            licences: [
              this.state.licences[0],
              {
                type: this.state.licences[1].type,
                name: this.state.licences[1].name,
                date: value.substring(0, 7) + "." + value.substring(7, 8),
                grade: this.state.licences[1].grade,
                association: this.state.licences[1].association,
              },
              this.state.licences[2],
              this.state.licences[3],
            ],
          });
        } else if (
          this.state.tempValue.length === 8 &&
          value.substring(7, 8) === "."
        ) {
          this.setState({
            licences: [
              this.state.licences[0],
              {
                type: this.state.licences[1].type,
                name: this.state.licences[1].name,
                date: value.substring(0, 7),
                grade: this.state.licences[1].grade,
                association: this.state.licences[1].association,
              },
              this.state.licences[2],
              this.state.licences[3],
            ],
          });
        } else if (this.state.tempValue.length === 11) {
          this.setState({
            licences: [
              this.state.licences[0],
              {
                type: this.state.licences[1].type,
                name: this.state.licences[1].name,
                date: value.substring(0, 10),
                grade: this.state.licences[1].grade,
                association: this.state.licences[1].association,
              },
              this.state.licences[2],
              this.state.licences[3],
            ],
          });
        }
      } else if (name === "licences[1]_grade") {
        this.setState({
          licences: [
            this.state.licences[0],
            {
              type: this.state.licences[1].type,
              name: this.state.licences[1].name,
              date: this.state.licences[1].date,
              grade: value,
              association: this.state.licences[1].association,
            },
            this.state.licences[2],
            this.state.licences[3],
          ],
        });
      } else if (name === "licences[1]_association") {
        this.setState({
          licences: [
            this.state.licences[0],
            {
              type: this.state.licences[1].type,
              name: this.state.licences[1].name,
              date: this.state.licences[1].date,
              grade: this.state.licences[1].grade,
              association: value,
            },
            this.state.licences[2],
            this.state.licences[3],
          ],
        });
      } else if (name === "licences[2]_type") {
        this.setState({
          licences: [
            this.state.licences[0],
            this.state.licences[1],
            {
              type: value,
              name: this.state.licences[2].name,
              date: this.state.licences[2].date,
              grade: this.state.licences[2].grade,
              association: this.state.licences[2].association,
            },
            this.state.licences[3],
          ],
        });
      } else if (name === "licences[2]_name") {
        this.setState({
          licences: [
            this.state.licences[0],
            this.state.licences[1],
            {
              type: this.state.licences[2].type,
              name: value,
              date: this.state.licences[2].date,
              grade: this.state.licences[2].grade,
              association: this.state.licences[2].association,
            },
            this.state.licences[3],
          ],
        });
      } else if (name === "licences[2]_date") {
        await this.setState({
          licences: [
            this.state.licences[0],
            this.state.licences[1],
            {
              type: this.state.licences[2].type,
              name: this.state.licences[2].name,
              date: value,
              grade: this.state.licences[2].grade,
              association: this.state.licences[2].association,
            },
            this.state.licences[3],
          ],
        });
        this.state.tempValue = value;
        if (
          this.state.tempValue.length === 5 &&
          value.substring(4, 5) !== "."
        ) {
          this.setState({
            licences: [
              this.state.licences[0],
              this.state.licences[1],
              {
                type: this.state.licences[2].type,
                name: this.state.licences[2].name,
                date: value.substring(0, 4) + "." + value.substring(4, 5),
                grade: this.state.licences[2].grade,
                association: this.state.licences[2].association,
              },
              this.state.licences[3],
            ],
          });
        } else if (
          this.state.tempValue.length === 5 &&
          value.substring(4, 5) === "."
        ) {
          this.setState({
            licences: [
              this.state.licences[0],
              this.state.licences[1],
              {
                type: this.state.licences[2].type,
                name: this.state.licences[2].name,
                date: value.substring(0, 4),
                grade: this.state.licences[2].grade,
                association: this.state.licences[2].association,
              },
              this.state.licences[3],
            ],
          });
        } else if (
          this.state.tempValue.length === 8 &&
          value.substring(7, 8) !== "."
        ) {
          this.setState({
            licences: [
              this.state.licences[0],
              this.state.licences[1],
              {
                type: this.state.licences[2].type,
                name: this.state.licences[2].name,
                date: value.substring(0, 7) + "." + value.substring(7, 8),
                grade: this.state.licences[2].grade,
                association: this.state.licences[2].association,
              },
              this.state.licences[3],
            ],
          });
        } else if (
          this.state.tempValue.length === 8 &&
          value.substring(7, 8) === "."
        ) {
          this.setState({
            licences: [
              this.state.licences[0],
              this.state.licences[1],
              {
                type: this.state.licences[2].type,
                name: this.state.licences[2].name,
                date: value.substring(0, 7),
                grade: this.state.licences[2].grade,
                association: this.state.licences[2].association,
              },
              this.state.licences[3],
            ],
          });
        } else if (this.state.tempValue.length === 11) {
          this.setState({
            licences: [
              this.state.licences[0],
              this.state.licences[1],
              {
                type: this.state.licences[2].type,
                name: this.state.licences[2].name,
                date: value.substring(0, 10),
                grade: this.state.licences[2].grade,
                association: this.state.licences[2].association,
              },
              this.state.licences[3],
            ],
          });
        }
      } else if (name === "licences[2]_grade") {
        this.setState({
          licences: [
            this.state.licences[0],
            this.state.licences[1],
            {
              type: this.state.licences[2].type,
              name: this.state.licences[2].name,
              date: this.state.licences[2].date,
              grade: value,
              association: this.state.licences[2].association,
            },
            this.state.licences[3],
          ],
        });
      } else if (name === "licences[2]_association") {
        this.setState({
          licences: [
            this.state.licences[0],
            this.state.licences[1],
            {
              type: this.state.licences[2].type,
              name: this.state.licences[2].name,
              date: this.state.licences[2].date,
              grade: this.state.licences[2].grade,
              association: value,
            },
            this.state.licences[3],
          ],
        });
      } else if (name === "licences[3]_type") {
        this.setState({
          licences: [
            this.state.licences[0],
            this.state.licences[1],
            this.state.licences[2],
            {
              type: value,
              name: this.state.licences[3].name,
              date: this.state.licences[3].date,
              grade: this.state.licences[3].grade,
              association: this.state.licences[3].association,
            },
          ],
        });
      } else if (name === "licences[3]_name") {
        this.setState({
          licences: [
            this.state.licences[0],
            this.state.licences[1],
            this.state.licences[2],
            {
              type: this.state.licences[3].type,
              name: value,
              date: this.state.licences[3].date,
              grade: this.state.licences[3].grade,
              association: this.state.licences[3].association,
            },
          ],
        });
      } else if (name === "licences[3]_date") {
        await this.setState({
          licences: [
            this.state.licences[0],
            this.state.licences[1],
            this.state.licences[2],
            {
              type: this.state.licences[3].type,
              name: this.state.licences[3].name,
              date: value,
              grade: this.state.licences[3].grade,
              association: this.state.licences[3].association,
            },
          ],
        });
        this.state.tempValue = value;
        if (
          this.state.tempValue.length === 5 &&
          value.substring(4, 5) !== "."
        ) {
          this.setState({
            licences: [
              this.state.licences[0],
              this.state.licences[1],
              this.state.licences[2],
              {
                type: this.state.licences[3].type,
                name: this.state.licences[3].name,
                date: value.substring(0, 4) + "." + value.substring(4, 5),
                grade: this.state.licences[3].grade,
                association: this.state.licences[3].association,
              },
            ],
          });
        } else if (
          this.state.tempValue.length === 5 &&
          value.substring(4, 5) === "."
        ) {
          this.setState({
            licences: [
              this.state.licences[0],
              this.state.licences[1],
              this.state.licences[2],
              {
                type: this.state.licences[3].type,
                name: this.state.licences[3].name,
                date: value.substring(0, 4),
                grade: this.state.licences[3].grade,
                association: this.state.licences[3].association,
              },
            ],
          });
        } else if (
          this.state.tempValue.length === 8 &&
          value.substring(7, 8) !== "."
        ) {
          this.setState({
            licences: [
              this.state.licences[0],
              this.state.licences[1],
              this.state.licences[2],
              {
                type: this.state.licences[3].type,
                name: this.state.licences[3].name,
                date: value.substring(0, 7) + "." + value.substring(7, 8),
                grade: this.state.licences[3].grade,
                association: this.state.licences[3].association,
              },
            ],
          });
        } else if (
          this.state.tempValue.length === 8 &&
          value.substring(7, 8) === "."
        ) {
          this.setState({
            licences: [
              this.state.licences[0],
              this.state.licences[1],
              this.state.licences[2],
              {
                type: this.state.licences[3].type,
                name: this.state.licences[3].name,
                date: value.substring(0, 7),
                grade: this.state.licences[3].grade,
                association: this.state.licences[3].association,
              },
            ],
          });
        } else if (this.state.tempValue.length === 11) {
          this.setState({
            licences: [
              this.state.licences[0],
              this.state.licences[1],
              this.state.licences[2],
              {
                type: this.state.licences[3].type,
                name: this.state.licences[3].name,
                date: value.substring(0, 10),
                grade: this.state.licences[3].grade,
                association: this.state.licences[3].association,
              },
            ],
          });
        }
      } else if (name === "licences[3]_grade") {
        this.setState({
          licences: [
            this.state.licences[0],
            this.state.licences[1],
            this.state.licences[2],
            {
              type: this.state.licences[3].type,
              name: this.state.licences[3].name,
              date: this.state.licences[3].date,
              grade: value,
              association: this.state.licences[3].association,
            },
          ],
        });
      } else if (name === "licences[3]_association") {
        this.setState({
          licences: [
            this.state.licences[0],
            this.state.licences[1],
            this.state.licences[2],
            {
              type: this.state.licences[3].type,
              name: this.state.licences[3].name,
              date: this.state.licences[3].date,
              grade: this.state.licences[3].grade,
              association: value,
            },
          ],
        });
      }
    }
  };
  handleCareerMinus = (event: React.FormEvent) => {
    if (this.state.careerLen > 0) {
      var newCareers = this.state.careers;
      newCareers.pop();
      this.setState({ careers: newCareers });
      this.setState({ careerLen: this.state.careerLen - 1 });
    }
  };
  handleCareerAdd = (event: React.FormEvent) => {
    if (this.state.careerLen < 4) {
      var newCareers = this.state.careers;
      newCareers.push({
        name: "",
        position: "",
        duration: "",
        description: "",
      });
      this.setState({ careers: newCareers });
      this.setState({ careerLen: this.state.careerLen + 1 });
    }
  };
  handleAwardMinus = (event: React.FormEvent) => {
    if (this.state.awardLen > 0) {
      var newAwards = this.state.awards;
      newAwards.pop();
      this.setState({ awards: newAwards });
      this.setState({ awardLen: this.state.awardLen - 1 });
    }
  };
  handleAwardAdd = (event: React.FormEvent) => {
    if (this.state.awardLen < 4) {
      var newAwards = this.state.awards;
      newAwards.push({
        name: "",
        date: "",
        association: "",
      });
      this.setState({ awards: newAwards });
      this.setState({ awardLen: this.state.awardLen + 1 });
    }
  };
  handleClassMinus = (event: React.FormEvent) => {
    if (this.state.licenceLen > 0) {
      var newLicences = this.state.licences;
      newLicences.pop();
      this.setState({ licences: newLicences });
      this.setState({ licenceLen: this.state.licenceLen - 1 });
    }
  };
  handleClassAdd = (event: React.FormEvent) => {
    if (this.state.licenceLen < 4) {
      var newLicences = this.state.licences;
      newLicences.push({
        type: "",
        name: "",
        date: "",
        grade: "",
        association: "",
      });
      this.setState({ licences: newLicences });
      this.setState({ licenceLen: this.state.licenceLen + 1 });
    }
  };
  useStyles = makeStyles((theme: Theme) =>
    createStyles({
      input8: {
        "& > *": {
          marginTop: "2vh",
          width: "15vw",
        },
      },
      input10: {
        "& > *": {
          marginTop: "2vh",
          width: "17vw",
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
      licences,
      licenceLen,
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
        submitAxios={this.submitAxios}
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
        licences={licences}
        licenceLen={licenceLen}
      />
    );
  }
}
