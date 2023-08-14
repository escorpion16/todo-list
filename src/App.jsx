import { useEffect, useState } from 'react';
import './App.css';
import {Header} from './components/Header';
import { FormularioTareas } from './components/FormularioTareas';
import { ListaTareas } from './components/ListaTareas';

function App() {
  // Obtenemos las tareas guardadas de localstorage
  const tareasGuardadas = 
  localStorage.getItem('tareas') ? JSON.parse(localStorage.getItem('tareas')) : []

  //Establecemos el estado de las tareas
  const [tareas, setTareas] = useState(tareasGuardadas);

  // Guardando el estado dentro del localstorage
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas])

  //Accedemos a localStorage y comprobamos si mostrarCompletadas es null
  let configMostrarCompletadas = '';
  if(localStorage.getItem('mostrarCompletadas') === null){
    configMostrarCompletadas = true;
  } else {
    configMostrarCompletadas = localStorage.getItem('mostrarCompletadas') ==='true';
  }

  // El estado de mostrarCompletadas
  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(configMostrarCompletadas);

  useEffect(() => {
    localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString());
  }, [mostrarCompletadas]);

  return (
    <div className='contenedor'>
      <Header 
        mostrarCompletadas={mostrarCompletadas}  
        cambiarMostrarCompletadas={cambiarMostrarCompletadas} 
      />    
      <FormularioTareas tareas={tareas} setTareas={setTareas} /> 
      <ListaTareas 
        tareas={tareas} 
        setTareas={setTareas} 
        mostrarCompletadas={mostrarCompletadas}
      /> 
    </div>
  )
}

export default App
