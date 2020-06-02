//게시판 메인 함수형 컴포너트
import React from 'react';
import axios from "axios";

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
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

//component
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from 'components/Card/CardFooter';
import Button from "components/CustomButtons/Button.js";
import NavPills from "components/NavPills/NavPills.js";
import CustomInput from "components/CustomInput/CustomInput.js"
import CustomRadio from "components/CustomRadio/CustomRadio.js"
import BoardList from "components/Board/BoardList.js"
import Editor from "components/Editor/Editor.js"

// 스타일(꾸미는 용)
import modalStyle from "assets/jss/material-dashboard-react/components/modalStyle.js";
import styles from "assets/jss/material-dashboard-react/customCheckboxRadioSwitch.js";

// 애니메이션 모달 열때 위에서 아래로
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});


const useStyles = makeStyles(modalStyle);
const radioStyles = makeStyles(styles);
const selectStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));
export default function Board() {
    const classes = useStyles();
    const classesRadio = radioStyles();
    const classesSelect = selectStyles();
    // 모달
    const [modal, setModal] = React.useState(false);

    //게시판 만들기 폼
    const [title, setTitle] = React.useState('');
    const [contents, setContents] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [checkedA, setCheckedA] = React.useState(false);
    const [type, setType] = React.useState('');
    const changeTitle = (e) => {
        setTitle(e.target.value);
    };
    const changeContents = (e) => {
        setContents(e.target.value);
    }
    const changePassword = (e) => {
        console.log(e.target.value)
        setPassword(e.target.value);
    }
    const changeType = (e) => {
        console.log(e.target.value)
        setType(e.target.value);
    }
    // 게시판 만들기 axios
    const submit = () => {
        console.log(title);
        console.log(contents);
        console.log(password);
        console.log(window.sessionStorage.getItem("user_email"))
        console.log(type);
        axios({
            method: "post",
            url: `http://13.125.238.102:8080/api/board`,
            data: {
                title: title,
                contents: contents,
                password: password,
                manager_email: window.sessionStorage.getItem("user_email"),
                type: type
            },
        })
            .then((res) => {
                setModal(false);
                setTitle('');
                setContents('');
                setPassword('');
                setType('');
            })
            .catch((error) => {
                //console.log(error);
                alert("리뷰 작성에 실패했습니다");
            });
    };

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
                                            <BoardList type="public" />
                                        )
                                    },
                                    {
                                        tabButton: "내가 가입한 자유 게시판",
                                        tabContent: (
                                            <BoardList type="free" />
                                        )
                                    },
                                    {
                                        tabButton: "전체 자유 게시판",
                                        tabContent: (
                                            <BoardList type="free" />
                                        )
                                    },
                                    {
                                        tabButton: "인기 자유 게시판",
                                        tabContent: (
                                            <BoardList type="free" />
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
                                        <h4 className={classes.modalTitle}>게시판 만들기</h4>
                                    </DialogTitle>
                                    <DialogContent
                                        id="modal-slide-description"
                                        className={classes.modalBody}
                                    >
                                        <GridContainer>
                                            <GridItem xs={12} sm={12} md={12}><CustomInput
                                                labelText="게시판 이름"
                                                id="title"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    onChange: changeTitle
                                                }}
                                            /></GridItem>
                                        </GridContainer>
                                        <GridContainer>
                                            <GridItem xs={12} sm={12} md={12}><CustomInput
                                                labelText="게시판 간단 소개"
                                                id="contents"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    onChange: changeContents,
                                                    multiline: true,
                                                    rows: 5
                                                }}
                                            /></GridItem>
                                        </GridContainer>
                                        <GridContainer>
                                            <GridItem xs={6} sm={4} md={4}>
                                                <FormControl className={classesSelect.formControl}>
                                                    <InputLabel id="demo-simple-select-helper-label">타입</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-helper-label"
                                                        id="demo-simple-select-helper"
                                                        value={type}
                                                        onChange={changeType}
                                                    >
                                                        <MenuItem value={'public'}>공식</MenuItem>
                                                        <MenuItem value={'free'}>자유</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </GridItem>
                                            <GridItem xs={6} sm={4} md={4}>
                                                <br></br>
                                                <div>
                                                    <div>
                                                        <FormControlLabel
                                                            control={
                                                                <Switch
                                                                    checked={checkedA}
                                                                    onChange={event => setCheckedA(event.target.checked)}
                                                                    value="checkedA"
                                                                    classes={{
                                                                        switchBase: classesRadio.switchBase,
                                                                        checked: classesRadio.switchChecked,
                                                                        thumb: classesRadio.switchIcon,
                                                                        iconChecked: classesRadio.switchIconChecked,
                                                                        track: classesRadio.switchBar
                                                                    }}
                                                                />
                                                            }
                                                            classes={{
                                                                label: classesRadio.label
                                                            }}
                                                            label="비공개 게시판"
                                                        />
                                                    </div>

                                                </div>
                                            </GridItem>
                                            <GridItem xs={12} sm={4} md={4}>
                                                {checkedA ? (
                                                    <CustomInput
                                                        labelText="비밀번호를 입력해주세요"
                                                        id="password"
                                                        formControlProps={{
                                                            fullWidth: true
                                                        }}
                                                        inputProps={{
                                                            onChange: changePassword
                                                        }}
                                                    />
                                                ) : (
                                                        <div></div>
                                                    )
                                                }
                                            </GridItem>
                                        </GridContainer>
                                    </DialogContent>
                                    <DialogActions
                                        className={classes.modalFooter + " " + classes.modalFooterCenter}
                                    >
                                        <Button onClick={() => setModal(false)}>취 소</Button>
                                        <Button onClick={() => submit()} color="success">
                                            만들기
                                    </Button>
                                    </DialogActions>
                                </form>
                            </Dialog>

                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
}
