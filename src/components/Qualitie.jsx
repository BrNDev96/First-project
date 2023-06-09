import React from "react";
import PropTypes from "prop-types";

const Qualitie = ({ color, name, _id }) => {
    return (
        <span className={"m-1 badge bg-" + color} key={_id}>
            {name}
        </span>
    );
};

Qualitie.propTypes = {
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired
};
export default Qualitie;
