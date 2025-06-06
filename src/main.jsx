// src/main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormulaStatAITrade from "./FormulaStatAI";
import AboutUs from "./pages/AboutUs";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormulaStatAITrade />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);