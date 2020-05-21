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

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


// 스타일(꾸미는 용)
import modalStyle from "assets/jss/material-dashboard-react/components/modalStyle.js";
import BoardList from "components/Board/BoardList.js"


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
                <GridItem xs={12} sm={6} md={6}>
                    <Card>
                        <CardHeader color="info">
                            <h4 className={classesCartTitle.cardTitleWhite}>공식 게시판 목록</h4>
                        </CardHeader>
                        <CardBody>
                            <BoardList></BoardList>
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
                                    이  름 : <br />
                                    주  제 : <br />
                                    간단소개 : <br />
                                </DialogContent>
                                <DialogActions
                                    className={classes.modalFooter + " " + classes.modalFooterCenter}
                                >
                                    <Button onClick={() => setModal(false)}>Never Mind</Button>
                                    <Button onClick={() => setModal(false)} color="success">
                                        Yes
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={6}>
                    <Card>
                        <CardBody>
                            <NavPills
                                color="info"
                                tabs={[
                                    {
                                        tabButton: "내가 가입한 자유 게시판",
                                        tabContent: (
                                            <span>
                                                <p>
                                                    Collaboratively administrate empowered markets via
                                                    plug-and-play networks. Dynamically procrastinate B2C
                                                    users after installed base benefits.
                        </p>
                                                <br />
                                                <p>
                                                    Dramatically visualize customer directed convergence
                                                    without revolutionary ROI. Collaboratively
                                                    administrate empowered markets via plug-and-play
                                                    networks. Dynamically procrastinate B2C users after
                                                    installed base benefits.
                        </p>
                                                <br />
                                                <p>
                                                    Dramatically visualize customer directed convergence
                                                    without revolutionary ROI. Collaboratively
                                                    administrate empowered markets via plug-and-play
                                                    networks. Dynamically procrastinate B2C users after
                                                    installed base benefits.
                        </p>
                                            </span>
                                        )
                                    },
                                    {
                                        tabButton: "전체 자유 게시판",
                                        tabContent: (
                                            <span>
                                                <p>
                                                    Efficiently unleash cross-media information without
                                                    cross-media value. Quickly maximize timely
                                                    deliverables for real-time schemas.
                        </p>
                                                <br />
                                                <p>
                                                    Dramatically maintain clicks-and-mortar solutions
                                                    without functional solutions. Dramatically visualize
                                                    customer directed convergence without revolutionary
                                                    ROI. Collaboratively administrate empowered markets
                                                    via plug-and-play networks. Dynamically procrastinate
                                                    B2C users after installed base benefits.
                        </p>
                                            </span>
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
                    </Card>
                </GridItem>
            </GridContainer>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CKEditor
                            editor={ClassicEditor}
                            data="<p>Hello from CKEditor 5!</p>"
                            onInit={editor => {
                                // You can store the "editor" and use when it is needed.
                                console.log('Editor is ready to use!', editor);
                            }}
                            onChange={(event, editor) => {
                                const data = editor.getData();
                                console.log({ event, editor, data });
                            }}
                            onBlur={editor => {
                                console.log('Blur.', editor);
                            }}
                            onFocus={editor => {
                                console.log('Focus.', editor);
                            }}
                        />


                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
}
