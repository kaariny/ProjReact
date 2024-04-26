import React, { useState, useEffect } from "react";
import {
  getPets,
  atualizarPets,
  excluirPets,
} from "../Componentes/Servicos/pets";

function GerenciamentoPets() {
  const [pets, setPets] = useState([]);
  const [edicao, setEdicao] = useState(null);
  const [titulo, setTitulo] = useState("");
  const [veterinario, setVeterinario] = useState("");
  const [petSistter, setPetSistter] = useState("");

  useEffect(() => {
    carregarPets();
  }, []);

  const carregarPets = async () => {
    try {
      const listaPets = await getPets();

      // Atualize o estado com a lista de vagas
      setPets(listaPets);
    } catch (error) {
      console.error("Erro ao carregar vagas:", error);
    }
  };

  const handleEditar = (pets) => {
    // Ao clicar em "Editar", preencha o formulário com os dados da vaga
    setEdicao(pets._id);
    setTitulo(pets.titulo);
    setVeterinario(pets.veterinario);
    setPetSistter(pets.petSistter);
  };

  const handleAtualizar = async () => {
    try {
      // Chame a função atualizarVaga do seu serviço
      await atualizarPets(edicao, {
        titulo: titulo,
        veterinario: veterinario,
        petSistter: petSistter,
      });

      // Limpe os campos do formulário após a atualização
      setEdicao(null);
      setTitulo("");
      setVeterinario("");
      setPetSistter("");

      carregarPets();
    } catch (error) {
      console.error("Erro ao atualizar Pets:", error);
    }
  };

  const handleExcluir = async (id) => {
    try {
      // Chame a função excluirVaga do seu serviço
      await excluirPets(id);

      carregarPets();
    } catch (error) {
      console.error("Erro ao excluir vaga:", error);
    }
  };

  return (
    <div>
      <h2>Gerenciamento de Pets</h2>
      <ul>
        {pets &&
          pets.map((pets) => (
            <li key={pets._id}>
              {pets.titulo} - {pets.veterinario} - {pets.petSistter}
              <button onClick={() => handleEditar(pets)}>Editar</button>
              <button onClick={() => handleExcluir(pets._id)}>Excluir</button>
            </li>
          ))}
      </ul>
      {edicao !== null && (
        <div>
          <h3>Editar Pets</h3>
          <label>Título:</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />

          <label>veterinario:</label>
          <input
            type="text"
            value={veterinario}
            onChange={(e) => setVeterinario(e.target.value)}
          />

          <label>petSistter:</label>
          <input
            type="text"
            value={petSistter}
            onChange={(e) => setPetSistter(e.target.value)}
          />

          <button onClick={handleAtualizar}>Atualizar</button>
        </div>
      )}
    </div>
  );
}

export default GerenciamentoPets;
