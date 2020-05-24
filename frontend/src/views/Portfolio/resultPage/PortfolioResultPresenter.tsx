import React from "react";
import Portfolio from "./Portfolio";
import { PDFDownloadLink } from "@react-pdf/renderer";

interface PortfolioResultIState {
  name: string;

  birth: string;
  email: string;
  phone: string;
  characters: string[];
}

function PortfolioResultPresenter({
  name,
  birth,
  email,
  phone,
  characters,
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
