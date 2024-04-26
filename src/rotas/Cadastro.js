import React, { useState } from "react";
import { criarPets } from "../Componentes/Servicos/pets";
import "./CadastroPet.css";

function CadastroPets() {
  const [titulo, setTitulo] = useState("");
  const [veterinario, setVeterinario] = useState("");
  const [petSistter, setpetSistter] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleCadastro = async () => {
    try {
      const novoPets = await criarPets({
        titulo,
        veterinario,
        petSistter,
      });

      console.log("Novo pet cadastrado:", novoPets);

      setShowAlert(true);

      setTitulo("");
      setVeterinario("");
      setpetSistter("");

      // Esconde a mensagem após 3 segundos
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    } catch (error) {
      console.error("Erro ao cadastrar pet:", error);
    }
  };

  return (
    <div className="cadastro-pets-container">
      <form>
        <h1>CADASTRE SEU PET:</h1>
        <br />
        <label>Título :</label>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

        <br />
        <br />

        <label>Veterinário:</label>
        <input
          type="text"
          value={veterinario}
          onChange={(e) => setVeterinario(e.target.value)}
        />

        <br />
        <br />

        <label>Petsitter:</label>
        <input
          type="text"
          value={petSistter}
          onChange={(e) => setpetSistter(e.target.value)}
        />

        <br />
        <br />

        <button type="button" onClick={handleCadastro} className="botao">
          Cadastrar Pet
        </button>

        {showAlert && (
          <div className="alerta">
            <p>Pet cadastrado com sucesso!</p>
          </div>
        )}
      </form>
    </div>
  );
}

export default CadastroPets;
