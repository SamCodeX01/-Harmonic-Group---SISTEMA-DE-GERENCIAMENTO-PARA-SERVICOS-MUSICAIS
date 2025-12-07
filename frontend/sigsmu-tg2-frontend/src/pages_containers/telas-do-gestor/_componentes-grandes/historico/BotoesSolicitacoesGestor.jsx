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
  const [statusSolicitacao, setStatusSolicitacao]           = useState(null)

  // const puxarStatusSolicitacao = async () => {
  //   try {
  //     const response = await mudarStatusDaSolicitacao(solicitacaoSelecionada.id)
  //   }
  //   catch(erro) {
  //     alert("Não foi possível puxar o status atual da solicitação!")
  //     console.log("Erro ao puxar status da solicitação: " + erro)
  //   }
  // }

  useEffect(() => {
    // puxarStatusSolicitacao()

    const statusAtual = solicitacaoSelecionada.statusSolicitacao.situacao

    console.log("statusAtual -> " + statusAtual)
    if (statusAtual === "aprovacao" || statusAtual === "marcado")
      setMostrarBotoesSimulados(true)
  }, [])

  // const handleAcao = async (acao) => {
  //   if (!solicitacaoSelecionada) {
  //     alert("Por favor, selecione uma solicitação primeiro.");
  //     return;
  //   }

  //   // Ativar efeito de clique
  //   setClickEffects(prev => ({ ...prev, [acao]: true }));
    
  //   // Ativar loading
  //   setLoadingStates(prev => ({ ...prev, [acao]: true }));

  //   try {
  //     // Simular uma operação assíncrona
  //     await new Promise(resolve => setTimeout(resolve, 1000));
      
  //     // Aqui você pode implementar a lógica específica para cada ação
  //     switch(acao) {
  //       case 'atribuir-equipes':
  //         alert(`Atribuindo equipes para: ${solicitacaoSelecionada.idSolicitacao}`);
  //         // Navegar para rota ou abrir modal
  //         break;
  //       case 'gerenciar-ensaio':
  //         alert(`Gerenciando ensaio para: ${solicitacaoSelecionada.idSolicitacao}`);
  //         break;
  //       case 'definir-custos':
  //         alert(`Definindo custos para: ${solicitacaoSelecionada.idSolicitacao}`);
  //         break;
  //       case 'alterar-contrato':
  //         alert(`Alterando contrato para: ${solicitacaoSelecionada.idSolicitacao}`);
  //         break;
  //       case 'enviar-devolutiva':
  //         alert(`Enviando devolutiva para: ${solicitacaoSelecionada.nomeCliente}`);
  //         break;
  //       case 'ver-mais':
  //         alert(`Abrindo detalhes completos de: ${solicitacaoSelecionada.idSolicitacao}`);
  //         break;
  //       default:
  //         break;
  //     }
  //   } catch (error) {
  //     console.error('Erro ao executar ação:', error);
  //     alert('Erro ao executar a ação. Tente novamente.');
  //   } finally {
  //     // Desativar loading e efeito de clique
  //     setLoadingStates(prev => ({ ...prev, [acao]: false }));
  //     setTimeout(() => {
  //       setClickEffects(prev => ({ ...prev, [acao]: false }));
  //     }, 300);
  //   }
  // };

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
        className={getBotaoClassName('gerenciar-ensaio')}
        onClick={async () => {
          try {
            await mudarStatusDaSolicitacao(solicitacaoSelecionada.id, 5) // muda status para aprovação
            alert("Devolutiva enviada! (Twilio/SendGrid)")
            setMostrarBotoesSimulados(true)
            // window.location.reload()
          }
          catch(erro) {
            alert("Não foi possível enviar a devolutiva!")
            console.log("Erro ao mudar o status do serviço para APROVACAO: " + erro)
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