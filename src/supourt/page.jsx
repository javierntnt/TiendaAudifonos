import React, { useContext } from "react";
import { LanguageContext } from "../Componentes/LanguageContext.jsx"; // 👈 Importamos el contexto
import "./Estilos.css";

export default function SupportPage() {
  const { language } = useContext(LanguageContext);

  // 👇 Diccionario de textos
  const text = {
    en: {
      title: "Support",
      contacts: [
        { name: "John Doe", country: "United States", phone: "+1 555-123-4567" },
        { name: "Carlos Pérez", country: "Mexico", phone: "+52 55-9876-5432" },
        { name: "Ana Gómez", country: "Colombia", phone: "+57 300-123-4567" },
      ],
    },
    es: {
      title: "Soporte",
      contacts: [
        { name: "John Doe", country: "Estados Unidos", phone: "+1 555-123-4567" },
        { name: "Carlos Pérez", country: "México", phone: "+52 55-9876-5432" },
        { name: "Ana Gómez", country: "Colombia", phone: "+57 300-123-4567" },
      ],
    },
  };

  return (
    <div className="support-container">
      <h1>{text[language].title}</h1>
      <div className="support-contacts">
        {text[language].contacts.map((contact, index) => (
          <div key={index} className="contact-card">
            <h2>{contact.name}</h2>
            <p>{contact.country}</p>
            <p>{contact.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}