import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Close from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js"
import Button from "components/CustomButtons/Button.js";
// core components
import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";
import modalStyle from "assets/jss/material-dashboard-react/components/modalStyle.js";

import { Link } from "react-router-dom";

// 애니메이션 모달 열때 위에서 아래로
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles(styles);
const modalStyles = makeStyles(modalStyle);
export default function CustomTable(props) {
  const classes = useStyles();
  const modalclasses = modalStyles();
  // 모달
  const [modal, setModal] = React.useState(false);
  const { tableHead, tableData, tableHeaderColor, goto } = props;
  const [password, setPassword] = React.useState('');
  const changePassword = (e) => {
    setPassword(e.target.value);
    console.log(password);
  }
  const submit = (e) => {
    console.log(password);
    axios({
      method: "post",
      url: `http://13.125.238.102:8080/api/board/join/${e}`,
      data: {
        password: password,
        user_email: window.sessionStorage.getItem("user_email")
      },
    })
      .then((res) => {
        console.log(e)
        setModal(false);
      })
      .catch((error) => {
        alert("게시판 가입에 실패했습니다");
      });
  };


  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
            <TableRow className={classes.tableHeadRow}>
              {tableHead.map((prop, key) => {
                return (
                  <TableCell
                    className={classes.tableCell + " " + classes.tableHeadCell}
                    key={key}
                  >
                    {prop}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {tableData.map((board, key) => {
            return (
              <TableRow key={key} className={classes.tableBodyRow}>
                {board.map((prop, key) => {
                  return (
                    <TableCell className={classes.tableCell} key={key}>
                      {board[3] === 'private' ? (
                        <div abc ={board[0]}>
                          <Link onClick={() => setModal(true)}>
                            {prop}
                          </Link>
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
                            <form className={classes.form}>
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
                                <h4 className={classes.modalTitle}>비공개 게시판 가입하기</h4>
                              </DialogTitle>
                              <DialogContent
                                id="modal-slide-description"
                                className={classes.modalBody}
                              >
                                <GridContainer>
                                  <GridItem xs={12} sm={12} md={12}><CustomInput
                                    labelText="비밀번호"
                                    id="password"
                                    formControlProps={{
                                      fullWidth: true
                                    }}
                                    inputProps={{
                                      onChange: changePassword
                                    }}
                                  /></GridItem>
                                </GridContainer>
                              </DialogContent>
                              <DialogActions
                                className={classes.modalFooter + " " + classes.modalFooterCenter}
                              >
                                <Button onClick={() => setModal(false)}>취 소</Button>
                                <Button onClick={() => submit(board[0])} color="success">
                                  가입하기
                            </Button>
                              </DialogActions>
                            </form>
                          </Dialog>
                        </div>
                      ) : (
                          <Link to={{ pathname: goto, state: { board_id: board[0], btitle: board[2] } }}>
                            {prop}
                          </Link>
                        )
                      }
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div >
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: "gray"
};

CustomTable.propTypes = {
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
};
