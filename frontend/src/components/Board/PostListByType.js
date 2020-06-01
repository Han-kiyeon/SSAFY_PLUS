import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Table from "components/Table/Table.js";

class PostListByType extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: [],
            login: false,
            loading: false
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
                console.log('새로만든 배열')
                console.log(listInfo)
                this.setState({ info: listInfo, loading: false });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <Table
                goto="/plus/postdetail"
                tableHeaderColor="info"
                tableHead={["번호", "작성자", "제목", "작성날짜"]}
                tableData={this.state.info}
            />
        );
    }
}

export default PostListByType;
