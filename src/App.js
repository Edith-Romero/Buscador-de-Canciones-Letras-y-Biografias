import React,{Fragment,useState,useEffect} from 'react';
import Formulario from './Components.jsx/Formulario';
import Cancion from './Components.jsx/Cancion';
import Info from './Components.jsx/Info';
import axios from 'axios';

function App() {

  // Definir el State
  const [busquedaletra, setBusquedaLetra] = useState({});
  const [letra,setLetra] = useState('');
  const [info,setInfo] = useState({});
  
  useEffect(()=>{
    // Prevenir que el objeto este vacio
    if(Object.keys(busquedaletra).length === 0) return;

    const consultarApiLetra = async() =>{

      const {artista,cancion} = busquedaletra;
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
      const url2= `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`
      // Con una promise hago el llamado a las dos api de una sola vez
      const [letra,informacion] = await Promise.all([
        axios(url),
        axios(url2)
      ]);

      setLetra(letra.data.lyrics);
      setInfo(informacion.data.artists[0]);
    }
    consultarApiLetra();

  },[busquedaletra,info])

  return (
    <Fragment>
      <Formulario
        setBusquedaLetra={setBusquedaLetra}
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col md-6">
            <Info
              info={info}
            />
          </div>
          <div className="col md-6">
            <Cancion
              letra={letra}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
