import React from 'react';
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Table from "components/Table/Table.js";
import CardFooter from 'components/Card/CardFooter';

const styles = {
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: "#777",
            fontSize: "65%",
            fontWeight: "400",
            lineHeight: "1"
        }
    }
};

const useStyles = makeStyles(styles);
export default function Board() {
    const classes = useStyles();
    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={6} md={6}>
                    <Card>
                        <CardHeader color="info">
                            <h4 className={classes.cardTitleWhite}>게시판 목록</h4>
                        </CardHeader>
                        <CardBody>
                            <Table
                                tableHeaderColor="info"
                                tableHead={["작성자", "제목", "타입", "작성날짜"]}
                                tableData={[
                                    ["신상엽", "테이블은 이렇게 사용", "공식", "2020-05-15"],
                                    ["신상엽", "테이블은 이렇게 사용", "공식", "2020-05-15"],
                                    ["신상엽", "테이블은 이렇게 사용", "공식", "2020-05-15"],
                                    ["신상엽", "테이블은 이렇게 사용", "공식", "2020-05-15"],
                                    ["신상엽", "테이블은 이렇게 사용", "공식", "2020-05-15"]
                                ]}
                            />
                        </CardBody>
                        <CardFooter>
                            게시판 만들기
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={6}>
                    <Card>
                        <CardHeader color="info">
                            <h4 className={classes.cardTitleWhite}>게시판 목록</h4>
                        </CardHeader>
                        <CardBody>
                            <Table
                                tableHeaderColor="info"
                                tableHead={["작성자", "제목", "타입", "작성날짜"]}
                                tableData={[
                                    ["신상엽", "테이블은 이렇게 사용", "공식", "2020-05-15"],
                                    ["신상엽", "테이블은 이렇게 사용", "공식", "2020-05-15"],
                                    ["신상엽", "테이블은 이렇게 사용", "공식", "2020-05-15"],
                                    ["신상엽", "테이블은 이렇게 사용", "공식", "2020-05-15"],
                                    ["신상엽", "테이블은 이렇게 사용", "공식", "2020-05-15"]
                                ]}
                            />
                        </CardBody>
                        <CardFooter>
                            게시판 만들기
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        선택한 게시글에 해당하는<br />
                        내용들이 여기서 나옴
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
}
