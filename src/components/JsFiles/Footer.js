import React from "react";
import "../CssFiles/Footer.css";
import SocialFollow from "./SocialFollow";
import Contact from "./ContactCRUD";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="column">
            <h4>Contacto</h4>
            <ui className="list-unstyled">
              <dt>Teléfono:  +506 84758345</dt>
              <br></br>
              <dt>E-mail: info@dvoutfits.com</dt>
              <br></br>
              <a href="Contact">Enviar mensaje</a>
            </ui>
          </div>
          {/* Column2 */}
          <div className="column">
            
            <ui className="list-unstyled">
              <SocialFollow />
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} DV Outfits| Derechos Reservados |
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;