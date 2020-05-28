import React from 'react';

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Close from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from 'components/Card/CardFooter';
import Button from "components/CustomButtons/Button.js";
import NavPills from "components/NavPills/NavPills.js";
import CustomInput from "components/CustomInput/CustomInput.js"
// 스타일(꾸미는 용)
import modalStyle from "assets/jss/material-dashboard-react/components/modalStyle.js";
import BoardList from "components/Board/BoardList.js"
import Editor from "components/Editor/Editor.js"


// 애니메이션 모달 열때 위에서 아래로
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

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

const useStyles = makeStyles(modalStyle);
const cartTitleStyles = makeStyles(styles);

export default function Board() {
    const classes = useStyles();
    const classesCartTitle = cartTitleStyles();
    const [modal, setModal] = React.useState(false);
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
                                        tabButton: "공식 게시판",
                                        tabContent: (
                                            <BoardList />
                                        )
                                    },
                                    {
                                        tabButton: "내가 가입한 자유 게시판",
                                        tabContent: (
                                            <BoardList />
                                        )
                                    },
                                    {
                                        tabButton: "전체 자유 게시판",
                                        tabContent: (
                                            <BoardList />
                                        )
                                    },
                                    {
                                        tabButton: "인기 자유 게시판",
                                        tabContent: (
                                            <BoardList />
                                        )
                                    }
                                ]}
                            />
                        </CardBody>
                        <CardFooter>
                            <div>
                                <Button color="info" round onClick={() => setModal(true)}>
                                    게시판 만들기
                                </Button>
                            </div>
                            <Dialog
                                classes={{
                                    root: classes.center,
                                    paper: classes.modal
                                }}
                                open={modal}
                                TransitionComponent={Transition}
                                keepMounted
                                onClose={() => setModal(false)}
                                aria-labelledby="modal-slide-title"
                                aria-describedby="modal-slide-description"
                            >
                                <DialogTitle
                                    id="classic-modal-slide-title"
                                    disableTypography
                                    className={classes.modalHeader}
                                >
                                    <IconButton
                                        className={classes.modalCloseButton}
                                        key="close"
                                        aria-label="Close"
                                        color="inherit"
                                        onClick={() => setModal(false)}
                                    >
                                        <Close className={classes.modalClose} />
                                    </IconButton>
                                    <h4 className={classes.modalTitle}>게시판 만들기</h4>
                                </DialogTitle>
                                <DialogContent
                                    id="modal-slide-description"
                                    className={classes.modalBody}
                                >
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={12}><CustomInput
                                            labelText="게시판 이름"
                                            id="float"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                        /></GridItem>
                                    </GridContainer>
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={12}><CustomInput
                                            labelText="게시판 간단 소개"
                                            id="float"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                        /></GridItem>
                                    </GridContainer>
                                </DialogContent>
                                <DialogActions
                                    className={classes.modalFooter + " " + classes.modalFooterCenter}
                                >
                                    <Button onClick={() => setModal(false)}>취 소</Button>
                                    <Button onClick={() => setModal(false)} color="success">
                                        만들기
                                    </Button>
                                </DialogActions>
                            </Dialog>

                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <Editor />
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
}