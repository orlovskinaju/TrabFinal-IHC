// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client'; // Importa createRoot
import './index.css';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container); // Cria a raiz

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);