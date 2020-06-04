import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Table from "components/Table/Table.js";
import Pagination from "components/Pagination/Pagination";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { Button } from "@material-ui/core";
import Container from "@material-ui/core/Container";


// 클래스형 컴포넌트는 위단계에서 보내주는걸 props로 받아 올 수 있다.
class BoardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: [],
            listInfoArr: [],
            login: false,
            loading: false,
            page: 1,
            start: 0,
            end: 5
        };
    }

    handleChangeIndexUP = () => {
        const { page, start, end } = this.state;
        let list = [];
        this.setState({
            page: page + 1,
            start: start + 5,
            end: end + 5
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
            start: start - 5,
            end: end - 5
        });
        list = this.state.info.slice(this.state.start, this.state.end)
        this.setState({
            listInfoArr: list
        });
    };

    // 리스트 불러오기
    componentDidMount() {
        if (this.props.my === "true") {
            var user = window.sessionStorage.getItem("user_email");
            var axiosUrl = `http://13.125.238.102:8080/api/board/joinlist/${user}/`
        } else {
            if (this.props.type === "top") {
                var axiosUrl = `http://13.125.238.102:8080/api/board/top10`
            } else {
                var axiosUrl = `http://13.125.238.102:8080/api/board/list/${this.props.type}`
            }
        }
        console.log(axiosUrl)
        axios({
            method: "get",
            url: axiosUrl
        })
            .then((res) => {
                let listInfo = [];
                for (var i = 0; i < res.data.length; i++) {
                    var list = [];
                    list[0] = res.data[i].board_id;
                    list[1] = res.data[i].manager_email;
                    list[2] = res.data[i].title;
                    list[3] = res.data[i].type;
                    list[4] = res.data[i].modified_date[0] + "-" + res.data[i].modified_date[1] + "-" + res.data[i].modified_date[2];  //날짜
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
                            goto="/plus/postList"
                            tableHeaderColor="info"
                            tableHead={["번호", "게시판 주인", "게시판 이름", "타입", "생성/수정 날짜"]}
                            tableData={this.state.listInfoArr}
                        />
                    </GridItem>
                </GridContainer>
            </Container>
        );
    }
}

export default BoardList;
