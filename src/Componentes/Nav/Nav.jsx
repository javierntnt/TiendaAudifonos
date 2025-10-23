import React, { useState, useEffect } from "react";
import "./Nav.css";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("nav-open");
    } else {
      document.body.classList.remove("nav-open");
    }
  }, [isOpen]);

  return (
    <>
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      <nav className={`sidebar ${isOpen ? "open" : ""}`}>
        <h2>INNOVATION</h2>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/informacion">Información</a></li>
          <li><a href="/catalogo">Catálogo</a></li>
        </ul>
      </nav>
    </>
  );
}
