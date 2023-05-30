import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/layout/navbar/Navbar';
import { useState } from 'react';
import ItemListContainer from './components/pages/itemListContainer/ItemListContainer';



function App() {

  const [montado, setMontado] = useState(false);
  const [nombre, setNombre] = useState("German");
  console.log(nombre) //Al presionar el boton, setNombre modifica el nombre a Mancilla
  return(
    <div>
      <Navbar/>

      {montado && <ItemListContainer res={nombre}/>}

      <button onClick={() => setMontado(!montado)}>Montar componente</button>
      <button onClick={() => setNombre("Mancilla")}>Cambiar nombre</button>
    </div>
  );
}

export default App;