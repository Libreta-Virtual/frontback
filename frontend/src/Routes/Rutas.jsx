import React from 'react'
import {Routes, Route} from "react-router-dom"
import Login from "../components/Login"
import Registro from "../components/Registro"
import NuevoServicio from "../components/NuevoServicio"
import HistorialServicios from "../components/HistorialServicios"
import PanelUsuario from '../components/PanelUsuario'



export const Rutas = () => {
  return (
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="registro" element={<Registro/>}/>
        <Route path="panel" element={<PanelUsuario/>}/>
        <Route path="nuevo-servicio" element={<NuevoServicio/>}/>
        <Route path="historial" element={<HistorialServicios/>}/>       
    </Routes>
  )
}
