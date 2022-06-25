import React from 'react';
import '../hojas-de-estilo/Testimonio.css';

//definición de componente funcional
function Testimonio (props){
  return( 
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio'
        src={require(`../imagenes/${props.imagen}.jpg`)}
        alt={props.imagen}
        />
        <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'>
            <strong>{props.nombre}</strong>
            </p>
          <p className='cargo-testimonio'>{props.cargo}</p>
          <p className='texto-testimonio'>{props.testimonio}</p>
        </div>
    </div>
  );
}

//this is important in order to use the component outhere...
export default Testimonio;