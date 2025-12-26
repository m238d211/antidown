import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Login from "./pages/Login.jsx";
import Snowfall from "react-snowfall";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      
      <Snowfall
        snowflakeCount={120}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 9999,
          pointerEvents: "none",
        }}
      />


      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
