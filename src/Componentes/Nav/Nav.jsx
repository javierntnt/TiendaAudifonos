import React, { useState } from "react";
import "./Nav.css";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

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

        <hr className="sidebar-divider" />

        <div className="sidebar-socials">
          <a
            href="https://www.instagram.com/j_j_innovations?igsh=MTBkMnlrbDFiNDQ4Mw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/573001234567"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
        <p className="sidebar-contact">📞 +57 300 123 4567</p>
      </nav>
    </>
  );
}
