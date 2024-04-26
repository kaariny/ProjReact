import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./rotas/Home";
import Header from "./Componentes/Header";
import Pets from "./rotas/Pets";
import Admin from "./rotas/Admin";
import Cadastro from "./rotas/Cadastro"


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter> 
      <Header />
      <Routes>
        <Route path="/Admin" element={<Admin/>} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Pets" element={<Pets />} />
        <Route path="/Cadastro" element={<Cadastro/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

