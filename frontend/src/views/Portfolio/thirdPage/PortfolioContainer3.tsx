import React from "react";
import PortfolioPresenter from "./PortfolioPresenter3";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

interface PortfolioIState {
  name: string;
  projectLen: number;
  projectName1: string;
  projectTerm1: string;
  projectDesc1: string;
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
    name: "음메리카노",
    projectLen: 1,
    projectName1: "",
    projectTerm1: "",
    projectDesc1: "",
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
  componentDidMount() {
    window.scrollTo(0, 0);
  }

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
          width: "40ch",
        },
      },
      projectTerm: {
        "& > *": {
          margin: theme.spacing(1),
          width: "40ch",
        },
      },
      projectDesc: {
        "& > *": {
          margin: theme.spacing(1),
        },
      },
      feature: {
        display: "inline-block",
        width: "21vw",
      },
      formControl: {
        display: "inline-block",
        margin: theme.spacing(2),
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
    }
  };

  render() {
    const {
      name,
      projectLen,
      projectName1,
      projectTerm1,
      projectDesc1,
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
      />
    );
  }
}
