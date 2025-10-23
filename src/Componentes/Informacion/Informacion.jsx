import React from "react";

export default function Informacion() {
  return (
    <div
      style={{
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
      }}
    >
      {/* Logo */}
      <div style={{ position: "absolute", top: "20px", left: "40px" }}>
        <img
          src="public/img/icono.png"  // Sustituye esta URL con la del logo real
          alt="Logo"
          style={{ width: "150px", height: "auto", alignItems: "center" }}
        />
      </div>

      <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginTop: "100px" }}>
        Sobre Nosotros
      </h1>
      <p style={{ fontSize: "1.2rem", maxWidth: "800px", margin: "20px" }}>
        Somos una empresa de tecnología con el objetivo de brindarte los
        mejores productos y servicios con los mejores precios del mercado para
        tu satisfacción. Nuestra misión es ofrecer soluciones innovadoras que
        mejoren tu vida diaria, siempre manteniendo los estándares más altos de
        calidad y compromiso.
      </p>
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          padding: "20px",
          borderRadius: "8px",
          width: "100%",
          maxWidth: "1000px",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "10px" }}>Nuestra Misión</h2>
        <p>
          En nuestra empresa, trabajamos para crear un impacto positivo en la
          sociedad a través de la tecnología. Creemos en la innovación constante
          y en la mejora continua para superar las expectativas de nuestros
          clientes.
        </p>
      </div>
    </div>
  );
}
