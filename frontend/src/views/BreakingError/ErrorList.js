import React from "react";
import PropTypes from "prop-types";
import './BreakingError.css';


function ErrorList({ id, bname }) {
return <h1 id="errorList">{id} {bname}</h1>; 
}

ErrorList.propTypes = {
    id: PropTypes.number.isRequired,
    bname: PropTypes.string.isRequired,
};

export default ErrorList;