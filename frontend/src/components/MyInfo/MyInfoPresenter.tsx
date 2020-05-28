import React from "react";
import styled from "styled-components";

interface PortfolioIState {
  useStyles: any;
  name: string;
}
const Container = styled.div`
  border-top: 2px solid rgba(13, 13, 13, 0.3);
  color: #070707;
  padding-top: 20px;
  margin: 20px 10px;
`;
const BasicInfo = styled.div`
  padding: 10px 0px;
`;

const SchoolInfo = styled.div`
  padding: 10px 0px;
`;
const CareerInfo = styled.div`
  padding: 10px 0px;
`;
const SpecInfo = styled.div`
  padding: 10px 0px;
`;
const Title = styled.span`
  font-size: 20px;
  opacity: 0.8;
  font-weight: 600;
`;
const InfoBox = styled.span`
  font-size: 15px;
  font-weight: 600;
`;
const Desc = styled.span``;

function PortfolioPresenter({ useStyles, name }: PortfolioIState) {
  const classes = useStyles();

  return (
    <Container>
      <BasicInfo>
        <Title>기본 인적 사항</Title>
        <InfoBox>{name}</InfoBox>
      </BasicInfo>
      <SchoolInfo>
        <Title>학력 사항</Title>
      </SchoolInfo>
      <CareerInfo>
        <Title>경력 사항</Title>
      </CareerInfo>
      <SpecInfo>
        <Title>자격 사항</Title>
      </SpecInfo>
    </Container>
  );
}

export default PortfolioPresenter;
