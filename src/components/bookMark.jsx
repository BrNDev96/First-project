import React from "react";
import PropTypes from "prop-types";

const Bookmark = ({ status, onToggleBookmark, id }) => {
    return (
        <button onClick={() => onToggleBookmark(id)}>
            <i className={"bi bi-bookmark" + (status ? "-heart" : "")}></i>
        </button>
    );
};

Bookmark.propTypes = {
    status: PropTypes.bool.isRequired,
    onToggleBookmark: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
};

export default Bookmark;
