import logo from './logo.svg';
import './App.css';
import Jugadores from './componentes/Jugadores'
import './hojas-de-estilo/Jugadores.css'
import './objetos/Jugador'

function App() {
  return (
    <div className="App">
       <nav className='nav-bar'>
       <h1 >Plantel de Pichones FC</h1>
       </nav>
      <div className='contenedor-principal'>
     
  
    <Jugadores
    nombre = 'Gustavo Rivero'
    posicion = 'Delantero'
    caracteristicas = 'hisahdisa'
    imagen = 'gustavo_rivero'
    />
<Jugadores
    nombre = 'Nicolas Fantone'
    posicion = 'Defensor'
    caracteristicas = 'hisahdisa'
    imagen = 'nicolas_fantone'
    />

<Jugadores
    nombre = 'Ariel Caggiano'
    posicion = 'Mediocampista'
    caracteristicas = 'hisahdisa'
    imagen = 'ariel_caggiano'
    />
    </div>
    </div>
  );
}

export default App;
