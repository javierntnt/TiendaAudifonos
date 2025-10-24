import React from "react";

export default function Informacion() {
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
            src="/img/icono.png" // asegúrate que la ruta sea correcta en tu proyecto
            alt="Logo"
            style={logoStyle}
          />
        </div>

        <h1 data-title style={titleStyle}>
          Sobre Nosotros
        </h1>
        <p data-paragraph style={paragraphStyle}>
          Somos una empresa de tecnología con el objetivo de brindarte los
          mejores productos y servicios con los mejores precios del mercado
          para tu satisfacción. Nuestra misión es ofrecer soluciones innovadoras
          que mejoren tu vida diaria, siempre manteniendo los estándares más altos
          de calidad y compromiso.
        </p>

        <div data-box style={boxStyle}>
          <h2 style={{ fontSize: "2rem", marginBottom: "10px" }}>
            Nuestra Misión
          </h2>
          <p>
            En nuestra empresa, trabajamos para crear un impacto positivo en la
            sociedad a través de la tecnología. Creemos en la innovación constante
            y en la mejora continua para superar las expectativas de nuestros
            clientes.
          </p>
        </div>
      </div>
    </>
  );
}
