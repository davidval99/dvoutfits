import React, { useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "../CssFiles/NavbarAdmin.css";
import "../CssFiles/SocialFollow.css";


function NavbarAdmin() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
      <>
        <nav className="navbar">
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a href="/ProductCrud" className="nav-links"> Productos</a>
            </li>
            <li className="nav-item">
              <a href="/PromoCrud" className="nav-links"> Promociones</a>
            </li>
            <li className="nav-item">
              <a href="/AdvertisementCrud" className="nav-links"> Anuncios</a>
            </li>
            <li className="nav-item">
              <a href="/Reportes" className="nav-links"> Reportes</a>
            </li>
          </ul>
        </nav>
      </>
  );
}

export default NavbarAdmin;
