import React, { useState, useContext } from "react";
import productos from "./ProductosData";
import { useNavigate } from "react-router-dom";
import "./Catalogo.css";
import img3 from "../../assets/colombia.png";
import { LanguageContext } from "../LanguageContext.jsx";

export default function Catalogo() {
  const [filtro, setFiltro] = useState("");
  const [categoria, setCategoria] = useState("Todos");
  const navigate = useNavigate();
  const { language } = useContext(LanguageContext);

  const categorias = language === "es"
    ? ["Todos", "N4", "N5", "Airpods", "Bafle"]
    : ["All", "N4", "N5", "Airpods", "Speaker"];

  const productosFiltrados = productos.filter(
    (p) =>
      (categoria === "Todos" || categoria === "All" || p.categoria === categoria) &&
      p[`nombre_${language}`].toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="catalogo-container">
      {/* Logo fijo en esquina inferior derecha */}
      <img
        src={img3}
        alt="Bandera de Colombia"
        className="bandera-colombia"
      />
      {/* H1 multicolor */}
      <h1 className="catalogo-title">
        {language === "es" ? (
          <>
            <span className="color-azul">Catálogo</span>{" "}
            <span className="color-rojo">Colombiano</span>{" "}
            <span className="color-blanco">2025</span>
          </>
        ) : (
          <>
            <span className="color-azul">Catalog</span>{" "}
            <span className="color-rojo">Colombian</span>{" "}
            <span className="color-blanco">2025</span>
          </>
        )}
      </h1>
      {/* Barra de búsqueda */}
      <div className="barra-busqueda">
        <input
          type="text"
          placeholder={language === "es" ? "Buscar producto..." : "Search product..."}
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        />
      </div>

      {/* Categorías */}
      <div className="categorias">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoria(cat)}
            className={categoria === cat ? "activo" : ""}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid de productos */}
      <div className="grid-productos">
        {productosFiltrados.map((p) => {
          const precioConDescuento = p.precio - (p.precio * p.descuento) / 100;
          return (
            <div
              key={p.id}
              className="producto-card"
              onClick={() => navigate(`/detalles/${p.id}`)}
            >
              <img src={p.imagen} alt={p[`nombre_${language}`]} />
              <h3>{p[`nombre_${language}`]}</h3>
              <p>
                ${precioConDescuento.toLocaleString()}{" "}
                <span className="descuento">
                  ({p.descuento}% {language === "es" ? "de descuento" :""})
                </span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
