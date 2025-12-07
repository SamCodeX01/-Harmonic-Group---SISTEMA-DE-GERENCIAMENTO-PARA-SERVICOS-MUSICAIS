// Importações de estilos
import t02_cadastroinstrumentos from "./CSS/t02_cadastroinstrumentos.module.css"

// Importações de componentes
import Select from "components/Select.jsx";

// Importações da API (Axios)
import { listarInstrumentos }               from "services/TabelasIndependentes/Instrumento.js";
import { adicionarAosInstrumentosDoMusico } from "services/TabelasAssociativas/InstrumentosDoMusico.js"
import { dadosMusico }                      from "services/_AUXILIAR/GlobalData.js";

// Importações do React
import React, { useEffect, useState } from "react";


function T02_CadastroInstrumentos() {

  // Musico logado
  const musico = JSON.parse(localStorage.getItem("usuarioLogado"));


  // Instrumento a ser cadastrado
  const [instrumentoId, setInstrumentoId] = useState(1)

  // instrumentos retornados do banco
  const [instrumentos, setInstrumentos] = useState([]);


  // Puxa todos os intrumentos cadastrados do banco
  const puxarInstrumentos = async () => {
    try {
      const promisse = await listarInstrumentos()
      setInstrumentos( promisse.data )
    }
    catch(erro) {
      alert("Erro ao puxar instrumentos do banco!")
      console.log("Erro ao puxar instrumentos do banco: " + erro)
    }
  }

  // Executa a função abaixo apenas uma vez
  useEffect(() => {
    puxarInstrumentos()
  }, [])

  
  // Cadastra o instrumento do músico no banco
  const cadastrarInstrumento = async () => {
    try {
      console.log("cpf do musico -> " + musico.cpf)
      console.log("instrumentoId -> " + instrumentoId)

      await adicionarAosInstrumentosDoMusico({
        "musico"      : { "cpf" : musico.cpf },
        "instrumento" : { "id"  : instrumentoId }
      })
      alert("Instrumento cadastrado com sucesso!")
    }
    catch(erro) {
      alert("Erro ao cadastrar instrumento!")
      console.log("Erro ao cadastrar instrumento: " + erro)
    }
  }


  return (
    <div className={t02_cadastroinstrumentos.musicoContainer}>
      <h2 className={t02_cadastroinstrumentos.titulo}>Cadastro de Instrumentos e Portfólio</h2>

      <form className={t02_cadastroinstrumentos.formGrid}>      

        <Select 
          msg={"Nível"}
          setValue={null}
          listaOpcoes={["Selecione","Iniciante","Intermediário","Avançado","Profissional"]}
        />

        <div>
          <label className={t02_cadastroinstrumentos.label}>Tempo de Experiência</label>
          <input
            type="text"
            name="experiencia"
            placeholder="Ex: 5 anos"
          />
        </div>

        <Select 
          msg={"Instrumento / Tipo"}
          setValue={setInstrumentoId}
          listaOpcoes={instrumentos.map(registro => registro.nome)}
          values={instrumentos.map(registro => registro.id)}
        /> 

        {/* Botão para adicionar instrumento */}
        <div className={t02_cadastroinstrumentos.btnContainer}>
          <div 
            className={t02_cadastroinstrumentos.btnPrimary}
            onClick={() => cadastrarInstrumento()}
          >
            Adicionar Instrumento
          </div>
        </div>

      </form>

    </div>
  );
}
export default T02_CadastroInstrumentos;