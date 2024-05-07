// Footer.js
import React from "react";
import prontera from "../../images/logo-prontera-sinfondo.png";


function Footer() {
  return (
    <>
      {/* Contenido del pie de página */}
      <footer className="footer">
        <div className="iconos">
        <i className="bx bxl-facebook-circle bx-md"></i>
        <i className="bx bxl-instagram bx-md"></i>
        <i className="bx bxl-whatsapp bx-md"></i>
        </div>
        <img className="prontera" src={prontera} alt="" />
        <b>
          <p>My School APP © 2024.</p>
        </b>
      </footer>
    </>
  );
}

export default Footer;
