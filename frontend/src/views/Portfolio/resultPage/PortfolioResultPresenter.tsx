import React from "react";
import Portfolio from "./Portfolio";
import { PDFDownloadLink } from "@react-pdf/renderer";

interface PortfolioResultIState {
  name: string;
  birth: string;
  email: string;
  phone: string;
  characters: string[];
  skill1: string[];
  skill2: string[];
  skill3: string[];
  skill4: string[];
  skill5: string[];
  project_len: number;
  t_projectName1: string;
  t_projectPeriod1: string;
  t_projectDesc1: string;
  t_mystacks1: string[];
  t_projectStacks1: string;
  t_roles1: string[];
}

function PortfolioResultPresenter({
  name,
  birth,
  email,
  phone,
  characters,
  skill1,
  skill2,
  skill3,
  skill4,
  skill5,
  project_len,
  t_projectName1,
  t_projectPeriod1,
  t_projectDesc1,
  t_mystacks1,
  t_projectStacks1,
  t_roles1,
}: PortfolioResultIState) {
  return (
    <PDFDownloadLink
      document={
        <Portfolio
          name={name}
          birth={birth}
          email={email}
          phone={phone}
          characters={characters}
          skill1={skill1}
          skill2={skill2}
          skill3={skill3}
          skill4={skill4}
          skill5={skill5}
          project_len={project_len}
          t_projectName1={t_projectName1}
          t_projectPeriod1={t_projectPeriod1}
          t_projectDesc1={t_projectDesc1}
          t_mystacks1={t_mystacks1}
          t_projectStacks1={t_projectStacks1}
          t_roles1={t_roles1}
        />
      }
      fileName="pdf_test.pdf"
      style={{
        textDecoration: "none",
        padding: "10px",
        border: "1px solid black",
      }}
    >
      포트폴리오 다운로드
    </PDFDownloadLink>
  );
}

export default PortfolioResultPresenter;
