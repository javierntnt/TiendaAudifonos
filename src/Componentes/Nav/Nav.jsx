import React, { useState, useContext } from "react";
import "./Nav.css";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { LanguageContext } from "../LanguageContext.jsx"; // 👈 Importamos el contexto

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useContext(LanguageContext); // 👈 Obtenemos idioma actual

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // 👇 Diccionario de textos
  const text = {
    en: {
      brand: (
        <>
          <span className="color-azul">INN</span>
          <span className="color-rojo">OVA</span>
          <span className="color-blanco">TION</span>
        </>
      ),
      home: "Home",
      info: "Information",
      catalog: "Catalog",
      phone: "📞 +57 300 123 4567",
    },
    es: {
      brand: (
        <>
          <span className="color-azul">INN</span>
          <span className="color-rojo">OVA</span>
          <span className="color-blanco">CION</span>
        </>
      ),
      home: "Inicio",
      info: "Información",
      catalog: "Catálogo",
      phone: "📞 +57 300 123 4567",
    },
  };

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
        <h2>{text[language].brand}</h2>

        <ul>
          <li>
            <a href="/" onClick={closeMenu}>
              {text[language].home}
            </a>
          </li>
          <li>
            <a href="/informacion" onClick={closeMenu}>
              {text[language].info}
            </a>
          </li>
          <li>
            <a href="/catalogo" onClick={closeMenu}>
              {text[language].catalog}
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
            href="https://wa.me/message/5LFIWK57X3R4I1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
        <p className="sidebar-contact">{text[language].phone}</p>
      </nav>
    </>
  );
}
