import React from "react";
import Portfolio from "./Portfolio";
import styled from "styled-components";
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
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
`;
const Card = styled.div`
  padding: 30px 0px;
  border-radius: 5px;
  background-color: #ffffff;
  height: 60vh;
  width: 100%;
  text-align: center;
  align-items: center;
`;
const InfoText = styled.span`
  font-weight: 500;
`;
const DownLoadText = styled.span`
  font-weight: 600;
`;
const Image = styled.div`
  background-image: url(http://13.125.238.102:8080/api/downloadFile/0c8f92e0-98ed-4c5f-ae75-88e8963294c3);
  background-repeat: no-repeat;
  background-size: contain;
  display: block;
  height: 30vh;
  width: 23vw;
  margin: 10px auto 30px auto;
`;

function PortfolioResultPresenter({
  name,
  birth,
  email,
  phone,
  characters,
  profile_image_url,
  skills,
  project_len,
  projects,
}: PortfolioDTO) {
  return (
    <Container>
      <Card>
        <InfoText>
          🎉포트폴리오가 완성되었습니다🙋‍♂
          <br />
          pdf 파일로 다운로드 받아보세요
          <br />
        </InfoText>
        <Image />
        {name !== "" && projects !== [] && skills !== [] && (
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
                profile_image_url={profile_image_url}
              />
            }
            fileName={`${window.sessionStorage.getItem("portfolio_title")}.pdf`}
            style={{
              textDecoration: "none",
              padding: "10px",
            }}
          >
            <DownLoadText>포트폴리오 다운로드</DownLoadText>
          </PDFDownloadLink>
        )}
      </Card>
    </Container>
  );
}

export default PortfolioResultPresenter;
