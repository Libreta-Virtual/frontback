import React from 'react'
import { Link } from 'react-router-dom'

const PanelUsuario = () => {
  return (
    <div className="container d-flex justify-content-center mt-5">
    <div className='panel'>
      <br/>
      <div class="d-grid gap-2 text-center">
        <br/>
        <Link to="/nuevo-servicio">
          <button class="btn btn-lg btn-primary mb-5" type="button">
            Nuevo Servicio
          </button>
        </Link>
        <Link to="/historial-de-servicios">
          <button class="btn btn-lg btn-primary" type="button">
            Historial de Servicios
          </button>
        </Link>
      </div>
      <div className="text-center">
   <button class="btn btn-lg btn-primary mt-5" type="button">Cerrar Sesión</button>
      </div>
   </div>
    </div>
  )
}

export default PanelUsuario