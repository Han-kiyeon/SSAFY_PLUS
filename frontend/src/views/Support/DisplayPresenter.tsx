import React from "react";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/GridTyped/Grid";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import NavPills from "components/NavPills/NavPills.js";
import Episode from "components/Episode";
import CreatePortfolio from "views/Portfolio/createPage";
import MyInfo from "components/MyInfo";

export default function DisplayPresenter() {
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardBody>
              <NavPills
                color="info"
                tabs={[
                  {
                    tabButton: "개인정보 저장소",
                    tabContent: <MyInfo />,
                  },
                  {
                    tabButton: "나만의 에피소드",
                    tabContent: <Episode />,
                  },
                  {
                    tabButton: "포트폴리오",
                    tabContent: <CreatePortfolio />,
                  },
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
