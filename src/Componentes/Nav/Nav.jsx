import React, { useState } from "react";
import "./Nav.css";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      {/* Fondo oscuro detrás del menú */}
      <div
        className={`sidebar-overlay ${isOpen ? "show" : ""}`}
        onClick={closeMenu}
      ></div>

      <nav className={`sidebar ${isOpen ? "open" : ""}`}>
        <h2>INNOVATION</h2>
        <ul>
          <li>
            <a href="/" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="/informacion" onClick={closeMenu}>
              Información
            </a>
          </li>
          <li>
            <a href="/catalogo" onClick={closeMenu}>
              Catálogo
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
