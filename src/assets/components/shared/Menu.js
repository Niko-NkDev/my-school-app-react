// Menu.js
import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div className="Menu">
      {/* Aquí va el contenido del menú */}
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/registro">Registro</Link></li>
          {/* Otros elementos del menú */}
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
