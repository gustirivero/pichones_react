import React from 'react';
import '../hojas-de-estilo/Jugadores.css'

function Jugadores(props){
  return(
<div className='contenedor-jugadores'>
<img className='imagen-jugador' 
src={require(`../imagenes/${props.imagen}.jfif`)}
alt='foto del jugador'/>
<div className='contenedor-texto-jugadores'>
<p className='nombre-jugador'>{props.nombre}</p>
<p className='posicion-jugador'>{props.posicion}</p>
<p className='caracteristicas-jugador'>{props.caracteristicas}</p>
</div>
</div>

  );
}

export default Jugadores;