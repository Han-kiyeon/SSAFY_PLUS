import React from "react";
import PropTypes from "prop-types";
import './BreakingError.css';


function SearchList({ id, bname }) {
return <h1 id="searchList">{id} {bname}</h1>; 
}

SearchList.propTypes = {
    id: PropTypes.number.isRequired,
    bname: PropTypes.string.isRequired,
};

export default SearchList;