import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Registro() {
    
const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    base: "", 
    password: ""
})
const navigate = useNavigate()

const infoSubmit = async (e) => {
    e.preventDefault()
    let {nombre, apellido, dni, base, password} = formData
    try {
        const respuesta = await fetch('http://localhost:4000/crear', {
            method: "POST",
            body: JSON.stringify({nombre, apellido, dni, base,password}),
            headers: {'Content-Type': 'application/json'}
        })

        const data = await respuesta.json()
        console.log(data)

        if(data.lenght !== 0) {
          console.log(data[0])
          navigate("/panel")
      }

    }catch(err) {
        console.error(err)
    }

}

    return (
      <div className="container d-flex justify-content-center">
        <form id="formRegistro" onSubmit={infoSubmit} action="">
                <fieldset>
                <legend className="text-center mt-5"> 
                  <h4>Registro</h4>
                  </legend>
    
        <div className="form-group">
          <label htmlFor="nombre" className="form-label mt-4">Nombre</label>
          <input type="text" onChange={(e) => setFormData({...formData, nombre: e.target.value})} value= {formData.nombre} className="form-control" id="nombre" name="nombre" placeholder="nombre" style={{width:'400px'}}/>
        </div>
        
        <div className="form-group">
          <label htmlFor="apellido" className="form-label mt-4">Apellido</label>
          <input type="text" onChange={(e) => setFormData({...formData, apellido: e.target.value})} value = {formData.apellido} className="form-control" id="apellido" name="apellido" placeholder="npellido" />
        </div>
        
        <div className="form-group">
          <label htmlFor="dni" className="form-label mt-4">DNI</label>
          <input type="number" onChange={(e) => setFormData({...formData, dni: e.target.value})} value={formData.dni} className="form-control" id="dni" name="dni" placeholder="dni" />
        </div>

        <div className="form-group">
          <label htmlFor="base" className="form-label mt-4">Base</label>
          <input type="text" onChange={(e) => setFormData({...formData, base: e.target.value})} value={formData.base} className="form-control" id="base" name = "base"  placeholder="base" />
         
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label mt-4">Contraseña</label>
          <input type="password" onChange={(e) => setFormData({...formData, password: e.target.value})} value={formData.password} className="form-control" id="password" name="password" placeholder="contraseña" />
        </div><br />
<div className="d-flex justify-content-evenly">
    <button type="submit" className="btn btn-primary">Enviar</button>
<Link to={'/'}>
<button className="btn btn-primary">Volver</button>
</Link>
</div>
  </fieldset>
</form>
        </div>
    )
}

export default Registro;