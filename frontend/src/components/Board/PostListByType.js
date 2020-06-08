import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Table from "components/Table/Table.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { Button } from "@material-ui/core";
import Container from "@material-ui/core/Container";
class PostListByType extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: [],
            listInfoArr: [],
            login: false,
            loading: false,
            page: 1,
            start: 0,
            end: 7
        };
    }

    componentDidMount() {
        this.setState({});
        var axiosUrl = `http://13.125.238.102:8080/api/post/list/${this.props.board_id}`
        axios({
            method: "get",
            url: axiosUrl
        })
            .then((res) => {
                console.log(res.data);
                let listInfo = [];
                for (var i = 0; i < res.data.length; i++) {
                    var list = [];
                    console.log(res.data[i].board_id);
                    list[0] = res.data[i].post_id;
                    list[1] = res.data[i].user_email;
                    list[2] = res.data[i].title;
                    list[3] = res.data[i].modified_date[0] + res.data[i].modified_date[2]
                    listInfo[i] = list;
                }
                let listInfoArr = [];
                listInfoArr = listInfo.slice(this.state.start, this.state.end);
                this.setState({ info: listInfo, listInfoArr: listInfoArr, loading: false });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    handleChangeIndexUP = () => {
        const { page, start, end } = this.state;
        let list = [];
        this.setState({
            page: page + 1,
            start: start + 7,
            end: end + 7
        });
        list = this.state.info.slice(this.state.start, this.state.end)
        this.setState({
            listInfoArr: list
        });
    };

    handleChangeIndexDown = () => {
        const { page, start, end } = this.state;
        if (start === 0) return;
        let list = [];
        this.setState({
            page: page - 1,
            start: start - 7,
            end: end - 7
        });
        list = this.state.info.slice(this.state.start, this.state.end)
        this.setState({
            listInfoArr: list
        });
    };

    render() {
        return (
            <Container>
                <GridContainer>
                    <GridItem xs={4} sm={3} md={2}>
                        <Button
                            onClick={() => this.handleChangeIndexDown()}
                        >
                            이전
                        </Button>
                    </GridItem>
                    <GridItem xs={4} sm={6} md={8}>
                    </GridItem>
                    <GridItem xs={4} sm={3} md={2}>
                        <Button
                            onClick={() => this.handleChangeIndexUP()}
                        >
                            다음
                    </Button>
                    </GridItem>
                </GridContainer>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <Table
                            goto="/plus/postdetail"
                            tableHeaderColor="info"
                            tableHead={["번호", "작성자", "제목", "작성날짜"]}
                            tableData={this.state.listInfoArr}
                        />
                    </GridItem>
                </GridContainer>
            </Container>

        );
    }
}

export default PostListByType;
