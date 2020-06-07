import React from "react";
import PortfolioResultPresenter from "./PortfolioResultPresenter";
import Axios from "axios";

interface PortfolioDTO {
  name: string;
  birth: string;
  email: string;
  phone: string;
  characters: string[];
  projects: Array<ProjectDTO>;
  skills: Array<SkillDTO>;
  project_len: number;
  profile_image_url: string;
}
interface SkillDTO {
  description: string;
  name: string;
  percentage: number;
}
interface ProjectDTO {
  description: string;
  name: string;
  period: string;
  roles: Array<string>;
  my_stacks: Array<String>;
  stacks: string;
  url: string;
  big_image_url: string;
  small_image_url: string;
}

export default class extends React.Component<{}, PortfolioDTO> {
  state = {
    name: "",
    birth: "",
    email: "",
    phone: "",
    characters: [],
    skills: [],
    project_len: 0,
    projects: [],
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

    var portfolio: PortfolioDTO = (
      await Axios.get(
        `http://13.125.238.102:8080/api/portfolio/${portfolio_id}`
      )
    ).data;

    this.setState({ project_len: portfolio.projects.length });
    this.setState({
      name: portfolio.name || "",
      birth: portfolio.birth || "",
      email: portfolio.email || "",
      phone: portfolio.phone || "",
      characters: portfolio.characters || [],
      skills: portfolio.skills || [],
      projects: portfolio.projects || [],
      profile_image_url: portfolio.profile_image_url || "",
    });
  }
  render() {
    const {
      name,
      birth,
      email,
      phone,
      characters,
      skills,
      project_len,
      projects,
      profile_image_url,
    } = this.state;
    return (
      <>
        <PortfolioResultPresenter
          name={name}
          birth={birth}
          email={email}
          phone={phone}
          characters={characters}
          skills={skills}
          project_len={project_len}
          projects={projects}
          profile_image_url={profile_image_url}
        />
      </>
    );
  }
}
