// Importações de estilos
import t02_cadastroinstrumentos from "./CSS/t02_cadastroinstrumentos.module.css"

// Importações do React
import React, { useState } from "react";


function T02_CadastroInstrumentos() {
  const [instrumentos, setInstrumentos] = useState([]);
  const [form, setForm] = useState({
    nomeInstrumento: "",
    tipo: "",
    experiencia: "",
    nivel: "",
    linkPortfolio: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (form.nomeInstrumento.trim() === "") return;
    setInstrumentos([...instrumentos, form]);
    setForm({ nomeInstrumento: "", tipo: "", experiencia: "", nivel: "", linkPortfolio: "" });
  };

  const handleRemove = (index) => {
    setInstrumentos(instrumentos.filter((_, i) => i !== index));
  };

  return (
    <div className={t02_cadastroinstrumentos.musicoContainer}>
      <h2 className={t02_cadastroinstrumentos.titulo}>Cadastro de Instrumentos e Portfólio</h2>

      <form onSubmit={handleAdd} className={t02_cadastroinstrumentos.formGrid}>
        <div>
          <label className={t02_cadastroinstrumentos.label}>Instrumento</label>
          <input
            type="text"
            name="nomeInstrumento"
            value={form.nomeInstrumento}
            onChange={handleChange}
            className={t02_cadastroinstrumentos.input}
            placeholder="Ex: Violão, Bateria..."
          />
        </div>

        <div>
          <label className={t02_cadastroinstrumentos.label}>Tipo</label>
          <input
            type="text"
            name="tipo"
            value={form.tipo}
            onChange={handleChange}
            className={t02_cadastroinstrumentos.input}
            placeholder="Corda, Percussão, Sopro..."
          />
        </div>

        <div>
          <label className={t02_cadastroinstrumentos.label}>Nível</label>
          <select
            name="nivel"
            value={form.nivel}
            onChange={handleChange}
            className={t02_cadastroinstrumentos.input}
          >
            <option value="">Selecione</option>
            <option value="iniciante">Iniciante</option>
            <option value="intermediário">Intermediário</option>
            <option value="avançado">Avançado</option>
            <option value="profissional">Profissional</option>
          </select>
        </div>

        <div>
          <label className={t02_cadastroinstrumentos.label}>Tempo de Experiência</label>
          <input
            type="text"
            name="experiencia"
            value={form.experiencia}
            onChange={handleChange}
            className={t02_cadastroinstrumentos.input}
            placeholder="Ex: 5 anos"
          />
        </div>

        <div className={t02_cadastroinstrumentos.colSpan2}>
          <label className={t02_cadastroinstrumentos.label}>Link do Portfólio (YouTube, Instagram, etc.)</label>
          <input
            type="text"
            name="linkPortfolio"
            value={form.linkPortfolio}
            onChange={handleChange}
            className={t02_cadastroinstrumentos.input}
            placeholder="https://..."
          />
        </div>

        <div className={t02_cadastroinstrumentos.btnContainer}>
          <button type="submit" className={t02_cadastroinstrumentos.btnPrimary}>
            Adicionar Instrumento
          </button>
        </div>
      </form>

      {instrumentos.length > 0 && (
        <div className={t02_cadastroinstrumentos.listaContainer}>
          <h3 className={t02_cadastroinstrumentos.listaTitulo}>Instrumentos cadastrados</h3>
          <ul className={t02_cadastroinstrumentos.lista}>
            {instrumentos.map((item, index) => (
              <li key={index} className={t02_cadastroinstrumentos.listaItem}>
                <div>
                  <p className={t02_cadastroinstrumentos.instrumentoNome}>{item.nomeInstrumento}</p>
                  <p className={t02_cadastroinstrumentos.instrumentoInfo}>
                    {item.tipo} • {item.nivel} • {item.experiencia}
                  </p>
                  {item.linkPortfolio && (
                    <a
                      href={item.linkPortfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={t02_cadastroinstrumentos.linkPortfolio}
                    >
                      Portfólio
                    </a>
                  )}
                </div>
                <button
                  onClick={() => handleRemove(index)}
                  className={t02_cadastroinstrumentos.btnRemover}
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export default T02_CadastroInstrumentos;