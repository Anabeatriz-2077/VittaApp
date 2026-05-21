import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./styles/global.css";

import { BrowserRouter } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import { FavoritesProvider } from "./context/FavoritesContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    {/* BrowserRouter permite usar rotas */}
    <BrowserRouter>

      {/* Context API de login */}
      <AuthProvider>

        {/* Context API de favoritos */}
        <FavoritesProvider>

          <App />

        </FavoritesProvider>
      </AuthProvider>

    </BrowserRouter>
  </React.StrictMode>
);