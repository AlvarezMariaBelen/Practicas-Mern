import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; //estilo
import App from "./App"; //importo otro componente

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//todo lo que necesito se importa y se exporta
//1ro se escribe la palabra import, 2do el nombre de lo que necesito
//3ro la palafra from (desde donde lo importo)
//4to escribo la ruta de lo que necesito
//los estilos son los unicos que se importan directamente
