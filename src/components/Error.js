import React from 'react';
import PropTypes from 'prop-types';

export const Error = ({ mensaje }) => {
    return (
        <p className="card-panel red darken-4 white-text error">{ mensaje }</p> 
    )
};

Error.propTypes = {
    mensaje: PropTypes.string.isRequired
};

