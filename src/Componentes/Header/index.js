import "./Header.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Opcao = styled.li`
  margin-right: 20px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  font-size: 20px;
  min-width: 120px;
  cursor: pointer;
  & :hover {
    color: #000000;
  }
`;

const Opcoes = styled.ul`
  display: flex;
  justify-content: center; 
  align-items: center; */ /* Se quiser centralizar verticalmente também */
`;


const opcoes = ["Home", "Sobre", "Cadastro", "Login", "Admin"];
{opcoes.map((texto, index) => (
  <Opcao key={index}>
    <p>{texto}</p>
  </Opcao>
))}


function Header() {
  return (
    <header>
      <nav>
        <Opcoes>
       
          {opcoes.map((texto) => (
            <Link to={`/${texto}`}>
            <Opcao>
              <p>{texto}</p>
            </Opcao>
          </Link>
          ))}
          
        </Opcoes>
        
        <br />
      <h1>Bem-vindo ao AdotaPet  </h1>
      <h2>"Adote amor, adote um pet!"</h2>
      <br />
      <p>
      Estamos felizes em ter vocês aqui conosco em nosso espaço dedicado a conectar 
      corações peludos aos lares amorosos que eles merecem, Sua nova melhor amizade está aguardando, adote!
      </p>
      </nav>
    </header>
  );
}


export default Header;
