import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Componentes/Nav/Nav";
import Home from "./Componentes/Home/Home";
import Informacion from "./Componentes/Informacion/Informacion";
import Catalogo from "./Componentes/Catalogo/Catalogo";
import Detalles from "./Componentes/Detalles/DetallesProducto";
import "./App.css";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/informacion" element={<Informacion />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/detalles/:id" element={<Detalles />} />
      </Routes>
    </Router>
  );
}

export default App;
