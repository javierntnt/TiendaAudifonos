import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import productos from "../Catalogo/ProductosData";
import "./DetallesProducto.css";

export default function DetallesProducto() {
  const { id } = useParams();
  const navigate = useNavigate();
  const producto = productos.find((p) => p.id === parseInt(id));

  if (!producto) return <p>Producto no encontrado</p>;

  return (
    <div className="detalles-container">
      <button className="volver" onClick={() => navigate(-1)}>⬅ Volver</button>
      <h2>{producto.nombre}</h2>

      <div className="imagenes-detalle">
        <img src={producto.imagen} alt={producto.nombre} className="img-principal" />
        <div className="miniaturas">
          {producto.imagenesExtra.map((img, i) => (
            <img key={i} src={img} alt={`Extra ${i}`} />
          ))}
        </div>
      </div>

      <p className="precio">💰 ${producto.precio.toLocaleString()}</p>
      <p className="descripcion">{producto.descripcion}</p>

      <h4>Métodos de pago:</h4>
      <ul className="metodospago">
        {producto.metodosPago.map((m, i) => (
          <li key={i}>{m}</li>
        ))}
      </ul>
    </div>
  );
}
