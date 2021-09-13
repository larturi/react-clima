import React from 'react';
import PropTypes from 'prop-types';

export const Mensaje = ({ mensaje }) => {
   return (
      <p className='card-panel blue darken-4 white-text error'>{mensaje}</p>
   );
};

Error.propTypes = {
   mensaje: PropTypes.string.isRequired,
};
