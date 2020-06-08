import React from 'react';
import axios from "axios";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js"
// 스타일(꾸미는 용)
import modalStyle from "assets/jss/material-dashboard-react/components/modalStyle.js";

import ReactSummernote from 'react-summernote';
import 'react-summernote/dist/react-summernote.css'; // import styles
import "react-summernote/lang/summernote-ko-KR";

// Import bootstrap(v3 or v4) dependencies
import 'bootstrap/js/modal';
import 'bootstrap/js/dropdown';
import 'bootstrap/js/tooltip';
import 'bootstrap/dist/css/bootstrap.css';


const useStyles = makeStyles(modalStyle);
export default function MakePost(props) {
    const classes = useStyles();
    const { board_id, btitle } = props.location.state;
    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');
    const changeTitle = (e) => {
        setTitle(e.target.value);
    };
    const onChange = (content) => {
        setContent(content)
    }
    const onImageUpload = (images, insertImage) => {
        for (let i = 0; i < images.length; i++) {
            const reader = new FileReader();

            reader.onloadend = () => {
                insertImage(reader.result);
            };

            reader.readAsDataURL(images[i]);
        }
    };
    // 게시글 만들기 axios
    const submit = () => {
        axios({
            method: "post",
            url: `http://13.125.238.102:8080/api/post`,
            data: {
                title: title,
                content: content,
                board_id: board_id,
                user_email: window.sessionStorage.getItem("user_email")
            },
        })
            .then((res) => {
                props.history.push({ pathname: "/plus/postList", state: { board_id: board_id } });
            })
            .catch((error) => {
                console.log(error);
                alert("게시글 작성에 실패했습니다");
            });
    };
    return (
        <div>
            <Card>
                <GridItem xs={12} sm={12} md={12}>

                    <form className={classes.form}>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={12}><CustomInput
                                labelText="제 목"
                                id="title"
                                formControlProps={{
                                    fullWidth: true
                                }}
                                inputProps={{
                                    onChange: changeTitle
                                }}
                            /></GridItem>
                            <GridItem xs={12} sm={12} md={12}>
                                <ReactSummernote
                                    value="내용을 입력 하세요."
                                    options={{
                                        lang: 'ko-KR',
                                        height: 350,
                                        dialogsInBody: true,
                                        toolbar: [
                                            ['style', ['style']],
                                            ['font', ['bold', 'underline', 'clear']],
                                            ['fontname', ['fontname']],
                                            ['para', ['ul', 'ol', 'paragraph']],
                                            ['table', ['table']],
                                            ['insert', ['link', 'picture', 'video']],
                                            ['view', ['fullscreen', 'codeview']]
                                        ]
                                    }}
                                    onChange={onChange}
                                    onImageUpload={onImageUpload}
                                    id="contents"
                                />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={12}>
                                <Button onClick={() => submit()} color="success">
                                    만들기
                                    </Button>
                            </GridItem>
                        </GridContainer>
                    </form>
                </GridItem>
            </Card>
        </div >
    );
}
