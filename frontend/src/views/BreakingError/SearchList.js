import React from "react";
import { Link } from "react-router-dom"
import PropTypes from "prop-types";
import './BreakingError.css';


function SearchList({ answerCnt, content, errorId, likeCnt, title, userEmail }) {
    return (
        <Link to={{
            pathname: `/plus/breakingerror_detail/${errorId}`,
            state: {
                answerCnt, content, errorId, likeCnt, title, userEmail
            }
        }}>
            <h1 id="searchList">{title} {content}</h1>
        </Link>
    );
}

SearchList.propTypes = {
    answerCnt: PropTypes.number.isRequired, 
    content: PropTypes.string.isRequired, 
    errorId: PropTypes.number.isRequired, 
    likeCnt: PropTypes.number.isRequired, 
    title: PropTypes.string.isRequired, 
    userEmail: PropTypes.string.isRequired
};

export default SearchList;