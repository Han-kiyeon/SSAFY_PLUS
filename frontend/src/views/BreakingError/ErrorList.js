import React from "react";
import {Link} from "react-router-dom"
import PropTypes from "prop-types";
import './BreakingError.css';


function ErrorList({answerCnt, content, errorId, likeCnt, title, userEmail}) {
return(
    <Link key={errorId} to={{
        pathname:`/plus/breakingerror_detail/${errorId}`,
        state:{
            answerCnt, content, errorId, likeCnt, title, userEmail
        }
    }}>
    <h1 id="errorList">{title} {content}</h1>
    </Link>
    ); 
}

ErrorList.propTypes = {
    answerCnt: PropTypes.number.isRequired, 
    content: PropTypes.string.isRequired, 
    errorId: PropTypes.number.isRequired, 
    likeCnt: PropTypes.number.isRequired, 
    title: PropTypes.string.isRequired, 
    userEmail: PropTypes.string.isRequired
}
;

export default ErrorList;