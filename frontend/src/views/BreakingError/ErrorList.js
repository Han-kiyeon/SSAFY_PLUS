import React from "react";
import {Link} from "react-router-dom"
import PropTypes from "prop-types";
import './BreakingError.css';


function ErrorList({ id, bname }) {
return(
    <Link to={{
        pathname:`/plus/breakingerror_detail/${id}`,
        state:{
            id,
            bname,
        }
    }}>
    <h1 id="errorList">{id} {bname}</h1>
    </Link>
    ); 
}

ErrorList.propTypes = {
    id: PropTypes.number.isRequired,
    bname: PropTypes.string.isRequired,
};

export default ErrorList;