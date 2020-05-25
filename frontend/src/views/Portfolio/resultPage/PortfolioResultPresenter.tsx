import React from "react";
import Portfolio from "./Portfolio";
import { PDFDownloadLink } from "@react-pdf/renderer";

interface PortfolioResultIState {
  name: string;
  birth: string;
  email: string;
  phone: string;
  characters: string[];
  skill1: string;
  s_score1: string;
  s_reason1: string;
  skill2: string;
  s_score2: string;
  s_reason2: string;
  skill3: string;
  s_score3: string;
  s_reason3: string;
}

function PortfolioResultPresenter({
  name,
  birth,
  email,
  phone,
  characters,
  skill1,
  s_score1,
  s_reason1,
  skill2,
  s_score2,
  s_reason2,
  skill3,
  s_score3,
  s_reason3,
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
          s_score1={s_score1}
          s_reason1={s_reason1}
          skill2={skill2}
          s_score2={s_score2}
          s_reason2={s_reason2}
          skill3={skill3}
          s_score3={s_score3}
          s_reason3={s_reason3}
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
