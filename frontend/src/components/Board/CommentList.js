import React from "react";
import axios from "axios";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput.js"
import Button from "components/CustomButtons/Button.js";

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
                this.componentDidMount();
                alert("댓글 작성 완료");
            })
            .catch((error) => {
                //console.log(error);
                alert("댓글 작성에 실패했습니다");
            });
    };

    componentDidMount() {
        this.setState({});
        axios({
            method: "get",
            url: `http://13.125.238.102:8080/api/comment/list/${this.props.post_id}`
        })
            .then((res) => {
                console.log(res.data)
                let listInfo = [];
                for (var i = 0; i < res.data.length; i++) {
                    var list = [];
                    list[0] = res.data[i].comment_id;
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
            <Card>
                <CardHeader>
                    <h2>댓글</h2>
                </CardHeader>
                <CardBody>
                    <form>
                        <GridContainer>
                            <GridItem xs={9} sm={9} md={10}>
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
                            <GridItem xs={3} sm={3} md={2}>
                                <Button onClick={() => this.submit()} color="success">
                                    완료
                                    </Button>
                            </GridItem>
                        </GridContainer>
                    </form>
                    {this.state.info.map((prop, key) => {
                        return (
                            <GridContainer style={{height: "30px"}}>
                                <GridItem xs={0} sm={1} md={1}>
                                    {prop[0]}
                                </GridItem>
                                <GridItem xs={9} sm={9} md={9}>
                                    {prop[1]}
                                </GridItem>
                                <GridItem xs={3} sm={2} md={2}>
                                    {prop[2]}
                                </GridItem>
                            </GridContainer>
                        );
                    })}
                </CardBody>
            </Card>
        );
    }
}

export default CommentList;
