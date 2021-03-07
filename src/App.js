import React, { useState, useEffect } from 'react'; 
import { Formulario } from './components/Formulario';
import { Header } from './components/Header';
import { Clima } from './components/Clima';
import { Error } from './components/Error';

function App() {

  const [busqueda, setBusqueda] = useState({
    ciudad: '',
    pais: ''
  });
  
  const [consultar, setConsultar] = useState(false);
  const [error, setError] = useState(false);
  const [resultado, setResultado] = useState({});
  
  const { ciudad, pais } = busqueda;

  useEffect(() => {
    const consultarAPI = async () => {

      if ( consultar ) {

        const appId = process.env.REACT_APP_OPENWEATHER_APIKEY;
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
        
        const respuesta = await fetch(url);
        const result = await respuesta.json();

        setResultado( result );
        setConsultar( false );

        if (resultado.cod === '404') {
          setError(true);
        } else {
          setError(false);
        }

      }

    }

    consultarAPI();
  }, [consultar]);

  let componente;

  if (error) {
    componente = <Error mensaje="No se ha encontrado la ciudad"/>
  } else {
    componente = <Clima resultado={resultado} />
  }

  return (
    <>
      <Header 
        titulo="Clima React App"
      />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                busqueda={busqueda}
                setBusqueda={setBusqueda}
                setConsultar={setConsultar}
              />
            </div>

            <div className="col m6 s12">
              { componente }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
