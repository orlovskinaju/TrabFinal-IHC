// src/App.js
import React from "react";
import { createRoot } from "react-dom/client";
import AppRoutes from "./routes"; // Importa o componente de rotas

const App = () => {
    return (
        <AppRoutes /> // Renderiza o componente de rotas
    );
};

export default App; // Certifique-se de que esta linha está presente