// 게시글 리스트

import React from 'react';
import { Link } from "react-router-dom";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from 'components/Card/CardFooter';
import Button from "components/CustomButtons/Button.js";
// 스타일(꾸미는 용)
import PostListByType from "components/Board/PostListByType.js"

// 카드 타이틀 스타일
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

const cartTitleStyles = makeStyles(styles);

export default function PostList(props) {
    const { board_id, btitle } = props.location.state;
    const classesCartTitle = cartTitleStyles();

    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader color="info">
                            <h2 className={classesCartTitle.cardTitleWhite}>{btitle} 게시판</h2>
                        </CardHeader>
                        <CardBody>
                            <PostListByType board_id={board_id} />
                        </CardBody>
                        <CardFooter>
                            <div>
                                <Link to={{ pathname: `/plus/postcreate`, state: { board_id: board_id } }}>
                                    <Button color="info" round >
                                        게시글 작성하기
                                </Button>
                                </Link>
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
        </div >
    );
}
