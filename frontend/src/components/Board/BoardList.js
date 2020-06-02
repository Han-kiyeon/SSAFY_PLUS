import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Table from "components/Table/Table.js";


// 클래스형 컴포넌트는 위단계에서 보내주는걸 props로 받아 올 수 있다.
class BoardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: [],
            login: false,
            loading: false
        };
    }

    // 리스트 불러오기
    componentDidMount() {
        if(this.props.my==="true"){
            var axiosUrl = `http://13.125.238.102:8080/api/board/joinlist/${window.sessionStorage.getItem("user_email")}`
        }else {
            if(this.props.type==="top"){
                var axiosUrl = `http://13.125.238.102:8080/api/board/top10`
            }else{
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
                    list[3] = res.data[i].modified_date[0] + "-" + res.data[i].modified_date[1] + "-" + res.data[i].modified_date[2];  //날짜
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
            <Table
                goto="/plus/postList"
                tableHeaderColor="info"
                tableHead={["번호", "게시판 주인", "게시판 이름", "생성/수정 날짜"]}
                tableData={this.state.info}
            />
        );
    }
}

export default BoardList;
