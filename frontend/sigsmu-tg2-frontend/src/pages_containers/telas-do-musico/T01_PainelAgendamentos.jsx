// components/MusicianDashboard.jsx

// Importações de estilos
import t01_painelAgendaCss from './CSS/t01_painelAgendamentos.module.css';

// Importações de componentes
import Botao from 'components/Botao.jsx';

// Importações do React
import React, { useState, useEffect } from 'react';


// Dados mockados para demonstração
const mockAgendamentos = [
  {
    id: 1,
    data: '2024-12-15',
    hora: '19:00',
    local: 'Salão de Eventos Villa Borghese',
    tipoEvento: 'Casamento',
    contrato: 'CONTRATO_001.pdf',
    status: 'confirmado',
    cliente: 'Maria Silva & João Santos',
    valor: 2500.00,
    instrumentos: ['Violino', 'Piano']
  },
  {
    id: 2,
    data: '2024-12-20',
    hora: '20:30',
    local: 'Centro de Convenções Expo Center',
    tipoEvento: 'Evento Corporativo',
    contrato: 'CONTRATO_002.pdf',
    status: 'pendente',
    cliente: 'Tech Solutions Ltda',
    valor: 3200.00,
    instrumentos: ['Violino', 'Viola', 'Violoncelo']
  },
  {
    id: 3,
    data: '2024-12-22',
    hora: '16:00',
    local: 'Buffet Infantil Mundo Mágico',
    tipoEvento: 'Festa Infantil',
    contrato: 'CONTRATO_003.pdf',
    status: 'confirmado',
    cliente: 'Família Oliveira',
    valor: 1800.00,
    instrumentos: ['Violino']
  }
];

const tiposEvento = [
  'Todos',
  'Casamento',
  'Evento Corporativo',
  'Festa Infantil',
  'Formatura',
  'Jantar Privado'
];

const T01_painelAgendamentos = () => {
  const [agendamentos, setAgendamentos] = useState([]);
  const [filtroData, setFiltroData] = useState('');
  const [filtroTipoEvento, setFiltroTipoEvento] = useState('Todos');
  const [filtroStatus, setFiltroStatus] = useState('Todos');
  const [agendamentoSelecionado, setAgendamentoSelecionado] = useState(null);

  useEffect(() => {
    // Simular carregamento de dados da API
    setAgendamentos(mockAgendamentos);
  }, []);

  const agendamentosFiltrados = agendamentos.filter(agendamento => {
    const matchData = !filtroData || agendamento.data === filtroData;
    const matchTipo = filtroTipoEvento === 'Todos' || agendamento.tipoEvento === filtroTipoEvento;
    const matchStatus = filtroStatus === 'Todos' || agendamento.status === filtroStatus;
    
    return matchData && matchTipo && matchStatus;
  });

  const formatarData = (data) => {
    return new Date(data + 'T00:00:00').toLocaleDateString('pt-BR');
  };

  const getStatusBadge = (status) => {
    const statusClasses = {
      confirmado: `${t01_painelAgendaCss.statusBadge} ${t01_painelAgendaCss.statusConfirmed}`,
      pendente: `${t01_painelAgendaCss.statusBadge} ${t01_painelAgendaCss.statusPending}`,
      cancelado: `${t01_painelAgendaCss.statusBadge} ${t01_painelAgendaCss.statusCancelled}`
    };
    
    const statusText = {
      confirmado: 'Confirmado',
      pendente: 'Pendente',
      cancelado: 'Cancelado'
    };
    
    return (
      <span className={statusClasses[status] || statusClasses.pendente}>
        {statusText[status] || statusText.pendente}
      </span>
    );
  };

  const handleConfirmarParticipacao = (id) => {
    setAgendamentos(prev => 
      prev.map(ag => 
        ag.id === id ? { ...ag, status: 'confirmado' } : ag
      )
    );
    alert('Participação confirmada com sucesso!');
  };

  const handleVisualizarContrato = (contrato) => {
    // Simular visualização do contrato
    alert(`Abrindo contrato: ${contrato}`);
    // Em produção, isso abriria o PDF em uma nova aba
  };

  return (
    <div className={t01_painelAgendaCss.musicianDashboard}>
      <div className={t01_painelAgendaCss.dashboardContainer}>
        {/* Cabeçalho */}
        <div className={t01_painelAgendaCss.dashboardHeader}>
          <h1 className={t01_painelAgendaCss.dashboardTitle}>Painel de Agendamentos</h1>
          <p className={t01_painelAgendaCss.dashboardSubtitle}>Gerencie seus eventos e contratos musicais</p>
        </div>

        {/* Filtros */}
        <div className={t01_painelAgendaCss.filtersContainer}>
          <div className={t01_painelAgendaCss.filtersGrid}>
            <div className={t01_painelAgendaCss.filterGroup}>
              <label className={t01_painelAgendaCss.filterLabel}>Data</label>
              <input
                type="date"
                value={filtroData}
                onChange={(e) => setFiltroData(e.target.value)}
                className={t01_painelAgendaCss.filterInput}
              />
            </div>
            
            <div className={t01_painelAgendaCss.filterGroup}>
              <label className={t01_painelAgendaCss.filterLabel}>Tipo de Evento</label>
              <select
                value={filtroTipoEvento}
                onChange={(e) => setFiltroTipoEvento(e.target.value)}
                className={t01_painelAgendaCss.filterSelect}
              >
                {tiposEvento.map(tipo => (
                  <option key={tipo} value={tipo}>{tipo}</option>
                ))}
              </select>
            </div>
            
            <div className={t01_painelAgendaCss.filterGroup}>
              <label className={t01_painelAgendaCss.filterLabel}>Status</label>
              <select
                value={filtroStatus}
                onChange={(e) => setFiltroStatus(e.target.value)}
                className={t01_painelAgendaCss.filterSelect}
              >
                <option value="Todos">Todos</option>
                <option value="confirmado">Confirmado</option>
                <option value="pendente">Pendente</option>
                <option value="cancelado">Cancelado</option>
              </select>
            </div>
            
            <div className={t01_painelAgendaCss.filterGroup}>
              <button
                onClick={() => {
                  setFiltroData('');
                  setFiltroTipoEvento('Todos');
                  setFiltroStatus('Todos');
                }}
                className={t01_painelAgendaCss.filterButton}
              >
                Limpar Filtros
              </button>
            </div>
          </div>
        </div>

        {/* Estatísticas */}
        <div className={t01_painelAgendaCss.statsGrid}>
          <div className={t01_painelAgendaCss.statCard}>
            <div className={t01_painelAgendaCss.statNumberTotal}>{agendamentos.length}</div>
            <div className={t01_painelAgendaCss.statLabel}>Total de Agendamentos</div>
          </div>
          
          <div className={t01_painelAgendaCss.statCard}>
            <div className={t01_painelAgendaCss.statNumberConfirmed}>
              {agendamentos.filter(a => a.status === 'confirmado').length}
            </div>
            <div className={t01_painelAgendaCss.statLabel}>Confirmados</div>
          </div>
          
          <div className={t01_painelAgendaCss.statCard}>
            <div className={t01_painelAgendaCss.statNumberPending}>
              {agendamentos.filter(a => a.status === 'pendente').length}
            </div>
            <div className={t01_painelAgendaCss.statLabel}>Pendentes</div>
          </div>
          
          <div className={t01_painelAgendaCss.statCard}>
            <div className={t01_painelAgendaCss.statNumberValue}>
              R$ {agendamentos.reduce((total, a) => total + a.valor, 0).toLocaleString('pt-BR')}
            </div>
            <div className={t01_painelAgendaCss.statLabel}>Valor Total</div>
          </div>
        </div>

        {/* Lista de Agendamentos */}
        <div className={t01_painelAgendaCss.agendamentosContainer}>
          <div className={t01_painelAgendaCss.agendamentosHeader}>
            <h2 className={t01_painelAgendaCss.agendamentosTitle}>
              Agendamentos ({agendamentosFiltrados.length})
            </h2>
          </div>
          
          <div className={t01_painelAgendaCss.tableContainer}>
            <table className={t01_painelAgendaCss.agendamentosTable}>
              <thead className={t01_painelAgendaCss.tableHeader}>
                <tr>
                  <th className={t01_painelAgendaCss.tableHeaderCell}>Data/Hora</th>
                  <th className={t01_painelAgendaCss.tableHeaderCell}>Local & Evento</th>
                  <th className={t01_painelAgendaCss.tableHeaderCell}>Cliente</th>
                  <th className={t01_painelAgendaCss.tableHeaderCell}>Valor</th>
                  <th className={t01_painelAgendaCss.tableHeaderCell}>Status</th>
                  <th className={t01_painelAgendaCss.tableHeaderCell}>Ações</th>
                </tr>
              </thead>
              <tbody>
                {agendamentosFiltrados.map((agendamento, index) => (
                  <tr 
                    key={agendamento.id}
                    className={index % 2 === 0 ? t01_painelAgendaCss.tableRow : `${t01_painelAgendaCss.tableRow} ${t01_painelAgendaCss.tableRowEven}`}
                    onClick={() => setAgendamentoSelecionado(agendamento)}
                  >
                    <td className={`${t01_painelAgendaCss.tableCell} ${t01_painelAgendaCss.dateTimeCell}`}>
                      <div className={t01_painelAgendaCss.dateMain}>
                        {formatarData(agendamento.data)}
                      </div>
                      <div className={t01_painelAgendaCss.timeSub}>
                        {agendamento.hora}
                      </div>
                    </td>
                    <td className={t01_painelAgendaCss.tableCell}>
                      <div className={t01_painelAgendaCss.localMain}>
                        {agendamento.local}
                      </div>
                      <div className={t01_painelAgendaCss.eventType}>
                        {agendamento.tipoEvento}
                      </div>
                      <div className={t01_painelAgendaCss.instruments}>
                        {agendamento.instrumentos.join(', ')}
                      </div>
                    </td>
                    <td className={t01_painelAgendaCss.tableCell}>
                      <div className={t01_painelAgendaCss.clientName}>
                        {agendamento.cliente}
                      </div>
                    </td>
                    <td className={t01_painelAgendaCss.tableCell}>
                      <div className={t01_painelAgendaCss.valueAmount}>
                        R$ {agendamento.valor.toLocaleString('pt-BR')}
                      </div>
                    </td>
                    <td className={t01_painelAgendaCss.tableCell}>
                      {getStatusBadge(agendamento.status)}
                    </td>
                    <td className={`${t01_painelAgendaCss.tableCell} ${t01_painelAgendaCss.actionsCell}`}>
                      <div className={t01_painelAgendaCss.actionsGroup}>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleVisualizarContrato(agendamento.contrato);
                          }}
                          className={`${t01_painelAgendaCss.actionButton} ${t01_painelAgendaCss.actionButtonContract}`}
                        >
                          Contrato
                        </button>
                        {agendamento.status === 'pendente' && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleConfirmarParticipacao(agendamento.id);
                            }}
                            className={`${t01_painelAgendaCss.actionButton} ${t01_painelAgendaCss.actionButtonConfirm}`}
                          >
                            Confirmar
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {agendamentosFiltrados.length === 0 && (
              <div className={t01_painelAgendaCss.emptyState}>
                Nenhum agendamento encontrado com os filtros aplicados.
              </div>
            )}
          </div>
        </div>

        {/* Modal de Detalhes */}
        {agendamentoSelecionado && (
          <div className={t01_painelAgendaCss.modalOverlay}>
            <div className={t01_painelAgendaCss.modalContainer}>
              <div className={t01_painelAgendaCss.modalHeader}>
                <h3 className={t01_painelAgendaCss.modalTitle}>Detalhes do Agendamento</h3>
                <button
                  onClick={() => setAgendamentoSelecionado(null)}
                  className={t01_painelAgendaCss.modalClose}
                >
                  ✕
                </button>
              </div>
              
              <div className={t01_painelAgendaCss.modalContent}>
                <div className={t01_painelAgendaCss.detailsGrid}>
                  <div className={t01_painelAgendaCss.detailGroup}>
                    <span className={t01_painelAgendaCss.detailLabel}>Data</span>
                    <p className={t01_painelAgendaCss.detailValue}>
                      {formatarData(agendamentoSelecionado.data)}
                    </p>
                  </div>
                  
                  <div className={t01_painelAgendaCss.detailGroupOdd}>
                    <span className={t01_painelAgendaCss.detailLabelOdd}>Hora</span>
                    <p className={t01_painelAgendaCss.detailValue}>
                      {agendamentoSelecionado.hora}
                    </p>
                  </div>
                  
                  <div className={t01_painelAgendaCss.detailGroup}>
                    <span className={t01_painelAgendaCss.detailLabel}>Local do Evento</span>
                    <p className={t01_painelAgendaCss.detailValue}>
                      {agendamentoSelecionado.local}
                    </p>
                  </div>
                  
                  <div className={t01_painelAgendaCss.detailGroupOdd}>
                    <span className={t01_painelAgendaCss.detailLabelOdd}>Tipo de Evento</span>
                    <p className={t01_painelAgendaCss.detailValue}>
                      {agendamentoSelecionado.tipoEvento}
                    </p>
                  </div>
                  
                  <div className={t01_painelAgendaCss.detailGroup}>
                    <span className={t01_painelAgendaCss.detailLabel}>Status</span>
                    <div>
                      {getStatusBadge(agendamentoSelecionado.status)}
                    </div>
                  </div>
                  
                  <div className={t01_painelAgendaCss.detailGroupOdd}>
                    <span className={t01_painelAgendaCss.detailLabelOdd}>Cliente</span>
                    <p className={t01_painelAgendaCss.detailValue}>
                      {agendamentoSelecionado.cliente}
                    </p>
                  </div>
                  
                  <div className={t01_painelAgendaCss.detailGroup}>
                    <span className={t01_painelAgendaCss.detailLabel}>Instrumentos Requeridos</span>
                    <p className={t01_painelAgendaCss.detailValue}>
                      {agendamentoSelecionado.instrumentos.join(', ')}
                    </p>
                  </div>
                  
                  <div className={t01_painelAgendaCss.detailGroupOdd}>
                    <span className={t01_painelAgendaCss.detailLabelOdd}>Valor do Serviço</span>
                    <p className={t01_painelAgendaCss.detailValueLarge}>
                      R$ {agendamentoSelecionado.valor.toLocaleString('pt-BR')}
                    </p>
                  </div>
                </div>
                
                <div className={t01_painelAgendaCss.detailGroup}>
                  <span className={t01_painelAgendaCss.detailLabel}>Contrato</span>
                  <div>
                    <button
                      onClick={() => handleVisualizarContrato(agendamentoSelecionado.contrato)}
                      className={t01_painelAgendaCss.contractButton}
                    >
                      📄 Visualizar Contrato
                    </button>
                  </div>
                </div>
              </div>
              
              <div className={t01_painelAgendaCss.modalFooter}>
                <button
                  onClick={() => setAgendamentoSelecionado(null)}
                  className={t01_painelAgendaCss.secondaryButton}
                >
                  Fechar
                </button>
                {agendamentoSelecionado.status === 'pendente' && (
                  <button
                    onClick={() => {
                      handleConfirmarParticipacao(agendamentoSelecionado.id);
                      setAgendamentoSelecionado(null);
                    }}
                    className={t01_painelAgendaCss.primaryButton}
                  >
                    Confirmar Participação
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

        <Botao
          msg={"cadastro de instrumentos"}
          rota={"/Intranet/RotasMusico/CadastroInstrumentos"}
          ativarEstilo
        />

    </div>
  );
};

export default T01_painelAgendamentos;