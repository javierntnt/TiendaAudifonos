import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import productos from "../Catalogo/ProductosData";
import "./DetallesProducto.css";

export default function DetallesProducto() {
  const { id } = useParams();
  const navigate = useNavigate();
  const producto = productos.find((p) => p.id === parseInt(id));

  // Si no se encuentra el producto, mostrar mensaje
  if (!producto) return <p>Producto no encontrado</p>;

  // Estado para controlar la imagen principal seleccionada
  const [imagenSeleccionada, setImagenSeleccionada] = useState(producto.imagen);
  const [metodoPago, setMetodoPago] = useState(null);

  // Función para cambiar la imagen principal
  const handleImagenClick = (imagen) => {
    setImagenSeleccionada(imagen);
  };

  return (
    <div className="detalles-container">
      <button className="volver" onClick={() => navigate(-1)}>⬅ Volver</button>
      <h2>{producto.nombre}</h2>

      {/* Galería de imágenes */}
      <div className="imagenes-detalle">
        <img src={imagenSeleccionada} alt={producto.nombre} className="img-principal" />
        <div className="miniaturas">
          {producto.imagenesExtra.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Extra ${i}`}
              onClick={() => handleImagenClick(img)} // Cambia la imagen principal al hacer clic
            />
          ))}
        </div>
      </div>

      <p className="precio">💰 ${producto.precio.toLocaleString()}</p>
      <p className="descripcion">{producto.descripcion}</p>

      {/* Métodos de pago */}
      <h4>Métodos de pago:</h4>
      <ul className="metodospago">
        {producto.metodosPago.map((m, i) => (
          <li
            key={i}
            onClick={() => setMetodoPago(m)} // Cambia el método de pago seleccionado al hacer clic
          >
            {m}
          </li>
        ))}
      </ul>

      {/* Mostrar información de pago según el método seleccionado */}
      {metodoPago && (
        <div className="informacion-pago">
          {metodoPago === "Nequi" && (
            <div>
              <h4>Escanea el QR o usa el número para pagar:</h4>
              <img src="/img/qr-nequi.png" alt="QR Nequi" />
              <p>123456789</p> {/* Número de cuenta de Nequi */}
            </div>
          )}
          {metodoPago === "Bancolombia" && (
            <div>
              <h4>Escanea el QR o usa el número para pagar:</h4>
              <img src="/img/qr-bancolombia.png" alt="QR Bancolombia" />
              <p>987654321</p> {/* Número de cuenta de Bancolombia */}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
