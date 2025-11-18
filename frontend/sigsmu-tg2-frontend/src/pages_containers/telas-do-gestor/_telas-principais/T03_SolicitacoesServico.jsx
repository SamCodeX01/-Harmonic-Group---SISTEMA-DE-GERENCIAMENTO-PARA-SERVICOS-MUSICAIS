// // Importações de estilos
// import t03_solicitacoesServico from "./CSS/t03_solicitacoesServico.module.css"

// // Importações de componentes
// import Cards from "../_componentes-grandes/_compartilhados/Cards"
// import Radio from "../../../components/Radio"

// // Importações do React
// import { useState } from "react"


// // Tela de SOLICITAÇÕES DE SERVIÇO - para visualização das ordens de serviço geradas por solicitações de clientes
// function T03_SolicitacoesServico() {
//     const [card, setCard] = useState(null)

//     // Para testes
//     const [dadosCliente, setDadosCliente] = useState({
//         idSolicitacao: 1234,
//         nomeCliente: "Guilherme",
//         situacaoServico: "Em andamento",

//         dataSolicitacao: "23/12/2022",
//         tipoServico: "Aniversário",
//         pacoteEscolhido: "Harmonic Duo"
//     })

//     return (
//         <div className={t03_solicitacoesServico.main}>
//             <Radio setSelecionado={setCard} name={"card"}>
//                 <Cards id={0} objCliente={dadosCliente} metodoSet={setDadosCliente} idCardSelecionado={card ? card.id : null} />
//                 <Cards id={1} objCliente={dadosCliente} metodoSet={setDadosCliente} idCardSelecionado={card ? card.id : null} />
//                 <Cards id={2} objCliente={dadosCliente} metodoSet={setDadosCliente} idCardSelecionado={card ? card.id : null} />
//                 <Cards id={3} objCliente={dadosCliente} metodoSet={setDadosCliente} idCardSelecionado={card ? card.id : null} />
//             </Radio>
//         </div>
//     )
// }
// export default T03_SolicitacoesServico;

// components/T03_SolicitacoesServico.jsx

// Importações de estilos
import t03_solicitacoesServico from "./CSS/t03_solicitacoesServico.module.css";

// Importações de componentes
import BotoesSolicitacoesGestor from "../_componentes-grandes/historico/BotoesSolicitacoesGestor";

// Importações da API
// import { listarInstrumentos } from "../../../services/BancoDadosGestor/InstrumentoService";

// Importações dos serviços
import { listarSolicitacoes } from "services/SolicitacoesServico/SolicitacoesService.js";

// Importações do React
import React, { useEffect, useState } from "react";







// Tela de SOLICITAÇÕES DE SERVIÇO - para visualização das ordens de serviço geradas por solicitações de clientes
function T03_SolicitacoesServico() {

  // Solicitações de Serviço retornadas do banco
  const [solicitacoesEmAberto, setSolicitacoesEmAberto] = useState(null)

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  async function puxarDados() {
    try {
      const retorno = await listarSolicitacoes()
      setSolicitacoesEmAberto(retorno.data)
    }
    catch (erro) {
      alert("Erro ao puxar dados do banco!")
      console.log("Erro ao puxar dados do banco: " + erro)
    }
  }
  useEffect(() => {
    puxarDados()
  }, [])
  /////////////////////////////////////////////////////////////////////

  // useEffect(() => {
  // }, [solicitacoesEmAberto])


  // Opções do filtro
  const tiposEvento = [
    'Todos',
    'Casamento',
    'Aniversário',
    'Evento Corporativo',
    'Festa Infantil',
    'Formatura',
    'Jantar Privado'
  ];

  // Opções do filtro
  const statusOptions = [
    'Todos',
    'pendente',
    'andamento',
    'concluido'
  ];

  // Opções do filtro e seleção
  const [solicitacaoSelecionada, setSolicitacaoSelecionada] = useState(null);
  const [filtroData, setFiltroData]                         = useState('');  // DD/MM/YYYY
  const [filtroTipoEvento, setFiltroTipoEvento]             = useState('Todos');
  const [filtroStatus, setFiltroStatus]                     = useState('Todos');
  const [solicitacoes, setSolicitacoes]                     = useState([]);
  const [mostrarDetalhes, setMostrarDetalhes]               = useState(false);

  const [solicitacoesFiltradas, setSolicitacoesFiltradas]   = useState([])

  // DATAS PARA TESTE:
  // 12/03/2025
  // 27/07/2025
  // 03/10/2025
  // 19/01/2026
  // 09/09/2025

  // Executa quando o rotorno chega do banco?
  useEffect(() => {
    if (solicitacoesEmAberto) 
      setSolicitacoes(solicitacoesEmAberto) 

  }, [solicitacoesEmAberto])


  useEffect(() => {

    setSolicitacoesFiltradas(
      (solicitacoes ?
        solicitacoes.filter(solicitacao => { // Filtra por data/tipo/status //
          const matchData   = !filtroData                  || solicitacao.dataSolicitacao                === filtroData;
          const matchTipo   = filtroTipoEvento === 'Todos' || solicitacao.pacoteServico.tipoServico.nome === filtroTipoEvento; 
          // COLOCAR UM CONSOLE LOG AQ PRA VER - o do banco e o do filtro
          const matchStatus = filtroStatus === 'Todos'     || solicitacao.statusSolicitacao.situacao     === filtroStatus;
          
          return matchData && matchTipo && matchStatus;
        })
      : [])
    )
  }, [solicitacoes, filtroData, filtroTipoEvento, filtroStatus])



  // ORGANIZA O STATUS DE CADA CARD //
  const getStatusBadge = (status) => {
    const statusClasses = {
      pendente : `${t03_solicitacoesServico.statusBadge} ${t03_solicitacoesServico.statusPendente}`,
      andamento: `${t03_solicitacoesServico.statusBadge} ${t03_solicitacoesServico.statusAndamento}`,
      concluido: `${t03_solicitacoesServico.statusBadge} ${t03_solicitacoesServico.statusConcluido}`
    };
    
    const statusText = {
      pendente : 'Pendente',
      andamento: 'Em Andamento',
      concluido: 'Concluído'
    };
    
    return (
      <span className={statusClasses[status] || statusClasses.pendente}>
        {statusText[status] || statusText.pendente}
      </span>
    );
  };

  const handleCardClick = (solicitacao) => {
    setSolicitacaoSelecionada(solicitacao);
    setMostrarDetalhes(true);
  };

  const handleLimparFiltros = () => {
    setFiltroData('');
    setFiltroTipoEvento('Todos');
    setFiltroStatus('Todos');
  };

  const handleFecharDetalhes = () => {
    setMostrarDetalhes(false);
    setSolicitacaoSelecionada(null);
  };

  // RETURN PRINCIPAL // RETURN PRINCIPAL // RETURN PRINCIPAL // RETURN PRINCIPAL // RETURN PRINCIPAL // RETURN PRINCIPAL //
  return (
    <div className={t03_solicitacoesServico.main}>
      <div className={t03_solicitacoesServico.dashboardContainer}>
        {/* Cabeçalho */}
        <div className={t03_solicitacoesServico.dashboardHeader}>
          <h1 className={t03_solicitacoesServico.dashboardTitle}>Painel de Solicitações</h1>
          <p className={t03_solicitacoesServico.dashboardSubtitle}>Gerencie as solicitações de serviço dos clientes</p>
        </div>

        {/* Filtros */}
        <div className={t03_solicitacoesServico.filtersContainer}>
          <div className={t03_solicitacoesServico.filtersGrid}>
            <div className={t03_solicitacoesServico.filterGroup}>
              <label className={t03_solicitacoesServico.filterLabel}>Data da Solicitação</label>
              <input
                type="date"
                value={filtroData}
                onChange={(e) => setFiltroData(e.target.value)}
                className={t03_solicitacoesServico.filterInput}
              />
            </div>
            
            <div className={t03_solicitacoesServico.filterGroup}>
              <label className={t03_solicitacoesServico.filterLabel}>Tipo de Evento</label>
              <select
                value={filtroTipoEvento}
                onChange={(e) => setFiltroTipoEvento(e.target.value)}
                className={t03_solicitacoesServico.filterSelect}
              >
                {tiposEvento.map(tipo => (
                  <option key={tipo} value={tipo}>{tipo}</option>
                ))}
              </select>
            </div>
            
            <div className={t03_solicitacoesServico.filterGroup}>
              <label className={t03_solicitacoesServico.filterLabel}>Status</label>
              <select
                value={filtroStatus}
                onChange={(e) => setFiltroStatus(e.target.value)}
                className={t03_solicitacoesServico.filterSelect}
              >
                {statusOptions.map(status => (
                  <option key={status} value={status}>
                  {
                    status === 'Todos' ? 'Todos' : 
                    status === 'pendente' ? 'Pendente' :
                    status === 'andamento' ? 'Em Andamento' : 'Concluído'
                  }
                  </option>
                ))}
              </select>
            </div>
            
            <div className={t03_solicitacoesServico.filterGroup}>
              <button
                onClick={handleLimparFiltros}
                className={t03_solicitacoesServico.filterButton}
              >
                Limpar Filtros
              </button>
            </div>
          </div>
        </div>

        {/* Estatísticas */}
        <div className={t03_solicitacoesServico.statsGrid}>
          <div className={t03_solicitacoesServico.statCard}>
            <div className={t03_solicitacoesServico.statNumberTotal}>
              {solicitacoes.length}
            </div>
            <div className={t03_solicitacoesServico.statLabel}>Total de Solicitações</div>
          </div>
          
          <div className={t03_solicitacoesServico.statCard}>
            <div className={t03_solicitacoesServico.statNumberPendente}>
              {solicitacoes.filter(s => s.situacaoServico === 'pendente').length}
            </div>
            <div className={t03_solicitacoesServico.statLabel}>Pendentes</div>
          </div>
          
          <div className={t03_solicitacoesServico.statCard}>
            <div className={t03_solicitacoesServico.statNumberAndamento}>
              {solicitacoes.filter(s => s.situacaoServico === 'andamento').length}
            </div>
            <div className={t03_solicitacoesServico.statLabel}>Em Andamento</div>
          </div>
          
          <div className={t03_solicitacoesServico.statCard}>
            <div className={t03_solicitacoesServico.statNumberConcluido}>
              {solicitacoes.filter(s => s.situacaoServico === 'concluido').length}
            </div>
            <div className={t03_solicitacoesServico.statLabel}>Concluídos</div>
          </div>
        </div>

        {/* Lista de Solicitações */}
        <div className={t03_solicitacoesServico.solicitacoesContainer}>

          {/* TÍTULO (SOLICITAÇÕES) */}
          <div className={t03_solicitacoesServico.solicitacoesHeader}>
            <h2 className={t03_solicitacoesServico.solicitacoesTitle}>
              Solicitações ({solicitacoesFiltradas.length})
            </h2>
          </div>
          
          {/* CADA CARD */}
          <div className={t03_solicitacoesServico.cardsGrid}>
            {solicitacoesFiltradas.map((solicitacao) => (
              <div key={solicitacao.id} className={t03_solicitacoesServico.cardItem}>
                <input
                  type="radio"
                  id={`solicitacao-${solicitacao.id}`}
                  name="solicitacao"
                  value={solicitacao.id}
                  checked={solicitacaoSelecionada?.id === solicitacao.id}
                  onChange={() => handleCardClick(solicitacao)}
                  className={t03_solicitacoesServico.radioInput}
                />
                <label 
                  htmlFor={`solicitacao-${solicitacao.id}`}
                  className={t03_solicitacoesServico.cardItem}
                >
                  <div className={`${t03_solicitacoesServico.card} ${
                    solicitacaoSelecionada?.id === solicitacao.id ? t03_solicitacoesServico.cardSelected : ''
                  }`}>
                    <div className={t03_solicitacoesServico.cardHeader}>
                      <span className={t03_solicitacoesServico.cardId}>
                        {solicitacao.idSolicitacao}
                      </span>
                      {/* {console.log("-> " + solicitacao.statusSolicitacao.situacao)} */}
                      {getStatusBadge(solicitacao.statusSolicitacao.situacao)}
                      {/* {getStatusBadge(solicitacao.situacaoServico)} */}
                    </div>
                    
                    <div className={t03_solicitacoesServico.cardContent}>
                      <div className={t03_solicitacoesServico.cardField}>
                        <span className={t03_solicitacoesServico.cardLabel}>Cliente</span>
                        <p className={t03_solicitacoesServico.cardValue}>
                          {solicitacao.cliente.nome}
                        </p>
                      </div>
                      
                      <div className={t03_solicitacoesServico.cardField}>
                        <span className={t03_solicitacoesServico.cardLabel}>Data da Solicitação</span>
                        <p className={t03_solicitacoesServico.cardValue}>
                          {solicitacao.dataSolicitacao}
                          {/* {formatarData(solicitacao.dataSolicitacao)} */}
                        </p>
                      </div>
                      
                      <div className={t03_solicitacoesServico.cardField}>
                        <span className={t03_solicitacoesServico.cardLabel}>Tipo de Serviço</span>
                        <p className={t03_solicitacoesServico.cardValue}>
                          {solicitacao.pacoteServico.tipoServico.nome}
                        </p>
                      </div>
                      
                      <div className={t03_solicitacoesServico.cardField}>
                        <span className={t03_solicitacoesServico.cardLabel}>Pacote Escolhido</span>
                        <p className={t03_solicitacoesServico.cardValuePacote}>
                          {solicitacao.pacoteServico.nome}
                        </p>
                      </div>
                      
                      <div className={t03_solicitacoesServico.cardField}>
                        <span className={t03_solicitacoesServico.cardLabel}>Data do Evento</span>
                        <p className={t03_solicitacoesServico.cardValue}>
                          {solicitacao.dataEvento} às {solicitacao.horarioInicio}
                          {/* {formatarData(solicitacao.dataEvento)} às {solicitacao.horarioEvento} */}
                        </p>
                      </div>
                    </div>
                  </div>
                </label>
              </div>
            ))}
            
            {solicitacoesFiltradas.length === 0 && (
              <div className={t03_solicitacoesServico.emptyState}>
                Nenhuma solicitação encontrada com os filtros aplicados.
              </div>
            )}
          </div>

          {/* Botões de Ação - Aparecem apenas quando uma solicitação está selecionada */}
          {solicitacaoSelecionada && (
            <BotoesSolicitacoesGestor solicitacaoSelecionada={solicitacaoSelecionada} />
          )}
        </div>

        {/* Modal de Detalhes */}
        {mostrarDetalhes && solicitacaoSelecionada && (
          <div className={t03_solicitacoesServico.modalOverlay} onClick={handleFecharDetalhes}>
            <div className={t03_solicitacoesServico.modalContainer} onClick={(e) => e.stopPropagation()}>
              <div className={t03_solicitacoesServico.modalHeader}>
                <h3 className={t03_solicitacoesServico.modalTitle}>
                  Detalhes da Solicitação - {solicitacaoSelecionada.idSolicitacao}
                </h3>
                <button
                  onClick={handleFecharDetalhes}
                  className={t03_solicitacoesServico.modalClose}
                >
                  ✕
                </button>
              </div>
              
              <div className={t03_solicitacoesServico.modalContent}>
                <div className={t03_solicitacoesServico.detailsGrid}>
                  <div className={t03_solicitacoesServico.detailGroup}>
                    <span className={t03_solicitacoesServico.detailLabel}>Cliente</span>
                    <p className={t03_solicitacoesServico.detailValue}>
                      {solicitacaoSelecionada.cliente.nome}
                    </p>
                  </div>
                  
                  <div className={t03_solicitacoesServico.detailGroupOdd}>
                    <span className={t03_solicitacoesServico.detailLabelOdd}>Status</span>
                    <div>
                      {getStatusBadge(solicitacaoSelecionada.statusSolicitacao.situacao)}
                    </div>
                  </div>
                  
                  <div className={t03_solicitacoesServico.detailGroup}>
                    <span className={t03_solicitacoesServico.detailLabel}>Data da Solicitação</span>
                    <p className={t03_solicitacoesServico.detailValue}>
                      {solicitacaoSelecionada.dataSolicitacao}
                      {/* {formatarData(solicitacaoSelecionada.dataSolicitacao)} */}
                    </p>
                  </div>
                  
                  <div className={t03_solicitacoesServico.detailGroupOdd}>
                    <span className={t03_solicitacoesServico.detailLabelOdd}>Tipo de Serviço</span>
                    <p className={t03_solicitacoesServico.detailValue}>
                      {solicitacaoSelecionada.pacoteServico.tipoServico.nome}
                    </p>
                  </div>
                  
                  <div className={t03_solicitacoesServico.detailGroup}>
                    <span className={t03_solicitacoesServico.detailLabel}>Pacote Escolhido</span>
                    <p className={t03_solicitacoesServico.detailValue}>
                      {solicitacaoSelecionada.pacoteServico.nome}
                    </p>
                  </div>
                  
                  <div className={t03_solicitacoesServico.detailGroupOdd}>
                    <span className={t03_solicitacoesServico.detailLabelOdd}>Data do Evento</span>
                    <p className={t03_solicitacoesServico.detailValue}>
                      {solicitacaoSelecionada.dataEvento} às {solicitacaoSelecionada.horarioInicio}
                      {/* {formatarData(solicitacaoSelecionada.dataEvento)} às {solicitacaoSelecionada.horarioEvento} */}
                    </p>
                  </div>
                  
                  <div className={t03_solicitacoesServico.detailGroup}>
                    <span className={t03_solicitacoesServico.detailLabel}>Endereço do Evento</span>
                    <p className={t03_solicitacoesServico.detailValue}>
                      {solicitacaoSelecionada.localEvento}
                    </p>
                  </div>
                  
                  <div className={t03_solicitacoesServico.detailGroupOdd}>
                    <span className={t03_solicitacoesServico.detailLabelOdd}>Contato</span>
                    <p className={t03_solicitacoesServico.detailValue}>
                      {solicitacaoSelecionada.cliente.email} | {solicitacaoSelecionada.cliente.celular}
                    </p>
                  </div>
                </div>
                
                <div className={t03_solicitacoesServico.detailGroup}>
                  <span className={t03_solicitacoesServico.detailLabel}>Descrição do Evento</span>
                  <p className={t03_solicitacoesServico.detailValue}>
                    {solicitacaoSelecionada.pacoteServico.descricao}
                  </p>
                </div>

                {/* Botões de Ação no Modal */}
                <BotoesSolicitacoesGestor solicitacaoSelecionada={solicitacaoSelecionada} />
              </div>
              
              <div className={t03_solicitacoesServico.modalFooter}>
                <button
                  onClick={handleFecharDetalhes}
                  className={t03_solicitacoesServico.secondaryButton}
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default T03_SolicitacoesServico;