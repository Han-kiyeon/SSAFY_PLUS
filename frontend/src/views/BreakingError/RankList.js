import React from "react";
import PropTypes from "prop-types";
import './BreakingError.css';

function RankList({ id, bname }) {
return <h1 id="rankList">{id} {bname}</h1>; 
}

RankList.propTypes = {
    id: PropTypes.number.isRequired,
    bname: PropTypes.string.isRequired,
};

export default RankList;