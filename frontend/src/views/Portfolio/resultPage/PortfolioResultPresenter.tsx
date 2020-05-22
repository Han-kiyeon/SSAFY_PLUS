import React from "react";
import Portfolio from "./Portfolio";
import { PDFDownloadLink } from "@react-pdf/renderer";

interface PortfolioResultIState {
  name: string;
}

function PortfolioResultPresenter({ name }: PortfolioResultIState) {
  return (
    <button>
      <PDFDownloadLink
        document={<Portfolio name={name} />}
        fileName="pdf_test.pdf"
        style={{
          textDecoration: "none",
          padding: "10px",
          border: "1px solid black",
        }}
      >
        다운로드 테스트
      </PDFDownloadLink>
    </button>
  );
}

export default PortfolioResultPresenter;
