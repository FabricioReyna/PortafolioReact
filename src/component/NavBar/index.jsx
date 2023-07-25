import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import "./Style.scss";

const NavBarCom = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const SlideNavLanding = () => {
    return
  }
  return (
    <header className="header">
      <div className="contenido-header">
        <div className="logo">
          <a href="#">Fabri</a>
        </div>
        <nav id="nav" className={`${menuOpen ? "active" : ""}`}>
          <ul className={menuOpen ? "nav-links active" : "nav-links"}>
            <li>
              <a href="#inicio" onClick={toggleMenu}>
                Inicio
        </a>
            </li>
            <li>
              <a href="#SobreMi" onClick={toggleMenu}>
                Sobre Mi
        </a>
            </li>
            <li>
              <a href="#skills" onClick={toggleMenu}>
                Habilidades
        </a>
            </li>
            <li>
              <a href="#cv" onClick={toggleMenu}>
                Curriculum
        </a>
            </li>
            <li>
              <a href="#Protafolio" onClick={toggleMenu}>
                Portafolio
        </a>
            </li>
            <li>
              <a href="#Contacto" onClick={toggleMenu}>
                Contacto
        </a>
            </li>
          </ul>
        </nav>
        <div className="nav-container-resposive" onClick={toggleMenu}>
          <FaBars />
        </div>
      </div>
    </header>
  );
};

export default NavBarCom;
