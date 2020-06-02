import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Table from "components/Table/Table.js";

import ReactSummernote from 'react-summernote';
import 'react-summernote/dist/react-summernote.css'; // import styles
import "react-summernote/lang/summernote-ko-KR";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from 'components/Card/CardFooter';
import CustomInput from "components/CustomInput/CustomInput.js"
import Button from "components/CustomButtons/Button.js";
// Import bootstrap(v3 or v4) dependencies
import 'bootstrap/js/modal';
import 'bootstrap/js/dropdown';
import 'bootstrap/js/tooltip';
import 'bootstrap/dist/css/bootstrap.css';
import { keyframes } from "styled-components";
import { cardHeader } from "assets/jss/material-dashboard-react";
import CardHeader from "components/Card/CardHeader";

class CommentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: [],
            content: '',
            user_email: '',
            login: false,
            loading: false
        };
    }

    changeContent = (res) => {
        var input = res.target.value;
        console.log(input)
        this.setState({
            content: input,
        });
    };

    submit = () => {
        console.log(this.state.content);
        console.log(window.sessionStorage.getItem("user_email"))
        axios({
            method: "post",
            url: `http://13.125.238.102:8080/api/comment`,
            data: {
                post_id: this.props.post_id,
                content: this.state.content,
                user_email: window.sessionStorage.getItem("user_email")
            },
        })
            .then((res) => {
                alert("댓글 작성 완료");
            })
            .catch((error) => {
                //console.log(error);
                alert("댓글 작성에 실패했습니다");
            });
    };

    componentDidMount() {
        axios({
            method: "get",
            url: `http://13.125.238.102:8080/api/comment/list/${this.props.post_id}`
        })
            .then((res) => {
                console.log(res.data)
                let listInfo = [];
                for (var i = 0; i < res.data.length; i++) {
                    var list = [];
                    list[0] = res.data[i].post_id;
                    list[1] = res.data[i].content;
                    list[2] = res.data[i].user_email;
                    listInfo[i] = list;
                }
                this.setState({ info: listInfo, loading: false });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <Card>
                            <CardHeader>
                                댓글
                            </CardHeader>
                            <form>
                                <GridContainer>
                                    <GridItem xs={10} sm={10} md={10}>
                                        <CustomInput
                                            labelText="내용을 입력하세요"
                                            id="content"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                onChange: this.changeContent
                                            }}
                                            name="content"
                                        />
                                    </GridItem>
                                    <GridItem xs={10} sm={10} md={2}>
                                        <Button onClick={() => this.submit()} color="success">
                                            완료
                                    </Button>
                                    </GridItem>
                                </GridContainer>
                            </form>
                            {this.state.info.map((prop, key) => {
                                return (
                                    <div>
                                        <CardBody>
                                            {prop[1]}
                                        </CardBody>
                                        <CardFooter>
                                            {prop[2]}
                                        </CardFooter>
                                    </div>
                                );
                            })}
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>
        );
    }
}

export default CommentList;
