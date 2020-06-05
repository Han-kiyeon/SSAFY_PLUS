import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import ReactSummernote from 'react-summernote';
import 'react-summernote/dist/react-summernote.css'; // import styles
import "react-summernote/lang/summernote-ko-KR";

// Import bootstrap(v3 or v4) dependencies
import 'bootstrap/js/modal';
import 'bootstrap/js/dropdown';
import 'bootstrap/js/tooltip';
import 'bootstrap/dist/css/bootstrap.css';

import Button from "components/CustomButtons/Button.js";
class DetailPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: [],
            title: '',
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
                this.setState({ title: res.data.title, content: res.data.content, user_email: res.data.user_email });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
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
                <div>
                    {this.state.user_email === window.sessionStorage.getItem("user_email") ? (
                        <Link to={{ pathname: `/plus/postupdate`, state: { post_id: this.props.post_id, title: this.state.title } }}>
                            <Button post_id={this.props.post_id} >수정</Button>
                        </Link>
                    ) : (
                            null
                        )}
                </div>
            </div>
        );
    }
}

export default DetailPost;
