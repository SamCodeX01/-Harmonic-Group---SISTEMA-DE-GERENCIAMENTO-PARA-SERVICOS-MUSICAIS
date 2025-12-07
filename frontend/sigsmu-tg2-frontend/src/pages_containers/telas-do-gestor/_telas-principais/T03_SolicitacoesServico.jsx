// Importações de estilos
import t03_solicitacoesServico from "./CSS/t03_solicitacoesservico.module.css";

// Importações de componentes
import BotoesSolicitacoesGestor from "../_componentes-grandes/historico/BotoesSolicitacoesGestor.jsx";

// Importações da API (Axios)
import { listarSolicitacoesEmAberto } from "services/Outras/SolicitacaoServico.js";
import { listarTiposServico }         from "services/TabelasIndependentes/TipoServico";
import { buscarGrupoDoServico }       from "services/TabelasAssociativas/GrupoDoServico";
import { dadosGestor }                from "services/_AUXILIAR/GlobalData.js";

// Importações do React
import React, { useEffect, useState } from "react";


// Função criada para capitalizar as palavras (primeira letra em maiúsculo)
function capitalizeWords(str) {
  return str
    .split(" ")
    .map(p => p.charAt(0).toUpperCase() + p.slice(1))
    .join(" ");
}


// Tela de SOLICITAÇÕES DE SERVIÇO - para visualização das ordens de serviço geradas por solicitações de clientes
function T03_SolicitacoesServico() {

  // Guarda o GESTOR LOGADO no sistema //
  const gestorLogado = dadosGestor.get()
  //==================================//

  // Solicitações de Serviço retornadas do banco
  const [solicitacoesRetornadas, setSolicitacoesRetornadas] = useState(null)
  const [grupoDoServico, setGrupoDoServico]                 = useState(null)

  const [tiposEvento, setTiposEvento] = useState([])

  //////////////////////////////////////////////////////////////////////

  // Responsável por carregar as informações importantes dessa tela
  const puxarSolicitacoes = async () => {
    try {
      const response1 = await listarSolicitacoesEmAberto()
      setSolicitacoesRetornadas(response1.data)

      const grupo = await Promise.all(
        (response1.data).map(async solicitacao => {
          try {
            const response2 = await buscarGrupoDoServico(solicitacao.id)
            return response2.data
          }
          catch(erro) {
            alert("Erro ao puxar grupo do serviço!")
            console.log("Erro ao puxar grupo do serviço: " + erro)
          }
        })
      )
      setGrupoDoServico( grupo )
    }
    catch (erro) {
      alert("Erro ao puxar dados do banco!")
      console.log("Erro ao puxar dados do banco: " + erro)
    }
  }


  // Puxa os tipos de serviço do banco
  const puxarTiposServico = async () => {
    try {
      const response = await listarTiposServico()
      setTiposEvento( ["Todos", ...response.data.map(tipoLocal => tipoLocal.nome)] )
    }
    catch(erro) {
      alert("Erro ao puxar tipos de serviço!")
      console.log("Erro ao puxar tipos de serviço: " + erro)
    }
  }


  // Chama a função abaixo apenas uma única vez
  useEffect(() => {
    puxarSolicitacoes()
    puxarTiposServico()
  }, [])

  /////////////////////////////////////////////////////////////////////


  // Opções do filtro - TEM QUE PUXAR DO BANCO (e add o campo cor para aplicação dinâmica)
  const statusOptions = [
    'Todos',
    'pendente',
    'andamento',
    'aprovacao',
    'marcado'
  ];

  // Opções do filtro e seleção
  const [solicitacaoSelecionada, setSolicitacaoSelecionada]           = useState(null);
  const [indexSolicitacaoSelecionada, setIndexSolicitacaoSelecionada] = useState(null);
  const [filtroData, setFiltroData]                                   = useState('');  // DD/MM/YYYY
  const [filtroTipoEvento, setFiltroTipoEvento]                       = useState('Todos');
  const [filtroStatus, setFiltroStatus]                               = useState('Todos');
  const [mostrarDetalhes, setMostrarDetalhes]                         = useState(false);

  const [solicitacoesFiltradas, setSolicitacoesFiltradas]             = useState([])

  // DATAS PARA TESTE:
  // 12/03/2025
  // 27/07/2025
  // 03/10/2025
  // 19/01/2026
  // 09/09/2025

  useEffect(() => {

    // Responsável por exibir as solicitações corretas de acordo com os filtros selecionados
    setSolicitacoesFiltradas(
      (solicitacoesRetornadas ?
        solicitacoesRetornadas.filter(solicitacao => { // Filtra por data/tipo/status //
          const matchData   = !filtroData                  || solicitacao.dataSolicitacao                === filtroData;
          const matchTipo   = filtroTipoEvento === 'Todos' || solicitacao.pacoteServico.tipoServico.nome === filtroTipoEvento; 
          // COLOCAR UM CONSOLE LOG AQ PRA VER - o do banco e o do filtro
          const matchStatus = filtroStatus === 'Todos'     || solicitacao.statusSolicitacao.situacao     === filtroStatus;
          
          return matchData && matchTipo && matchStatus;
        })
      : [])
    )
  }, [solicitacoesRetornadas, filtroData, filtroTipoEvento, filtroStatus])



  // ORGANIZA O STATUS DE CADA CARD //
  const getStatusBadge = (status) => {
    
    const statusClasses = {
      pendente : `${t03_solicitacoesServico.statusBadge} ${t03_solicitacoesServico.statusPendente}`,
      andamento: `${t03_solicitacoesServico.statusBadge} ${t03_solicitacoesServico.statusAndamento}`,
      aprovacao: `${t03_solicitacoesServico.statusBadge} ${t03_solicitacoesServico.statusAprovacao}`,
      marcado: `${t03_solicitacoesServico.statusBadge} ${t03_solicitacoesServico.statusMarcado}`
    };
    
    const statusText = {
      pendente  : 'Pendente',
      andamento : 'Em Andamento',
      aprovacao : 'Em Aprovação',
      marcado   : 'Marcado'
    };
    
    return (
      <span className={statusClasses[status] || statusClasses.pendente}>
        {statusText[status] || statusText.pendente}
      </span>
    );
  };

  const handleCardClick = (solicitacao, i) => {
    setSolicitacaoSelecionada(solicitacao);
    setIndexSolicitacaoSelecionada(i)
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

        {/* Cabeçalho H1 da página*/}
        <div className={t03_solicitacoesServico.dashboardHeader}>
          <h1 className={t03_solicitacoesServico.dashboardTitle}>Painel de Solicitações</h1>
          <p className={t03_solicitacoesServico.dashboardSubtitle}>Gerencie as solicitações de serviço dos clientes</p>
        </div>

        {/* Filtros - div de filtros por data / tipo servico / status */}
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
                {tiposEvento.map((evento, i) => (
                  <option key={i} >{evento}</option>
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
                    status === 'andamento' ? 'Em Andamento' : 
                    status === 'aprovacao' ? 'Em Aprovação' : "Marcado"
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

        {/* Estatísticas - div que exibe a quantidade de solicitações pendentes / em andamento / concluídas */}
        <div className={t03_solicitacoesServico.statsGrid}>

          <div className={t03_solicitacoesServico.statCard}>
            <div className={t03_solicitacoesServico.statNumberTotal}>
              {solicitacoesRetornadas?.length}
            </div>
            <div className={t03_solicitacoesServico.statLabel}>Total de Solicitações</div>
          </div>
          
          <div className={t03_solicitacoesServico.statCard}>
            <div className={t03_solicitacoesServico.statNumberPendente}>
              {solicitacoesRetornadas?.filter(s => s.statusSolicitacao.situacao === 'pendente').length}
            </div>
            <div className={t03_solicitacoesServico.statLabel}>Pendentes</div>
          </div>
          
          <div className={t03_solicitacoesServico.statCard}>
            <div className={t03_solicitacoesServico.statNumberAndamento}>
              {solicitacoesRetornadas?.filter(s => s.statusSolicitacao.situacao === 'andamento').length}
            </div>
            <div className={t03_solicitacoesServico.statLabel}>Em Andamento</div>
          </div>
          
          <div className={t03_solicitacoesServico.statCard}>
            <div className={t03_solicitacoesServico.statNumberConcluido}>
              {solicitacoesRetornadas?.filter(s => s.statusSolicitacao.situacao === 'marcado').length}
            </div>
            <div className={t03_solicitacoesServico.statLabel}>Marcados</div>
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
            {solicitacoesFiltradas.map((solicitacao, i) => (
              <div key={solicitacao.id} className={t03_solicitacoesServico.cardItem}>
                <input
                  type="radio"
                  id={`solicitacao-${solicitacao.id}`}
                  name="solicitacao"
                  value={solicitacao.id}
                  checked={solicitacaoSelecionada?.id === solicitacao.id}
                  onChange={() => handleCardClick(solicitacao, i)}
                  className={t03_solicitacoesServico.radioInput}
                />
                <label 
                  htmlFor={`solicitacao-${solicitacao.id}`}
                  className={t03_solicitacoesServico.cardItem}
                >
                  <div className={`${t03_solicitacoesServico.card} ${
                    solicitacaoSelecionada?.id === solicitacao.id ? t03_solicitacoesServico.cardSelected : ''
                  }`}>

                    {/* HEADER DE CADA CARD */}
                    <div className={t03_solicitacoesServico.cardHeader}>
                      <span className={t03_solicitacoesServico.cardId}>
                        ID da solicitação: {solicitacao.id}
                      </span>
                      {/* {console.log("-> " + solicitacao.statusSolicitacao.situacao)} */}
                      {getStatusBadge(solicitacao.statusSolicitacao.situacao)}
                      {/* {getStatusBadge(solicitacao.situacaoServico)} */}
                    </div>
                    
                    {/* INFORMAÇÕES DE CADA CARD */}
                    <div className={t03_solicitacoesServico.cardContent}>

                      <div className={t03_solicitacoesServico.cardField}>
                        <span className={t03_solicitacoesServico.cardLabel}>Cliente</span>
                        <p className={t03_solicitacoesServico.cardValue}>
                          {capitalizeWords(solicitacao.cliente.nome)}
                        </p>
                      </div>
                      
                      <div className={t03_solicitacoesServico.cardField}>
                        <span className={t03_solicitacoesServico.cardLabel}>Data da Solicitação</span>
                        <p className={t03_solicitacoesServico.cardValue}>
                          {capitalizeWords(solicitacao.dataSolicitacao)}
                          {/* {formatarData(solicitacao.dataSolicitacao)} */}
                        </p>
                      </div>
                      
                      <div className={t03_solicitacoesServico.cardField}>
                        <span className={t03_solicitacoesServico.cardLabel}>Tipo de Serviço</span>
                        <p className={t03_solicitacoesServico.cardValue}>
                          {capitalizeWords(solicitacao.pacoteServico.tipoServico.nome)}
                        </p>
                      </div>
                      
                      <div className={t03_solicitacoesServico.cardField}>
                        <span className={t03_solicitacoesServico.cardLabel}>Pacote Escolhido</span>
                        <p className={t03_solicitacoesServico.cardValuePacote}>
                          {capitalizeWords(solicitacao.pacoteServico.nome)}
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

        </div>


        {/* MAIORES DETALHES DE CADA CARD */}
        {mostrarDetalhes && solicitacaoSelecionada && (
          <div className={t03_solicitacoesServico.modalOverlay} onClick={handleFecharDetalhes}>
            <div className={t03_solicitacoesServico.modalContainer} onClick={(e) => e.stopPropagation()}>
              
              {/* HEADER DOS MAIORES DETALHES DE CADA CARD */}
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
              
              {/* MAIN DOS MAIORES DETALHES DE CADA CARD - os botões do gestor ficam aqui dentro */}
              <div className={t03_solicitacoesServico.modalContent}>
                <div className={t03_solicitacoesServico.detailsGrid}>

                  <div className={t03_solicitacoesServico.detailGroup}>
                    <span className={t03_solicitacoesServico.detailLabel}>Cliente</span>
                    <p className={t03_solicitacoesServico.detailValue}>
                      {capitalizeWords(solicitacaoSelecionada.cliente.nome)}
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
                      {capitalizeWords(solicitacaoSelecionada.pacoteServico.tipoServico.nome)}
                    </p>
                  </div>
                  
                  <div className={t03_solicitacoesServico.detailGroup}>
                    <span className={t03_solicitacoesServico.detailLabel}>Pacote Escolhido</span>
                    <p className={t03_solicitacoesServico.detailValue}>
                      {capitalizeWords(solicitacaoSelecionada.pacoteServico.nome)}
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
                      {capitalizeWords(solicitacaoSelecionada.localEvento)}
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

                {/* Mostra os custos se definidos */}
                {solicitacaoSelecionada.custo && 
                  <div className={t03_solicitacoesServico.custo}> Custos do Serviço:
                    <div className={t03_solicitacoesServico.detailGroup}>

                      <div>
                        <span className={t03_solicitacoesServico.detailLabel}>Combustível</span>
                        <p className={t03_solicitacoesServico.detailValue}>
                          {solicitacaoSelecionada.custo.combustivel}
                        </p>
                      </div>

                      <div>
                        <span className={t03_solicitacoesServico.detailLabel}>Preço do litro</span>
                        <p className={t03_solicitacoesServico.detailValue}>
                          {solicitacaoSelecionada.custo.precoLitro}
                        </p>
                      </div>

                      <div>
                        <span className={t03_solicitacoesServico.detailLabel}>Distância</span>
                        <p className={t03_solicitacoesServico.detailValue}>
                          {solicitacaoSelecionada.custo.distancia}
                        </p>
                      </div>

                      <div>
                        <span className={t03_solicitacoesServico.detailLabel}>Pedágio</span>
                        <p className={t03_solicitacoesServico.detailValue}>
                          {solicitacaoSelecionada.custo.pedagio}
                        </p>
                      </div>
                    
                      <div>
                        <span className={t03_solicitacoesServico.detailLabel}>Consumo Médio dos Veículos</span>
                        <p className={t03_solicitacoesServico.detailValue}>
                          {solicitacaoSelecionada.custo.consumoMedioVeiculo}
                        </p>
                      </div>

                      <div>
                        <span className={t03_solicitacoesServico.detailLabel}>Cache dos Músicos</span>
                        <p className={t03_solicitacoesServico.detailValue}>
                          {solicitacaoSelecionada.custo.cacheMusicos}
                        </p>
                      </div>

                      <div>
                        <span className={t03_solicitacoesServico.detailLabel}>Alimentação</span>
                        <p className={t03_solicitacoesServico.detailValue}>
                          {solicitacaoSelecionada.custo.alimentacao}
                        </p>
                      </div>

                      <div>
                        <span className={t03_solicitacoesServico.detailLabel}>Aluguel de Equipamentos</span>
                        <p className={t03_solicitacoesServico.detailValue}>
                          {solicitacaoSelecionada.custo.aluguelEquipamentos}
                        </p>
                      </div>
                    
                      <div>
                        <span className={t03_solicitacoesServico.detailLabel}>Demonstração</span>
                        <p className={t03_solicitacoesServico.detailValue}>
                          {solicitacaoSelecionada.custo.demonstracao}
                        </p>
                      </div>
                    
                      <div>
                        <span className={t03_solicitacoesServico.detailLabel}>Passagem dos Músicos</span>
                        <p className={t03_solicitacoesServico.detailValue}>
                          {solicitacaoSelecionada.custo.passagemMusico}
                        </p>
                      </div>

                      <div>
                        <span className={t03_solicitacoesServico.detailLabel}>Desconto</span>
                        <p className={t03_solicitacoesServico.detailValue}>
                          {solicitacaoSelecionada.custo.desconto}
                        </p>
                      </div>

                      {/* <div>
                        <span className={t03_solicitacoesServico.detailLabel}>TOTAL</span>
                        <p className={t03_solicitacoesServico.detailValue}>
                          {solicitacaoSelecionada.custo}
                        </p>
                      </div> */}
                    </div>
                  </div>
                }

                {/* {console.log("sol_id -> " + solicitacaoSelecionada.id)}
                {console.log("retorno -> ", puxarGrupoDoServico(solicitacaoSelecionada.id) ) } */}
                
                { grupoDoServico[indexSolicitacaoSelecionada] && 
                  <div className={t03_solicitacoesServico.musicos}> Grupo do Serviço:
                  {
                    grupoDoServico[indexSolicitacaoSelecionada].map((musico, i) => {
                      return <div className={t03_solicitacoesServico.detailGroup} key={i}>
                    
                        <div>
                          <span className={t03_solicitacoesServico.detailLabel}>Nome</span>
                          <p className={t03_solicitacoesServico.detailValue}>
                            {musico.nome}
                          </p>
                        </div>
                        <div>
                          <span className={t03_solicitacoesServico.detailLabel}>Email</span>
                          <p className={t03_solicitacoesServico.detailValue}>
                            {musico.email}
                          </p>
                        </div>
                        <div>
                          <span className={t03_solicitacoesServico.detailLabel}>Celular</span>
                          <p className={t03_solicitacoesServico.detailValue}>
                            {musico.celular}
                          </p>
                        </div>
                        <div>
                          <span className={t03_solicitacoesServico.detailLabel}>Endereço</span>
                          <p className={t03_solicitacoesServico.detailValue}>
                            {musico.endereco}
                          </p>
                        </div>
                        <div>
                          <span className={t03_solicitacoesServico.detailLabel}>Data de Cadastro</span>
                          <p className={t03_solicitacoesServico.detailValue}>
                            {musico.dataCadastro}
                          </p>
                        </div>
                        <div>
                          <span className={t03_solicitacoesServico.detailLabel}>Avaliacao</span>
                          <p className={t03_solicitacoesServico.detailValue}>
                            {musico.avaliacao}
                          </p>
                        </div>
                      </div>
                    })
                  }
                  </div>
                }

                {/* Botões de Ação no Modal */}
                <BotoesSolicitacoesGestor solicitacaoSelecionada={solicitacaoSelecionada} />
              </div>
              
              {/* FOOTER DOS MAIORES DETALHES DE CADA CARD */}
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