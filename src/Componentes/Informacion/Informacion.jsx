import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext.jsx"; // 👈 Importamos el contexto

export default function Informacion() {
  const { language } = useContext(LanguageContext); // 👈 Obtenemos idioma actual

  const containerStyle = {
    marginLeft: "240px",
    padding: "40px",
    background: "url('https://via.placeholder.com/1500') no-repeat center center",
    backgroundSize: "cover",
    minHeight: "100vh",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    position: "relative",
  };

  const logoStyle = {
    position: "absolute",
    top: "20px",
    left: "40px",
    width: "150px",
    height: "auto",
  };

  const titleStyle = {
    fontSize: "3rem",
    fontWeight: "bold",
    marginTop: "100px",
  };

  const paragraphStyle = {
    fontSize: "1.2rem",
    maxWidth: "800px",
    margin: "20px",
  };

  const boxStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "20px",
    borderRadius: "8px",
    width: "100%",
    maxWidth: "1000px",
  };

  // 👇 Diccionario de textos
  const text = {
    en: {
      aboutTitle: "About Us",
      aboutDescription:
        "We are a technology company committed to offering the best products and services at the best market prices. Our mission is to provide innovative solutions that improve your daily life, always maintaining the highest standards of quality and commitment.",
      missionTitle: "Our Mission",
      missionDescription:
        "In our company, we work to create a positive impact on society through technology. We believe in constant innovation and continuous improvement to exceed our customers' expectations.",
    },
    es: {
      aboutTitle: "Sobre Nosotros",
      aboutDescription:
        "Somos una empresa de tecnología con el objetivo de brindarte los mejores productos y servicios con los mejores precios del mercado para tu satisfacción. Nuestra misión es ofrecer soluciones innovadoras que mejoren tu vida diaria, siempre manteniendo los estándares más altos de calidad y compromiso.",
      missionTitle: "Nuestra Misión",
      missionDescription:
        "En nuestra empresa, trabajamos para crear un impacto positivo en la sociedad a través de la tecnología. Creemos en la innovación constante y en la mejora continua para superar las expectativas de nuestros clientes.",
    },
  };

  return (
    <>
      <style>
        {`
          /* Ajustes responsivos */
          @media (max-width: 1024px) {
            div[data-container] {
              margin-left: 0 !important;
              padding: 30px !important;
            }
          }

          @media (max-width: 768px) {
            h1[data-title] {
              font-size: 2.2rem !important;
              margin-top: 60px !important;
            }

            p[data-paragraph] {
              font-size: 1rem !important;
              margin: 15px !important;
              max-width: 90% !important;
            }

            img[data-logo] {
              width: 100px !important;
              top: 15px !important;
              left: 20px !important;
            }

            div[data-box] {
              padding: 15px !important;
              width: 90% !important;
            }
          }

          @media (max-width: 480px) {
            h1[data-title] {
              font-size: 1.8rem !important;
            }

            p[data-paragraph] {
              font-size: 0.95rem !important;
            }

            img[data-logo] {
              width: 80px !important;
            }
          }
        `}
      </style>

      <div data-container style={containerStyle}>
        {/* Logo */}
        <div style={{ position: "absolute", top: "20px", left: "40px" }}>
          <img
            data-logo
            src="/img/icono.png"
            alt="Logo"
            style={logoStyle}
          />
        </div>
        <h1 data-title style={titleStyle}>
          {text[language].aboutTitle}
        </h1>
        <p data-paragraph style={paragraphStyle}>
          {text[language].aboutDescription}
        </p>

        <div data-box style={boxStyle}>
          <h2 style={{ fontSize: "2rem", marginBottom: "10px" }}>
            {text[language].missionTitle}
          </h2>
          <p>{text[language].missionDescription}</p>
        </div>
      </div>
    </>
  );
}
