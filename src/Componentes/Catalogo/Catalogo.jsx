import React, { useState } from "react";
import productos from "./ProductosData";
import { useNavigate } from "react-router-dom";
import "./Catalogo.css";

export default function Catalogo() {
  const [filtro, setFiltro] = useState("");
  const [categoria, setCategoria] = useState("Todos");
  const navigate = useNavigate();

  const categorias = ["Todos", "N4", "N5", "Airpods", "Bafle"];

  const productosFiltrados = productos.filter(
    (p) =>
      (categoria === "Todos" || p.categoria === categoria) &&
      p.nombre.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="catalogo-container">
      <h1>Catálogo</h1>

      {/* Barra de búsqueda */}
      <div className="barra-busqueda">
        <input
          type="text"
          placeholder="Buscar producto..."
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
        {productosFiltrados.map((p) => (
          <div
            key={p.id}
            className="producto-card"
            onClick={() => navigate(`/detalles/${p.id}`)}
          >
            <img src={p.imagen} alt={p.nombre} />
            <h3>{p.nombre}</h3>
            <p>${p.precio.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
