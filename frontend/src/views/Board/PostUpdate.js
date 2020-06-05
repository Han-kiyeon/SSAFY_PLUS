import React from 'react';

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
// 스타일(꾸미는 용)
import modalStyle from "assets/jss/material-dashboard-react/components/modalStyle.js";
import UpdatePost from 'components/Board/UpdatePost.js';


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

export default function PostUpdate(props) {
    const classesCartTitle = cartTitleStyles();
    const { post_id, title } = props.location.state;
    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader color="info">
                            <h2 className={classesCartTitle.cardTitleWhite}>{title}</h2>
                        </CardHeader>
                        <CardBody>
                            <UpdatePost post_id={post_id}></UpdatePost>
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        </div >
    );
}
