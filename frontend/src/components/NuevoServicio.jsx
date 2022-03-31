import React, { useState } from "react";

function NuevoServicio() {
  const [formServicio, setFormServicio] = useState({
    hora: "",
    tren: "",
    socio: "",
    locomotora: "",
    vehiculos: "",
  });

  const servicio = async (e) => {
    e.preventDefault();
    let { hora, tren, socio, locomotora, vehiculos } = formServicio;
    try {
      const respuesta = await fetch("http://localhost:4000/crear", {
        method: "POST",
        body: JSON.stringify({ hora, tren, socio, locomotora, vehiculos }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await respuesta.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container d-flex justify-content-center">
      <form id="formRegistro" onSubmit={servicio} action="">
        <fieldset>
          <legend className="text-center mt-5">
            <h4>Nuevo Servicio</h4>
            </legend>
      <fieldset>
            <legend className="mt-4">Servicio</legend>
         
          </fieldset>

          <div className="form-group">
            <label htmlFor="hora" className="form-label mt-4">
              Hora
            </label>
            <input
              type="number"
              onChange={(e) =>
                setFormServicio({ ...formServicio, hora: e.target.value })
              }
              value={formServicio.hora}
              className="form-control"
              id="hora"
              name="hora"
              placeholder="Hora"
              style={{width:'500px'}}
            />
          </div>

          <div className="form-group">
            <label htmlFor="tren" className="form-label mt-4">
              Tren
            </label>
            <input
              type="number"
              onChange={(e) =>
                setFormServicio({ ...formServicio, tren: e.target.value })
              }
              value={formServicio.tren}
              className="form-control"
              id="tren"
              name="tren"
              placeholder="Tren"
            />
          </div>

          <div className="form-group">
            <label htmlFor="Socio" className="form-label mt-4">
              Socio
            </label>
            <input
              type="text"
              onChange={(e) =>
                setFormServicio({ ...formServicio, socio: e.target.value })
              }
              value={formServicio.socio}
              className="form-control"
              id="socio"
              name="socio"
              placeholder="socio"
            />
          </div>

          <div className="form-group">
            <label htmlFor="locomotora" className="form-label mt-4">
              Locomotora
            </label>
            <input
              type="number"
              onChange={(e) =>
                setFormServicio({ ...formServicio, locomotora: e.target.value })
              }
              value={formServicio.locomotora}
              className="form-control"
              id="locomotora"
              name="locomotora"
              placeholder="locomotora"
            />
          </div>

          <div className="form-group">
            <label htmlFor="number" className="form-label mt-4">
              Vehiculos
            </label>
            <input
              type="number"
              onChange={(e) =>
                setFormServicio({ ...formServicio, vehiculos: e.target.value })
              }
              value={formServicio.vehiculos}
              className="form-control"
              id="vehiculos"
              name="vehiculos"
              placeholder="vehiculos"
            />
          </div>
          <br />
          <button type="submit" className="btn btn-primary">
            Guardar
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default NuevoServicio;
