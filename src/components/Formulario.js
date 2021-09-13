import React, { useState } from 'react';
import { Error } from './Error';
import PropTypes from 'prop-types';
import { Pais } from './Pais';
import { Ciudad } from './Ciudad';

export const Formulario = ({ busqueda, setBusqueda, setConsultar }) => {
   const [error, setError] = useState(false);

   const { ciudad, pais } = busqueda;

   const handleChange = (e) => {
      setBusqueda({
         ...busqueda,
         [e.target.name]: e.target.value,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      setError(false);

      if (ciudad.trim() === '' || pais.trim() === '') {
         setError(true);
         return;
      }
      setConsultar(true);
   };

   return (
      <form>
         {error ? <Error mensaje='Todos los campos son obligatorios' /> : null}
         <Pais pais={pais} handleChange={handleChange} />
         <Ciudad ciudad={ciudad} handleChange={handleChange} />
         <div className='input-field col s12'>
            <button
               type='button'
               onClick={handleSubmit}
               className='waves-effect waves-ligth btn-large btn-block yellow accent-4'
            >
               Buscar Clima
            </button>
         </div>
      </form>
   );
};

Formulario.propTypes = {
   busqueda: PropTypes.object.isRequired,
   setBusqueda: PropTypes.func.isRequired,
   setConsultar: PropTypes.func.isRequired,
};
