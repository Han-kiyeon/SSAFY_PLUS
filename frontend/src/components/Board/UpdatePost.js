import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { createHashHistory } from 'history'
import Table from "components/Table/Table.js";

import ReactSummernote from 'react-summernote';
import 'react-summernote/dist/react-summernote.css'; // import styles
import "react-summernote/lang/summernote-ko-KR";

// Import bootstrap(v3 or v4) dependencies
import 'bootstrap/js/modal';
import 'bootstrap/js/dropdown';
import 'bootstrap/js/tooltip';
import 'bootstrap/dist/css/bootstrap.css';

import Button from "components/CustomButtons/Button.js";

export const history = createHashHistory()

class UpdatePost extends React.Component {
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

    onChange = (content) => {
        console.log(content);
        this.setState({ content: content })
    }
    onImageUpload = (images, insertImage) => {
        for (let i = 0; i < images.length; i++) {
            const reader = new FileReader();

            reader.onloadend = () => {
                insertImage(reader.result);
            };

            reader.readAsDataURL(images[i]);
        }
    };

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

    submit = () => {
        axios({
            method: "put",
            url: `http://13.125.238.102:8080/api/post/${this.props.post_id}`,
            data: {
                title: this.state.title,
                content: this.state.content
            },
        })
            .then((res) => {
                console.log(this.props)
                this.props.history.goBack();
            })
            .catch((error) => {
                console.log(error);
                alert("게시글 수정에 실패했습니다");
            });
    };

    delete = () => {
        axios({
            method: "delete",
            url: `http://13.125.238.102:8080/api/post/${this.props.post_id}`,
            data: {
            },
        })
            .then((res) => {
                alert("삭제 완료")
                this.props.history.push('/plus/board')
            })
            .catch((error) => {
                console.log(error);
                alert("게시글 삭제에 실패했습니다");
            });
    };

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
                        onChange={this.onChange}
                        onImageUpload={this.onImageUpload}
                        id="contents"
                    />
                </div>
                <div>
                    <Button onClick={() => this.submit()}>완료</Button>
                    <Button onClick={() => this.delete()}>삭제</Button>
                </div>
            </div>
        );
    }
}

export default UpdatePost;
