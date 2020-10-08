import React from "react";
import Dashboard from '../dashboard/Dashboard'
import { Footer } from "../Footer/Footer";
import "./Home.css"


export const Home = () => {
  return (
    <div className="geral">
        <div className="divlista">
      <h5 className="listafuncionarios">Lista de Funcionários Cadastrados</h5>
      <span>Clique em cima do nome do funcionário para visualizar os detalhes</span>
      </div>
      <Dashboard /> 
      <Footer />
    </div>
  );
};
