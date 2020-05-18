import React from 'react';
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
import Table from "components/Table/Table.js";
import CardFooter from 'components/Card/CardFooter';
import Button from "components/CustomButtons/Button.js";
import modalStyle from "assets/jss/material-dashboard-react/components/modalStyle.js";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

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
    const [modal, setModal] = React.useState(false);
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
                            <div>
                                <Button color="rose" round onClick={() => setModal(true)}>
                                    Modal
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
                                    <h4 className={classes.modalTitle}>Modal title</h4>
                                </DialogTitle>
                                <DialogContent
                                    id="modal-slide-description"
                                    className={classes.modalBody}
                                >
                                    <h5>Are you sure you want to do this?</h5>
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
                        <CardHeader color="info">
                            <h4 className={classes.cardTitleWhite}>게시글 목록</h4>
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
                            새로운 게시글 만들기
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
