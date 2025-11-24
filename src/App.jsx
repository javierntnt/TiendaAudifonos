import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Componentes/Nav/Nav";
import Home from "./Componentes/Home/Home";
import Informacion from "./Componentes/Informacion/Informacion";
import Catalogo from "./Componentes/Catalogo/Catalogo";
import Detalles from "./Componentes/Detalles/DetallesProducto";
import SupportPage from "./supourt/page.jsx"; // 👈 Importa el componente SupportPage
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/informacion" element={<Informacion />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/detalles/:id" element={<Detalles />} />
        <Route path="/supourt" element={<SupportPage />} /> 
      </Routes>
    </>
  );
}

export default App;
