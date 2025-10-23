import React from "react";
import { useNavigate } from "react-router-dom"; // 👈 Importar hook de navegación
import "./Home.css";

import img1 from "../../assets/bafles_1.png";
import img2 from "../../assets/Airpors_5.png";

export default function Home() {
  const navigate = useNavigate(); // 👈 Inicializamos el hook

  return (
    <div className="home-container">
      <div className="home-section left">
        <img src={img1} alt="Producto destacado" className="home-img" />
      </div>

      <div className="home-section center">
        <h1 className="home-title">J&J INNOVATION</h1>
        <p className="home-subtitle">LOS MEJORES PRODUCTOS Y ACCESORIOS</p>

        {/* 👇 Al hacer clic, navega hacia /informacion */}
        <button
          className="home-btn"
          onClick={() => navigate("/Informacion")}
        >
          CONOCE MÁS
        </button>
      </div>

      <div className="home-section right">
        <img src={img2} alt="Otro producto" className="home-img" />
      </div>
    </div>
  );
}
