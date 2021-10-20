import React,{Fragment} from 'react';
import Proptypes from 'prop-types'

const Cancion = ({letra}) => {

    if(letra.length === 0) return null;

    return (
        <Fragment>
            <h2>Letras de Canciones</h2>
            <p className="letra">{letra}</p>
        </Fragment>
    );
}
Cancion.propTypes = {
    letra: Proptypes.string.isRequired
}  
export default Cancion;