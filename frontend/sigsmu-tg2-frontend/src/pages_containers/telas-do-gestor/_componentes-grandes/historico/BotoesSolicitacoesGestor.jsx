// // Importações de estilos
// import botoessolicitacoesgestor from "./CSS/botoessolicitacoesgestor.module.css"

// // Importações de componentes
// import Botao from "../../../../components/Botao";


// // DESCRIÇÃO
// function BotoesSolicitacoesGestor() {
//     return (
//         <div className={botoessolicitacoesgestor.main} onClick={evt => {evt.stopPropagation()}}>
//             <Botao msg={"Atribuir Equipes"}  rota={"/Intranet/RotasGestor/SolicitacoesServico/AtribuicaoEquipes"}
//             ativarEstilo={true} />
//             <Botao msg={"Gerenciar Ensaio"}  rota={"/Intranet/RotasGestor/SolicitacoesServico/GerenciarEnsaio"}
//             ativarEstilo={true} />
//             <Botao msg={"Definir Custos"}    rota={"/Intranet/RotasGestor/SolicitacoesServico/Custos"}
//             ativarEstilo={true} />
//             <Botao msg={"Alterar Contrato"}  rota={"/Intranet/RotasGestor/SolicitacoesServico/AlteracaoContrato"}
//             ativarEstilo={true} />
//             <Botao msg={"Enviar Devolutiva"} rota={"/Intranet/RotasGestor/SolicitacoesServico/Devolutiva"}
//             ativarEstilo={true} />
//             <Botao msg={"VER MAIS"}          rota={""}
//             ativarEstilo={true} />
//         </div>
//     )
// }
// export default BotoesSolicitacoesGestor;
// components/BotoesSolicitacoesGestor.jsx

// Importações de estilos
import botoessolicitacoesgestor from "./CSS/botoessolicitacoesgestor.module.css";

// Importações de componentes
import Botao from "components/Botao.jsx";

// Importações da API (Axios)
import { mudarStatusDaSolicitacao }    from "services/Outras/SolicitacaoServico.js"
import { dadosSolicitacaoSelecionada } from "services/_AUXILIAR/GlobalData.js"

// Importações do React
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";


function BotoesSolicitacoesGestor({ solicitacaoSelecionada }) {
  const navigate = useNavigate()

  const [loadingStates, setLoadingStates] = useState({});
  const [clickEffects, setClickEffects] = useState({});

  const [mostrarBotoesSimulados, setMostrarBotoesSimulados] = useState(false)



  useEffect(() => {
    const statusAtual = solicitacaoSelecionada.statusSolicitacao.situacao

    console.log("statusAtual -> " + statusAtual)
    if (statusAtual === "aprovacao" || statusAtual === "marcado")
      setMostrarBotoesSimulados(true)
  }, [])


  const getBotaoClassName = (acao, isVerMais = false) => {
    const baseClass = isVerMais ? botoessolicitacoesgestor.botaoVerMais : botoessolicitacoesgestor.botao;
    const loadingClass = loadingStates[acao] ? 
      (isVerMais ? botoessolicitacoesgestor.botaoVerMaisLoading : botoessolicitacoesgestor.botaoLoading) : '';
    const clickEffectClass = clickEffects[acao] ? 
      (isVerMais ? botoessolicitacoesgestor.botaoVerMaisClickEffect : botoessolicitacoesgestor.botaoClickEffect) : '';
    const rippleClass = botoessolicitacoesgestor.botaoRipple;
    const tooltipClass = botoessolicitacoesgestor.botaoTooltip;

    return `${baseClass} ${loadingClass} ${clickEffectClass} ${rippleClass} ${tooltipClass}`;
  };

  return (
    <div className={botoessolicitacoesgestor.main} onClick={evt => {evt.stopPropagation()}}>
      
      {/* Leva para a tela de custos */}
      <button 
        className={getBotaoClassName('definir-custos')}
        onClick={() => {
          dadosSolicitacaoSelecionada.set({
            "id" : solicitacaoSelecionada.id
          })
          navigate("/Intranet/RotasGestor/SolicitacoesServico/Custos", {replace:false})}
      }>
        Definir Custos
      </button>

      {/* Libera o serviço para aceitação dos músicos - muda status */}
      <button 
        className={getBotaoClassName('atribuir-equipes')}
        onClick={async () => {
          try {
            if (solicitacaoSelecionada.custo != null) {
              await mudarStatusDaSolicitacao(solicitacaoSelecionada.id, 2) // muda para status andamento
              alert("Serviço liberado para músicos!")
            }
            else
              alert("Defina o custo do serviço primeiro!")

          }
          catch(erro) {
            alert("Erro ao mudar o status da solicitação!")
            console.log("Erro ao mudar o status da solicitação: " + erro)
          }
        }}
      >
        Liberar Serviço para Músicos
      </button>
      

      {/* Devolutiva de orçamento - FALTA FAZER */}
      <button 
        className={getBotaoClassName('gerenciar-ensaio')} // nome errado apenas
        onClick={async () => {

          // Fazer verificacao se o servico tem grupo

          try {
            console.log("sol_id -> " + solicitacaoSelecionada.id)

            await mudarStatusDaSolicitacao(solicitacaoSelecionada.id, 5) // muda status para aprovação
            alert("Devolutiva enviada! (Twilio/SendGrid)")
            setMostrarBotoesSimulados(true)
            // window.location.reload()
          }
          catch(erro) {
            alert("Não foi possível enviar a devolutiva!")

            console.log("Erro ao mudar o status do serviço para APROVACAO: " + erro)
            
            console.log("mostrarBotões? -> " + mostrarBotoesSimulados)
            console.log("sol_stt -> " + solicitacaoSelecionada.statusSolicitacao.situacao)
          }

          // GERAR CONTRATO E ENVIAR POR SENDGRID E TWILIO
        }}
      >
        Devolver Orçamento
      </button>
      

      {/* Abre o contrato da solicitação - FALTA FAZER */}
      <button 
        className={getBotaoClassName('alterar-contrato')}
        onClick={() => {
          alert("Em desenvolvimento! (JasperReports)")
          // ABRIR CONTRATO GERADO AQUI
        }}
      >
        Alterar Contrato
      </button>


      {console.log("mostrarBotoesSimulados -> " + mostrarBotoesSimulados)}
      {/* Área Simulada */} { mostrarBotoesSimulados &&
        <div className={botoessolicitacoesgestor.area_simulada}>
          
          {/* Botão de APROVAÇÃO de orçamento */}
          <button 
            className={botoessolicitacoesgestor.simulado}
            onClick={async () => {
              try {
                await mudarStatusDaSolicitacao(solicitacaoSelecionada.id, 6) // muda o status para marcado
                alert("Serviço marcado e contrato feito!")
                window.location.reload()
              }
              catch(erro) {
                alert("Não foi possível mudar o status para marcado!")
                console.log("Erro ao mudar o status para MARCADO: " + erro)
              }
            }}
          >
            Aprovar Orçamento
          </button>
          
          {/* Botão de NÃO APROVAÇÃO do orçamento */}
          <button 
            className={botoessolicitacoesgestor.simulado}
            onClick={async () => {
              try {
                await mudarStatusDaSolicitacao(solicitacaoSelecionada.id, 4) // muda o status para cancelado
                alert("Serviço cancelado!")
                window.location.reload()
              }
              catch(erro) {
                alert("Não foi possível mudar o status para cancelado!")
                console.log("Erro ao mudar o status para CANCELADO: " + erro)
              }
            }}
          >
            Não Aprovar Orçamento
          </button>
          
          {/* Botão de FINALIZAÇÃO de serviço */}
          <button 
            className={botoessolicitacoesgestor.simulado}
            onClick={async () => {
              try {
                await mudarStatusDaSolicitacao(solicitacaoSelecionada.id, 3) // muda o status para concluido
                alert("Serviço concluído!")
                window.location.reload()
              }
              catch(erro) {
                alert("Não foi possível mudar o status para concluído!")
                console.log("Erro ao mudar o status para CONCLUIDO: " + erro)
              }
            }}
          >
            Finalizar Serviço
          </button>

        </div>
      }
      
    </div>
  );
}

export default BotoesSolicitacoesGestor;