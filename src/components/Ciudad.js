import React from 'react';

export const Ciudad = ({ ciudad, handleChange }) => {
    return (
        <div className="input-field col s12">
                <input 
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={handleChange}
                />
                <label>Ciudad:</label>
            </div>
    )
}
