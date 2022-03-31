import React from "react";

const HistorialServicios = () => {
  return (
    <div className="container">
      <h4 className="text-center mt-5">Historial de Servicios</h4>
      <div className="mt-5 mb-3">
        <div className="input-group  d-flex justify-content-center">
          <div className="form-outline">
            <input type="search" id="form1" className="form-control" />
            <label className="form-label" htmlFor="form1">
              Buscar Servicio
            </label>
          <button type="button" className="btn btn-primary">
            <i className="fas fa-search" />
          </button>
          </div>
        </div>
      </div>

      <div className="container d-flex justify-content-center">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title text-center">Base: xxxx</h5>
            <div className="card-text muted">Fecha</div>
            <br />
            <p className="card-text">
              Detalle: Some quick example text to build on the card title and
              make up the bulk of the card's content.
            </p>
            <div className="d-flex justify-content-center">
              <a href="#" className="btn btn-primary">
                Ver Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistorialServicios;
