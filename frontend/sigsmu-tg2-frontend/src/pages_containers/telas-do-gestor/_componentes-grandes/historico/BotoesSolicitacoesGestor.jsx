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

// Importações do React
import React, { useState } from "react";


function BotoesSolicitacoesGestor({ solicitacaoSelecionada }) {
  const [loadingStates, setLoadingStates] = useState({});
  const [clickEffects, setClickEffects] = useState({});

  const handleAcao = async (acao) => {
    if (!solicitacaoSelecionada) {
      alert("Por favor, selecione uma solicitação primeiro.");
      return;
    }

    // Ativar efeito de clique
    setClickEffects(prev => ({ ...prev, [acao]: true }));
    
    // Ativar loading
    setLoadingStates(prev => ({ ...prev, [acao]: true }));

    try {
      // Simular uma operação assíncrona
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Aqui você pode implementar a lógica específica para cada ação
      switch(acao) {
        case 'atribuir-equipes':
          alert(`Atribuindo equipes para: ${solicitacaoSelecionada.idSolicitacao}`);
          // Navegar para rota ou abrir modal
          break;
        case 'gerenciar-ensaio':
          alert(`Gerenciando ensaio para: ${solicitacaoSelecionada.idSolicitacao}`);
          break;
        case 'definir-custos':
          alert(`Definindo custos para: ${solicitacaoSelecionada.idSolicitacao}`);
          break;
        case 'alterar-contrato':
          alert(`Alterando contrato para: ${solicitacaoSelecionada.idSolicitacao}`);
          break;
        case 'enviar-devolutiva':
          alert(`Enviando devolutiva para: ${solicitacaoSelecionada.nomeCliente}`);
          break;
        case 'ver-mais':
          alert(`Abrindo detalhes completos de: ${solicitacaoSelecionada.idSolicitacao}`);
          break;
        default:
          break;
      }
    } catch (error) {
      console.error('Erro ao executar ação:', error);
      alert('Erro ao executar a ação. Tente novamente.');
    } finally {
      // Desativar loading e efeito de clique
      setLoadingStates(prev => ({ ...prev, [acao]: false }));
      setTimeout(() => {
        setClickEffects(prev => ({ ...prev, [acao]: false }));
      }, 300);
    }
  };

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
      <button 
        className={getBotaoClassName('atribuir-equipes')}
        onClick={() => handleAcao('atribuir-equipes')}
        // disabled={loadingStates['atribuir-equipes']}
        // data-tooltip="Designar músicos para este evento"
      >
        {/* {loadingStates['atribuir-equipes'] ? '' : 'Designar músicos para este evento'} */}
        Designar músicos para evento
      </button>
      
      <button 
        className={getBotaoClassName('gerenciar-ensaio')}
        onClick={() => handleAcao('gerenciar-ensaio')}
        disabled={loadingStates['gerenciar-ensaio']}
        data-tooltip="Organizar ensaios e preparações"
      >
        {loadingStates['gerenciar-ensaio'] ? '' : 'Organizar Ensaios'}
      </button>
      
      <button 
        className={getBotaoClassName('definir-custos')}
        onClick={() => handleAcao('definir-custos')}
        disabled={loadingStates['definir-custos']}
        data-tooltip="Calcular e definir orçamento"
      >
        {loadingStates['definir-custos'] ? '' : 'Definir Orçamento'}
      </button>
      
      <button 
        className={getBotaoClassName('alterar-contrato')}
        onClick={() => handleAcao('alterar-contrato')}
        disabled={loadingStates['alterar-contrato']}
        data-tooltip="Modificar termos do contrato"
      >
        {loadingStates['alterar-contrato'] ? '' : 'Alterar Contrato'}
      </button>
      
      <button 
        className={getBotaoClassName('enviar-devolutiva')}
        onClick={() => handleAcao('enviar-devolutiva')}
        disabled={loadingStates['enviar-devolutiva']}
        data-tooltip="Enviar feedback ao cliente"
      >
        {loadingStates['enviar-devolutiva'] ? '' : 'Enviar feedback ao cliente'}
      </button>
      
      {/* <button 
        className={getBotaoClassName('ver-mais', true)}
        onClick={() => handleAcao('ver-mais')}
        disabled={loadingStates['ver-mais']}
        data-tooltip="Expandir detalhes adicionais"
      >
        {loadingStates['ver-mais'] ? '' : 'VER MAIS'}
      </button> */}
    </div>
  );
}

export default BotoesSolicitacoesGestor;