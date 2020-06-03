import React from "react";
import PortfolioPresenter from "./PortfolioPresenter3";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import axios from "axios";

interface PortfolioIState {
  name: string;
  projectLen: number;
  projectName1: string;
  projectTerm1: string;
  projectDesc1: string;
  projectStack1: string;
  projectDo11: string;
  projectDo12: string;
  projectDo13: string;
  projectUrl1: string;
  error1: boolean;
  frontend1: boolean;
  backend1: boolean;
  fullstack1: boolean;
  android1: boolean;
  IOS1: boolean;
  game1: boolean;
  ARVR1: boolean;
  block1: boolean;
  machine1: boolean;
  data1: boolean;
  etc1: boolean;
  projectName2: string;
  projectTerm2: string;
  projectDesc2: string;
  projectStack2: string;
  projectDo21: string;
  projectDo22: string;
  projectDo23: string;
  projectUrl2: string;
  error2: boolean;
  frontend2: boolean;
  backend2: boolean;
  fullstack2: boolean;
  android2: boolean;
  IOS2: boolean;
  game2: boolean;
  ARVR2: boolean;
  block2: boolean;
  machine2: boolean;
  data2: boolean;
  etc2: boolean;
  projectName3: string;
  projectTerm3: string;
  projectDesc3: string;
  projectStack3: string;
  projectDo31: string;
  projectDo32: string;
  projectDo33: string;
  projectUrl3: string;
  error3: boolean;
  frontend3: boolean;
  backend3: boolean;
  fullstack3: boolean;
  android3: boolean;
  IOS3: boolean;
  game3: boolean;
  ARVR3: boolean;
  block3: boolean;
  machine3: boolean;
  data3: boolean;
  etc3: boolean;
  projectName4: string;
  projectTerm4: string;
  projectDesc4: string;
  projectStack4: string;
  projectDo41: string;
  projectDo42: string;
  projectDo43: string;
  projectUrl4: string;
  error4: boolean;
  frontend4: boolean;
  backend4: boolean;
  fullstack4: boolean;
  android4: boolean;
  IOS4: boolean;
  game4: boolean;
  ARVR4: boolean;
  block4: boolean;
  machine4: boolean;
  data4: boolean;
  etc4: boolean;
}
export default class extends React.Component<{}, PortfolioIState> {
  state = {
    name: "음영현",
    projectLen: 1,
    projectName1: "",
    projectTerm1: "",
    projectDesc1: "",
    projectStack1: "",
    projectDo11: "",
    projectDo12: "",
    projectDo13: "",
    projectUrl1: "",
    error1: false,
    frontend1: false,
    backend1: false,
    fullstack1: false,
    android1: false,
    IOS1: false,
    game1: false,
    ARVR1: false,
    block1: false,
    machine1: false,
    data1: false,
    etc1: false,
    projectName2: "",
    projectTerm2: "",
    projectDesc2: "",
    projectStack2: "",
    projectDo21: "",
    projectDo22: "",
    projectDo23: "",
    projectUrl2: "",
    error2: false,
    frontend2: false,
    backend2: false,
    fullstack2: false,
    android2: false,
    IOS2: false,
    game2: false,
    ARVR2: false,
    block2: false,
    machine2: false,
    data2: false,
    etc2: false,
    projectName3: "",
    projectTerm3: "",
    projectDesc3: "",
    projectStack3: "",
    projectDo31: "",
    projectDo32: "",
    projectDo33: "",
    projectUrl3: "",
    error3: false,
    frontend3: false,
    backend3: false,
    fullstack3: false,
    android3: false,
    IOS3: false,
    game3: false,
    ARVR3: false,
    block3: false,
    machine3: false,
    data3: false,
    etc3: false,
    projectName4: "",
    projectTerm4: "",
    projectDesc4: "",
    projectStack4: "",
    projectDo41: "",
    projectDo42: "",
    projectDo43: "",
    projectUrl4: "",
    error4: false,
    frontend4: false,
    backend4: false,
    fullstack4: false,
    android4: false,
    IOS4: false,
    game4: false,
    ARVR4: false,
    block4: false,
    machine4: false,
    data4: false,
    etc4: false,
  };

  useStyles = makeStyles((theme: Theme) =>
    createStyles({
      AMButton: {
        "& > *": {
          margin: theme.spacing(1),
          width: "36px",
          height: "36px",
        },
      },
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
      pageButtonRight: {
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
      projectName: {
        "& > *": {
          margin: theme.spacing(1),
        },
      },
      projectStack: {
        "& > *": {
          margin: theme.spacing(1),
          width: "20em",
        },
      },
      projectTerm: {
        "& > *": {
          margin: theme.spacing(1),
        },
      },
      projectDesc: {
        "& > *": {
          margin: theme.spacing(1),
        },
      },
      projectDo: {
        "& > *": {
          display: "inline-block",
          margin: theme.spacing(1),
          width: "18em",
        },
      },
      feature: {
        display: "inline-block",
        width: "21vw",
      },
      formControl: {
        display: "inline-block",
        margin: theme.spacing(1),
        width: "80vw",
      },
      label: {
        color: "#020202",
      },
    })
  );
  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };
  handleMinus = (event: React.FormEvent) => {
    if (this.state.projectLen > 1) {
      this.setState({ projectLen: this.state.projectLen - 1 });
    }
  };
  handleAdd = (event: React.FormEvent) => {
    if (this.state.projectLen < 4) {
      this.setState({ projectLen: this.state.projectLen + 1 });
    }
  };

  handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    await this.setState({
      ...this.state,
      [event.target.name]: event.target.checked,
    });
    this.setState({
      error1:
        [
          this.state.frontend1,
          this.state.backend1,
          this.state.fullstack1,
          this.state.android1,
          this.state.IOS1,
          this.state.game1,
          this.state.ARVR1,
          this.state.block1,
          this.state.machine1,
          this.state.data1,
          this.state.etc1,
        ].filter(v => v).length === 0 ||
        [
          this.state.frontend1,
          this.state.backend1,
          this.state.fullstack1,
          this.state.android1,
          this.state.IOS1,
          this.state.game1,
          this.state.ARVR1,
          this.state.block1,
          this.state.machine1,
          this.state.data1,
          this.state.etc1,
        ].filter(v => v).length > 3,
      error2:
        [
          this.state.frontend2,
          this.state.backend2,
          this.state.fullstack2,
          this.state.android2,
          this.state.IOS2,
          this.state.game2,
          this.state.ARVR2,
          this.state.block2,
          this.state.machine2,
          this.state.data2,
          this.state.etc2,
        ].filter(v => v).length === 0 ||
        [
          this.state.frontend2,
          this.state.backend2,
          this.state.fullstack2,
          this.state.android2,
          this.state.IOS2,
          this.state.game2,
          this.state.ARVR2,
          this.state.block2,
          this.state.machine2,
          this.state.data2,
          this.state.etc2,
        ].filter(v => v).length > 3,
      error3:
        [
          this.state.frontend3,
          this.state.backend3,
          this.state.fullstack3,
          this.state.android3,
          this.state.IOS3,
          this.state.game3,
          this.state.ARVR3,
          this.state.block3,
          this.state.machine3,
          this.state.data3,
          this.state.etc3,
        ].filter(v => v).length === 0 ||
        [
          this.state.frontend3,
          this.state.backend3,
          this.state.fullstack3,
          this.state.android3,
          this.state.IOS3,
          this.state.game3,
          this.state.ARVR3,
          this.state.block3,
          this.state.machine3,
          this.state.data3,
          this.state.etc3,
        ].filter(v => v).length > 3,
      error4:
        [
          this.state.frontend4,
          this.state.backend4,
          this.state.fullstack4,
          this.state.android4,
          this.state.IOS4,
          this.state.game4,
          this.state.ARVR4,
          this.state.block4,
          this.state.machine4,
          this.state.data4,
          this.state.etc4,
        ].filter(v => v).length === 0 ||
        [
          this.state.frontend4,
          this.state.backend4,
          this.state.fullstack4,
          this.state.android4,
          this.state.IOS4,
          this.state.game4,
          this.state.ARVR4,
          this.state.block4,
          this.state.machine4,
          this.state.data4,
          this.state.etc4,
        ].filter(v => v).length > 3,
    });
  };

  updateTerm = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value, name },
    } = event;
    if (name === "projectName1") {
      this.setState({ projectName1: value });
    } else if (name === "projectTerm1") {
      await this.setState({ projectTerm1: value });
      if (
        this.state.projectTerm1.length === 5 &&
        value.substring(4, 5) !== "."
      ) {
        this.setState({
          projectTerm1: value.substring(0, 4) + "." + value.substring(4, 5),
        });
      } else if (
        this.state.projectTerm1.length === 5 &&
        value.substring(4, 5) === "."
      ) {
        this.setState({
          projectTerm1: value.substring(0, 4),
        });
      } else if (
        this.state.projectTerm1.length === 8 &&
        value.substring(7, 8) !== " "
      ) {
        this.setState({
          projectTerm1: value.substring(0, 7) + " - " + value.substring(7, 8),
        });
      } else if (
        this.state.projectTerm1.length === 10 &&
        value.substring(9, 10) === " "
      ) {
        this.setState({
          projectTerm1: value.substring(0, 7),
        });
      } else if (
        this.state.projectTerm1.length === 15 &&
        value.substring(14, 15) !== "."
      ) {
        this.setState({
          projectTerm1: value.substring(0, 14) + "." + value.substring(14, 15),
        });
      } else if (
        this.state.projectTerm1.length === 15 &&
        value.substring(14, 15) === "."
      ) {
        this.setState({ projectTerm1: value.substring(0, 14) });
      } else if (this.state.projectTerm1.length > 17) {
        this.setState({ projectTerm1: value.substring(0, 17) });
      }
    } else if (name === "projectDesc1") {
      this.setState({ projectDesc1: value });
    } else if (name === "projectStack1") {
      this.setState({ projectStack1: value });
    } else if (name === "projectDo11") {
      this.setState({ projectDo11: value });
    } else if (name === "projectDo12") {
      this.setState({ projectDo12: value });
    } else if (name === "projectDo13") {
      this.setState({ projectDo13: value });
    } else if (name === "projectName2") {
      this.setState({ projectName2: value });
    } else if (name === "projectTerm2") {
      await this.setState({ projectTerm2: value });
      if (
        this.state.projectTerm2.length === 5 &&
        value.substring(4, 5) !== "."
      ) {
        this.setState({
          projectTerm2: value.substring(0, 4) + "." + value.substring(4, 5),
        });
      } else if (
        this.state.projectTerm2.length === 5 &&
        value.substring(4, 5) === "."
      ) {
        this.setState({
          projectTerm2: value.substring(0, 4),
        });
      } else if (
        this.state.projectTerm2.length === 8 &&
        value.substring(7, 8) !== " "
      ) {
        this.setState({
          projectTerm2: value.substring(0, 7) + " - " + value.substring(7, 8),
        });
      } else if (
        this.state.projectTerm2.length === 10 &&
        value.substring(9, 10) === " "
      ) {
        this.setState({
          projectTerm2: value.substring(0, 7),
        });
      } else if (
        this.state.projectTerm2.length === 15 &&
        value.substring(14, 15) !== "."
      ) {
        this.setState({
          projectTerm2: value.substring(0, 14) + "." + value.substring(14, 15),
        });
      } else if (
        this.state.projectTerm2.length === 15 &&
        value.substring(14, 15) === "."
      ) {
        this.setState({ projectTerm2: value.substring(0, 14) });
      } else if (this.state.projectTerm2.length > 17) {
        this.setState({ projectTerm2: value.substring(0, 17) });
      }
    } else if (name === "projectDesc2") {
      this.setState({ projectDesc2: value });
    } else if (name === "projectStack2") {
      this.setState({ projectStack2: value });
    } else if (name === "projectDo21") {
      this.setState({ projectDo21: value });
    } else if (name === "projectDo22") {
      this.setState({ projectDo22: value });
    } else if (name === "projectDo23") {
      this.setState({ projectDo23: value });
    } else if (name === "projectName3") {
      this.setState({ projectName3: value });
    } else if (name === "projectTerm3") {
      await this.setState({ projectTerm3: value });
      if (
        this.state.projectTerm3.length === 5 &&
        value.substring(4, 5) !== "."
      ) {
        this.setState({
          projectTerm3: value.substring(0, 4) + "." + value.substring(4, 5),
        });
      } else if (
        this.state.projectTerm3.length === 5 &&
        value.substring(4, 5) === "."
      ) {
        this.setState({
          projectTerm3: value.substring(0, 4),
        });
      } else if (
        this.state.projectTerm3.length === 8 &&
        value.substring(7, 8) !== " "
      ) {
        this.setState({
          projectTerm3: value.substring(0, 7) + " - " + value.substring(7, 8),
        });
      } else if (
        this.state.projectTerm3.length === 10 &&
        value.substring(9, 10) === " "
      ) {
        this.setState({
          projectTerm3: value.substring(0, 7),
        });
      } else if (
        this.state.projectTerm3.length === 15 &&
        value.substring(14, 15) !== "."
      ) {
        this.setState({
          projectTerm3: value.substring(0, 14) + "." + value.substring(14, 15),
        });
      } else if (
        this.state.projectTerm3.length === 15 &&
        value.substring(14, 15) === "."
      ) {
        this.setState({ projectTerm3: value.substring(0, 14) });
      } else if (this.state.projectTerm3.length > 17) {
        this.setState({ projectTerm3: value.substring(0, 17) });
      }
    } else if (name === "projectDesc3") {
      this.setState({ projectDesc3: value });
    } else if (name === "projectStack3") {
      this.setState({ projectStack3: value });
    } else if (name === "projectDo31") {
      this.setState({ projectDo31: value });
    } else if (name === "projectDo32") {
      this.setState({ projectDo32: value });
    } else if (name === "projectDo33") {
      this.setState({ projectDo33: value });
    } else if (name === "projectName4") {
      this.setState({ projectName4: value });
    } else if (name === "projectTerm4") {
      await this.setState({ projectTerm4: value });
      if (
        this.state.projectTerm4.length === 5 &&
        value.substring(4, 5) !== "."
      ) {
        this.setState({
          projectTerm4: value.substring(0, 4) + "." + value.substring(4, 5),
        });
      } else if (
        this.state.projectTerm4.length === 5 &&
        value.substring(4, 5) === "."
      ) {
        this.setState({
          projectTerm4: value.substring(0, 4),
        });
      } else if (
        this.state.projectTerm4.length === 8 &&
        value.substring(7, 8) !== " "
      ) {
        this.setState({
          projectTerm4: value.substring(0, 7) + " - " + value.substring(7, 8),
        });
      } else if (
        this.state.projectTerm4.length === 10 &&
        value.substring(9, 10) === " "
      ) {
        this.setState({
          projectTerm4: value.substring(0, 7),
        });
      } else if (
        this.state.projectTerm4.length === 15 &&
        value.substring(14, 15) !== "."
      ) {
        this.setState({
          projectTerm4: value.substring(0, 14) + "." + value.substring(14, 15),
        });
      } else if (
        this.state.projectTerm4.length === 15 &&
        value.substring(14, 15) === "."
      ) {
        this.setState({ projectTerm4: value.substring(0, 14) });
      } else if (this.state.projectTerm4.length > 17) {
        this.setState({ projectTerm4: value.substring(0, 17) });
      }
    } else if (name === "projectDesc4") {
      this.setState({ projectDesc4: value });
    } else if (name === "projectStack4") {
      this.setState({ projectStack4: value });
    } else if (name === "projectDo41") {
      this.setState({ projectDo41: value });
    } else if (name === "projectDo42") {
      this.setState({ projectDo42: value });
    } else if (name === "projectDo43") {
      this.setState({ projectDo43: value });
    } else if (name === "projectUrl1") {
      this.setState({ projectUrl1: value });
    } else if (name === "projectUrl2") {
      this.setState({ projectUrl2: value });
    } else if (name === "projectUrl3") {
      this.setState({ projectUrl3: value });
    } else if (name === "projectUrl4") {
      this.setState({ projectUrl4: value });
    }
  };
  async componentDidMount() {
    window.scrollTo(0, 0);
    var link = window.location.href.split("/");
    if (
      window.sessionStorage.getItem("portfolio_list") !== undefined &&
      window.sessionStorage
        .getItem("portfolio_list")
        ?.includes(link[link.length - 1])
    ) {
    } else {
      window.location.href = "../../main";
    }
    console.log(window.sessionStorage.getItem("projects"));
  }

  handleBeforeButton = async (event: React.FormEvent) => {
    var link = window.location.href.split("/");
    var portfolio_id = parseInt(link[link.length - 1]);
    window.location.href = `../2/${portfolio_id}`;
  };
  handleNextButton = async (event: React.FormEvent) => {
    var projects = [];
    var roles = [];
    await roles.push(this.state.projectDo11);
    await roles.push(this.state.projectDo12);
    await roles.push(this.state.projectDo13);
    var project1 = await {
      name: this.state.projectName1,
      period: this.state.projectTerm1,
      description: this.state.projectDesc1,
      roles,
      stacks: [this.state.projectStack1],
      url: this.state.projectUrl1,
    };
    projects.push(project1);

    if (this.state.projectLen > 1 && this.state.projectName2 !== "") {
      var roles2 = [];
      await roles2.push(this.state.projectDo21);
      await roles2.push(this.state.projectDo22);
      await roles2.push(this.state.projectDo23);

      var project2 = await {
        name: this.state.projectName2,
        period: this.state.projectTerm2,
        description: this.state.projectDesc2,
        roles: roles2,
        stacks: this.state.projectStack2,
        url: this.state.projectUrl2,
      };
      projects.push(project2);
    }
    if (this.state.projectLen > 2 && this.state.projectName3 !== "") {
      var roles3 = [];
      await roles3.push(this.state.projectDo31);
      await roles3.push(this.state.projectDo32);
      await roles3.push(this.state.projectDo33);

      var project3 = await {
        name: this.state.projectName3,
        period: this.state.projectTerm3,
        description: this.state.projectDesc3,
        roles: roles3,
        stacks: this.state.projectStack3,
        url: this.state.projectUrl3,
      };
      projects.push(project3);
    }
    if (this.state.projectLen > 3 && this.state.projectName4 !== "") {
      var roles4 = [];
      await roles4.push(this.state.projectDo41);
      await roles4.push(this.state.projectDo42);
      await roles4.push(this.state.projectDo43);

      var project4 = await {
        name: this.state.projectName4,
        period: this.state.projectTerm4,
        description: this.state.projectDesc4,
        roles: roles4,
        stacks: this.state.projectStack4,
        url: this.state.projectUrl4,
      };
      projects.push(project4);
    }
    if (this.state.projectName1 !== "") {
      window.sessionStorage.setItem(
        "portfolio_3_projects",
        JSON.stringify(projects)
      );
      var link = window.location.href.split("/");
      var portfolio_id = parseInt(link[link.length - 1]);

      //put 신호 넣기
      axios
        .put(`http://13.125.238.102:8080/api/portfolio/${portfolio_id}`, {
          name: window.sessionStorage.getItem("portfolio_name"),
          birth: window.sessionStorage.getItem("portfolio_birth"),
          email: window.sessionStorage.getItem("portfolio_email"),
          characters: window.sessionStorage.getItem("portfolio_feature_list"),
          projects: window.sessionStorage.getItem("portfolio_3_projects"),
          skills: window.sessionStorage.getItem("portfolio_2_skills"),
          user_email: window.sessionStorage.getItem("user_email"),
        })
        .then(response => {
          console.log("put신호 넣어봄");
        });
    }
    //result 에서 get 정보 받고 대입하기                                                                                                 ````````````
    // var portfolio_id = parseInt(window.location.href.substring(39));
    // window.location.href = `http://localhost:3000/plus/portfolio/result/${portfolio_id}`;
  };

  render() {
    const {
      name,
      projectLen,
      projectName1,
      projectTerm1,
      projectDesc1,
      projectStack1,
      projectDo11,
      projectDo12,
      projectDo13,
      projectUrl1,
      error1,
      frontend1,
      backend1,
      fullstack1,
      android1,
      IOS1,
      game1,
      ARVR1,
      block1,
      machine1,
      data1,
      etc1,
      projectName2,
      projectTerm2,
      projectDesc2,
      projectStack2,
      projectDo21,
      projectDo22,
      projectDo23,
      projectUrl2,
      error2,
      frontend2,
      backend2,
      fullstack2,
      android2,
      IOS2,
      game2,
      ARVR2,
      block2,
      machine2,
      data2,
      etc2,
      projectName3,
      projectTerm3,
      projectDesc3,
      projectStack3,
      projectDo31,
      projectDo32,
      projectDo33,
      projectUrl3,
      error3,
      frontend3,
      backend3,
      fullstack3,
      android3,
      IOS3,
      game3,
      ARVR3,
      block3,
      machine3,
      data3,
      etc3,
      projectName4,
      projectTerm4,
      projectDesc4,
      projectStack4,
      projectDo41,
      projectDo42,
      projectDo43,
      projectUrl4,
      error4,
      frontend4,
      backend4,
      fullstack4,
      android4,
      IOS4,
      game4,
      ARVR4,
      block4,
      machine4,
      data4,
      etc4,
    } = this.state;
    return (
      <PortfolioPresenter
        name={name}
        projectLen={projectLen}
        projectName1={projectName1}
        projectTerm1={projectTerm1}
        projectDesc1={projectDesc1}
        projectStack1={projectStack1}
        projectDo11={projectDo11}
        projectDo12={projectDo12}
        projectDo13={projectDo13}
        projectUrl1={projectUrl1}
        error1={error1}
        frontend1={frontend1}
        backend1={backend1}
        fullstack1={fullstack1}
        android1={android1}
        IOS1={IOS1}
        game1={game1}
        ARVR1={ARVR1}
        block1={block1}
        machine1={machine1}
        data1={data1}
        etc1={etc1}
        projectName2={projectName2}
        projectTerm2={projectTerm2}
        projectDesc2={projectDesc2}
        projectStack2={projectStack2}
        projectDo21={projectDo21}
        projectDo22={projectDo22}
        projectDo23={projectDo23}
        projectUrl2={projectUrl2}
        error2={error2}
        frontend2={frontend2}
        backend2={backend2}
        fullstack2={fullstack2}
        android2={android2}
        IOS2={IOS2}
        game2={game2}
        ARVR2={ARVR2}
        block2={block2}
        machine2={machine2}
        data2={data2}
        etc2={etc2}
        projectName3={projectName3}
        projectTerm3={projectTerm3}
        projectDesc3={projectDesc3}
        projectStack3={projectStack3}
        projectDo31={projectDo31}
        projectDo32={projectDo32}
        projectDo33={projectDo33}
        projectUrl3={projectUrl3}
        error3={error3}
        frontend3={frontend3}
        backend3={backend3}
        fullstack3={fullstack3}
        android3={android3}
        IOS3={IOS3}
        game3={game3}
        ARVR3={ARVR3}
        block3={block3}
        machine3={machine3}
        data3={data3}
        etc3={etc3}
        projectName4={projectName4}
        projectTerm4={projectTerm4}
        projectDesc4={projectDesc4}
        projectStack4={projectStack4}
        projectDo41={projectDo41}
        projectDo42={projectDo42}
        projectDo43={projectDo43}
        projectUrl4={projectUrl4}
        error4={error4}
        frontend4={frontend4}
        backend4={backend4}
        fullstack4={fullstack4}
        android4={android4}
        IOS4={IOS4}
        game4={game4}
        ARVR4={ARVR4}
        block4={block4}
        machine4={machine4}
        data4={data4}
        etc4={etc4}
        useStyles={this.useStyles}
        handleSubmit={this.handleSubmit}
        handleAdd={this.handleAdd}
        handleMinus={this.handleMinus}
        updateTerm={this.updateTerm}
        handleChange={this.handleChange}
        handleBeforeButton={this.handleBeforeButton}
        handleNextButton={this.handleNextButton}
      />
    );
  }
}
