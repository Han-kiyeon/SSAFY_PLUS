import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Table from "components/Table/Table.js";

import ReactSummernote from 'react-summernote';
import 'react-summernote/dist/react-summernote.css'; // import styles
import "react-summernote/lang/summernote-ko-KR";

// Import bootstrap(v3 or v4) dependencies
import 'bootstrap/js/modal';
import 'bootstrap/js/dropdown';
import 'bootstrap/js/tooltip';
import 'bootstrap/dist/css/bootstrap.css';

class Comment extends React.Component {
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

    componentDidMount() {
        axios({
            method: "get",
            url: `http://13.125.238.102:8080/api/comment/list/${this.props.post_id}`
        })
            .then((res) => {
                console.log(res.data)
                this.setState({ content: res.data.content, user_email: res.data.user_email });
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
        {
            this.info.map((prop, key) => {
                return (
                    <div>
                        {prop}
                    </div>
                );
            })
        };
    }
}

export default Comment;
