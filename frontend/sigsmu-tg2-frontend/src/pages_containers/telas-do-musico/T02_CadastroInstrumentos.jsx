// Importações de estilos
import t02_cadastroinstrumentos from "./CSS/t02_cadastroinstrumentos.module.css"

// Importações de componentes
import Select from "components/Select.jsx";

// Importações da API (Axios)
import { listarInstrumentos }        from "services/TabelasIndependentes/Instrumento.js";
import { 
  buscarInstrumentosDoMusico, 
  adicionarAosInstrumentosDoMusico, 
  excluirInstrumentoDaLista
}                                    from "services/TabelasAssociativas/InstrumentosDoMusico.js"
import { dadosMusico }               from "services/_AUXILIAR/GlobalData.js";

// Importações do React
import React, { useEffect, useState } from "react";


function T02_CadastroInstrumentos() {

  // Musico logado
  const musicoLogado = JSON.parse(localStorage.getItem("usuarioLogado"));


  // Instrumento a ser cadastrado
  const [instrumentoId, setInstrumentoId] = useState(1)

  // instrumentos retornados do banco
  const [instrumentos, setInstrumentos] = useState([]);
  
  const [instrumentosDoMusico, setInstrumentosDoMusico] = useState(null)


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

  
  // Cadastra o instrumento do músico no banco
  const cadastrarInstrumento = async () => {
    try {
      console.log("cpf do musico -> " + musicoLogado.cpf)
      console.log("instrumentoId -> " + instrumentoId)

      await adicionarAosInstrumentosDoMusico({
        "musico"      : { "cpf" : musicoLogado.cpf },
        "instrumento" : { "id"  : instrumentoId }
      })
      
      alert("Instrumento cadastrado com sucesso!")
      window.location.reload()
    }
    catch(erro) {
      alert("Erro ao cadastrar instrumento!")
      console.log("Erro ao cadastrar instrumento: " + erro)
    }
  }

  // Retorna os instrumentos do músico logado
  const puxarInstrumentosDoMusico = async (sol_id) => {
    try {
      const response = await buscarInstrumentosDoMusico(sol_id)
      setInstrumentosDoMusico( response.data )
    }
    catch(erro) {
      alert("Não foi possível exibir seus instrumentos!")
      console.log("Erro ao puxar instrumentos do músico: " + erro)
    }
  }

  // Executa as funções abaixo apenas uma vez
  useEffect(() => {
    puxarInstrumentos()
    puxarInstrumentosDoMusico(musicoLogado.cpf)
  }, [])


  return (
    <div>
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
            listaOpcoes={instrumentos?.map(registro => registro.nome)}
            values={instrumentos?.map(registro => registro.id)}
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
        {/* {console.log("instrumentos -> ", instrumentosDoMusico)} */}
      </div>

      {/* EXIBE OS INSTRUMENTOS DO MÚSICO NA TELA */}
      <div  className={t02_cadastroinstrumentos.box_instrumentos}> Meus instrumentos
      {
        instrumentosDoMusico?.map((instrumento, i) => {
          return <fieldset className={t02_cadastroinstrumentos.instrumentos} key={i}>
            <legend> { instrumento.nome.toUpperCase() } </legend>
            
            <div className={t02_cadastroinstrumentos.info_instrumento}>
              <div> <span> {"Categoria: "} </span>        { instrumento.categoria } </div>
              <div> <span> {"Marca/Fabricante: "} </span> { instrumento.marcaFabricante } </div>
            </div>

            <div 
              className={t02_cadastroinstrumentos.excluir_instrumento}
              id={instrumento.id}
              onClick={async evt => {
                try {
                  await excluirInstrumentoDaLista(musicoLogado.cpf, evt.currentTarget.id)
                  window.location.reload()
                }
                catch(erro) {
                  alert("Não foi possível excluir o instrumento!")
                  console.log("Erro ao excluir instrumento do músico: " + erro)
                }
              }}
            >X</div>
          </fieldset>
        })
      }
      </div>
    </div>
  );
}
export default T02_CadastroInstrumentos;