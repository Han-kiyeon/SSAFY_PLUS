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

class DetailPost extends React.Component {
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
            url: `http://13.125.238.102:8080/api/post/${this.props.post_id}`
        })
            .then((res) => {
                console.log(res.data)
                this.setState({ content: res.data.content, user_email: res.data.user_email });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <ReactSummernote
                    value={this.state.content}
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
                />
            </div>
        );
    }
}

export default DetailPost;
