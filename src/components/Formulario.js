import React, { useState } from 'react';
import { Error } from './Error';
import PropTypes from 'prop-types';
import { Pais } from './Pais';
import { Ciudad } from './Ciudad';

export const Formulario = ({ busqueda, setBusqueda, setConsultar }) => {

    const [error, setError] = useState(false);

    const { ciudad, pais } = busqueda;

    const handleChange = e => {
        setBusqueda({
            ...busqueda,
            [ e.target.name ]: e.target.value
        })
    };

    const handleSubmit = e => {
        e.preventDefault();
        
        if ( ciudad.trim() === '' || pais.trim() === '' ) {
            setError(true);
            return;
        }

        setError(false);

        setConsultar(true);
    };

    return (
        <form
            onSubmit={handleSubmit}
        >

            { error ? <Error mensaje="Todos los campos son obligatorios" /> : null }

            <Pais 
                pais={pais}
                handleChange={handleChange}
            />

            <Ciudad
                ciudad={ciudad}
                handleChange={handleChange}
            />

           <div className="input-field col s12">
                <input 
                   type="submit" 
                   value="Buscar Clima"
                   className="waves-effect waves-ligth btn-large btn-block yellow accent-4"
                />
           </div>

        </form>
    )
};

Formulario.propTypes = {
    busqueda: PropTypes.object.isRequired,
    setBusqueda: PropTypes.func.isRequired,
    setConsultar: PropTypes.func.isRequired
};


