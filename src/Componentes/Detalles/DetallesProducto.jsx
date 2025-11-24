import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import productos from "../Catalogo/ProductosData";
import "./DetallesProducto.css";
import { LanguageContext } from "../LanguageContext.jsx"; // 👈 Importamos el contexto

export default function DetallesProducto() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language } = useContext(LanguageContext); // 👈 Obtenemos idioma actual

  const producto = productos.find((p) => p.id === parseInt(id));

  // Si no se encuentra el producto, mostrar mensaje
  if (!producto)
    return (
      <p>{language === "es" ? "Producto no encontrado" : "Product not found"}</p>
    );

  // Estado para controlar la imagen principal seleccionada
  const [imagenSeleccionada, setImagenSeleccionada] = useState(producto.imagen);
  const [metodoPago, setMetodoPago] = useState(null);

  // Función para cambiar la imagen principal
  const handleImagenClick = (imagen) => {
    setImagenSeleccionada(imagen);
  };

  // Calcular el precio con descuento
  const precioConDescuento = producto.precio - (producto.precio * producto.descuento) / 100;

  return (
    <div className="detalles-container">
      <button className="volver" onClick={() => navigate(-1)}>
        {language === "es" ? "⬅ Volver" : "⬅ Back"}
      </button>

      <h2>{producto[`nombre_${language}`]}</h2>

      {/* Galería de imágenes */}
      <div className="imagenes-detalle">
        <img
          src={imagenSeleccionada}
          alt={producto[`nombre_${language}`]}
          className="img-principal"
        />
        <div className="miniaturas">
          {producto.imagenesExtra.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Extra ${i}`}
              onClick={() => handleImagenClick(img)}
            />
          ))}
        </div>
      </div>

      {/* Mostrar precio con descuento */}
      <p className="precio">
        💰 ${precioConDescuento.toLocaleString()}{" "}
        <span className="descuento">
          ({producto.descuento}% {language === "es" ? "de descuento" : ""})
        </span>
      </p>
      <p className="descripcion">{producto[`descripcion_${language}`]}</p>

      {/* Métodos de pago */}
      <h4>
        {language === "es" ? "Métodos de pago:" : "Payment methods:"}
      </h4>
      <ul className="metodospago">
        {producto.metodosPago.map((m, i) => (
          <li key={i} onClick={() => setMetodoPago(m)}>
            {m}
          </li>
        ))}
      </ul>

      {/* Mostrar información de pago según el método seleccionado */}
      {metodoPago && (
        <div className="informacion-pago">
          <h4>
            {language === "es"
              ? "Escanea el QR o usa el número para pagar:"
              : "Scan the QR or use the number to pay:"}
          </h4>
          <img src="/img/Qr.png" alt="QR" />
          <p>+57 300 5953158</p>
        </div>
      )}
    </div>
  );
}
