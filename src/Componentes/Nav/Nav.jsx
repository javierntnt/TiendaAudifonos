import React, { useState } from "react";
import "./Nav.css";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

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
