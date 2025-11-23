import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

import img1 from "../../assets/Airpors_8.png";
import img2 from "../../assets/Airpors_7.png";
import img3 from "../../assets/colombia.png";
import { LanguageContext } from "../LanguageContext.jsx"; // 👈 Importamos el contexto

export default function Home() {
  const navigate = useNavigate();
  const { language, toggleLanguage } = useContext(LanguageContext);

  // 👇 Diccionario de textos
  const text = {
    en: {
      title: "J&J INNOVATION",
      subtitle: (
        <>
          <span className="color-azul">CONNECT</span> WITH WHAT YOU{" "}
          <span className="color-rojo">LOVE.</span> HEAR THE{" "}
          <span className="color-blanco">DIFFERENCE.</span>
        </>
      ),
      button: "LEARN MORE",
      switch: "ESPAÑOL",
    },
    es: {
      title: "J&J INNOVACIÓN",
      subtitle: (
        <>
          <span className="color-azul">CONECTA</span> CON LO QUE{" "}
          <span className="color-rojo">AMAS.</span> ESCUCHA LA{" "}
          <span className="color-blanco">DIFERENCIA.</span>
        </>
      ),
      button: "CONOCE MÁS",
      switch: "ENGLISH",
    },
  };

  return (
    <div className="home-container">
      {/* Logo fijo en esquina inferior derecha */}
      <img
        src={img3}
        alt="Bandera de Colombia"
        className="bandera-colombia"
      />

      <div className="home-section left">
        <img src={img1} alt="Producto destacado" className="home-img" />
      </div>

      <div className="home-section center">
        <h1 className="home-title">{text[language].title}</h1>
        <p className="home-subtitle">{text[language].subtitle}</p>

        {/* 👇 Botón que navega a /informacion */}
        <button className="home-btn" onClick={() => navigate("/Informacion")}>
          {text[language].button}
        </button>

        {/* 👇 Botón para cambiar idioma */}
        <button className="lang-btn" onClick={toggleLanguage}>
          {text[language].switch}
        </button>
      </div>

      <div className="home-section right">
        <img src={img2} alt="Otro producto" className="home-img" />
      </div>
    </div>
  );
}
