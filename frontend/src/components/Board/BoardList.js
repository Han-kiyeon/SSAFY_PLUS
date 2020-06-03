import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Table from "components/Table/Table.js";
import Pagination from "components/Pagination/Pagination";
import { Button } from "@material-ui/core";


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
                console.log("배열의 갯수")
                console.log(this.state.info.length)
                console.log(this.state.start + " : " + this.state.end);

            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <Table
                    goto="/plus/postList"
                    tableHeaderColor="info"
                    tableHead={["번호", "게시판 주인", "게시판 이름", "타입", "생성/수정 날짜"]}
                    tableData={this.state.listInfoArr}
                />
                <Button
                    onClick={() => this.handleChangeIndexDown()}
                >
                    이전
              </Button>
                <Button
                    onClick={() => this.handleChangeIndexUP()}
                >
                    다음
              </Button>
            </div>
        );
    }
}

export default BoardList;
