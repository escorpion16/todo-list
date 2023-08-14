import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'


export const Header = ({mostrarCompletadas, cambiarMostrarCompletadas}) => {
  return (
    <header className='header'>
        <h1 className='header__titulo'>Lista de tareas</h1>
        {mostrarCompletadas ?
          <button 
            className='header__boton'
            onClick={() => cambiarMostrarCompletadas(!mostrarCompletadas)}
          >
            No mostrar completadas
            <FontAwesomeIcon icon={faEyeSlash} className='header__icono-boton'/>
          </button>
        : 
          <button 
            className='header__boton'
            onClick={() => cambiarMostrarCompletadas(!mostrarCompletadas)}
          >
            Mostrar completadas
            <FontAwesomeIcon icon={faEye} className='header__icono-boton'/>
          </button>
        }
        
    </header>
  )
}
