import React from "react";
import Portfolio from "./Portfolio";
import { PDFDownloadLink } from "@react-pdf/renderer";

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

function PortfolioResultPresenter({
  name,
  birth,
  email,
  phone,
  characters,
  skills,
  project_len,
  projects,
}: PortfolioDTO) {
  return (
    <>
      {false && name !== "" && projects !== [] && skills !== [] && (
        <PDFDownloadLink
          document={
            <Portfolio
              name={name}
              birth={birth}
              email={email}
              phone={phone}
              characters={characters}
              skills={skills}
              project_len={project_len}
              projects={projects}
            />
          }
          fileName={`${window.sessionStorage.getItem("portfolio_title")}.pdf`}
          style={{
            textDecoration: "none",
            padding: "10px",
            border: "1px solid black",
          }}
        >
          포트폴리오 다운로드
        </PDFDownloadLink>
      )}
    </>
  );
}

export default PortfolioResultPresenter;
