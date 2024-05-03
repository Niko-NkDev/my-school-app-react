// Registro.js
// import { Link } from "react-router-dom";
import React from 'react';

function Registro() {
  return (
    <div className="Registro">
      {/* Contenido del formulario de registro */}
      <h2>Regístrate</h2>
      <form>
        {/* Campos del formulario */}
        <label>Nombre:</label>
        <input type="text" />
        {/* Otros campos del formulario */}
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Registro;
