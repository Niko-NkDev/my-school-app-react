// Menu.js
import React from "react";
import logo from "../../images/escudo-back-transparent.png";
import { Link } from "react-router-dom";
import "./App.css";

function Menu() {
  return (
    <div className="menu">
      {/* Aquí va el contenido del menú */}
      <div className="logo-menu">
          <Link to="/">
            {" "}
            <img className="logo" src={logo} alt="" />
          </Link>
        </div>
      <div className="botones-menu">
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/registro">Registro</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Menu;
