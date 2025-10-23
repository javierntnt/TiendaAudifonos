import React from "react";
import "./Home.css";
//import logo from "../assets/logo.png";// // imagen de tu tienda

export default function Home() {
  return (
    <div className="home">
      <h1 className="eslogan">¡El mejor sonido al mejor precio!</h1>
          {/* Este es un comentario dentro del JSX */}
      {/*<img src={logo} alt="Logo Tienda Audífonos" className="imagen-home" />*/}
    </div>
  );
}
