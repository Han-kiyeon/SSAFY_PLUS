import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Table from "components/Table/Table.js";

class BoardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: [],
            login: false,
            loading: false,
        };
    }

    componentDidMount() {
        axios({
            method: "get",
            url: `http://13.125.238.102:8080/api/board/list/`,

            // params: {
            //     type: type,
            //     user: user.id,
            // },
        })
            .then((res) => {
                console.log(res.data);

                // let storeInfo = [];
                // for (var i = 0; i < res.data.store_id.length; i++) {
                //     var store = {};
                //     store.id = res.data.store_id[i];
                //     store.store_name = res.data.store_name[i];
                //     if (res.data.store_img[i] !== null) store.img = res.data.store_img[i];
                //     else store.img = store_img;
                //     store.area = res.data.store_area[i];
                //     storeInfo[i] = store;
                // }

                // this.setState({ info: storeInfo, loading: false });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <Table
                goto = "/plus/postList" 
                tableHeaderColor="info"
                tableHead={["작성자", "제목", "타입", "작성날짜"]}
                tableData={[
                    ["신상엽", "테이블은 이렇게 사용", "공식", "2020-05-15"],
                    ["신상엽", "테이블은 이렇게 사용", "공식", "2020-05-15"],
                    ["신상엽", "테이블은 이렇게 사용", "공식", "2020-05-15"],
                    ["신상엽", "테이블은 이렇게 사용", "공식", "2020-05-15"],
                    ["신상엽", "테이블은 이렇게 사용", "공식", "2020-05-15"]
                ]}
            />
        );
    }
}

export default BoardList;
