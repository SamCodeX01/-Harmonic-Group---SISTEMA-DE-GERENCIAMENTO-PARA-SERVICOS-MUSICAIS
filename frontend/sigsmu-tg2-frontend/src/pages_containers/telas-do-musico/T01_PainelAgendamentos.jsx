// Importações de estilos
import css from './CSS/t01_painelagendamentos.module.css';

// Importações de componentes
import Botao from 'components/Botao.jsx';
import Select from 'components/Select.jsx';

// Importações da API (Axios)
import { listarSolicitacoesParaMusicos, mudarStatusDaSolicitacao } from "services/Outras/SolicitacaoServico.js"
import { buscarInstrumentosEscolhidos }                            from "services/TabelasAssociativas/InstrumentosEscolhidos.js"
import { buscarInstrumentosDoMusico }                              from "services/TabelasAssociativas/InstrumentosDoMusico.js"
import { buscarGrupoDoServico, adicionarAoGrupoDoServico }         from "services/TabelasAssociativas/GrupoDoServico.js"

// Importações do React
import React, { useState, useEffect } from 'react';


// ESTRUTURA DO QUE PRECISA MOSTRAR //
/*
  id
  dataEvento
  horarioInicio
  horarioTermino
  localEvento
  tipoServico
  valorCache
  instrumentosEscolhidos
  status TENHO QUE VER
  contrato : 'CONTRATO_003.pdf',
*/


// FALTA PUXAR TUDO DO BANCO //

const tiposEvento = [
  'Todos',
  'casamento',
  'aniversario',
  'formatura',
  'corporativo'
];


// Tela de VISUALIZAÇÃO DE AGENDAMENTOS de serviços so músico
function T01_painelAgendamentos(){

  // Musico logado
  const musicoLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

  const [agendamentos, setAgendamentos]               = useState([]);
  const [objsDosAgendamentos, setObjsDosAgendamentos] = useState(null);
  

  const [musicoEstaNoServico, setMusicoEstaNoServico]     = useState(false)
  const [instrumentosEscolhidos, setInstrumentosEscolhidos] = useState(null)


  // Retorna vários dados essenciais do banco
  const puxarDadosDoBanco = async () => {
    try {

      // Retorna as solicitações em aberto - MUDAR DPS
      const solicitacoesRetornadas = (await listarSolicitacoesParaMusicos()).data;
      console.log("Qtd de solicitações puxadas -> ", solicitacoesRetornadas.length)
      
      // Retorna os instrumentos cadastrados do músico logado
      const instrumentosDoMusico = (await buscarInstrumentosDoMusico(musicoLogado.cpf)).data
      console.log("Qtd de instrumentos do músico -> ", instrumentosDoMusico.length)
      

      // Retorna somente as solicitações de serviço que fazem sentido com o perfil do músico
      const listaFiltrada = await Promise.all(
        solicitacoesRetornadas.map(async solicitacao => {
          
          // Trás os instrumentos da solicitação atual
          const instrumentosSolicitacao = (await buscarInstrumentosEscolhidos(solicitacao.id)).data

          // Verifica se algum dos instrumentos bate com os do músico
          const existe = instrumentosSolicitacao?.some(ins =>
            instrumentosDoMusico?.some(musIns => musIns.id === ins.id)
          );

          // Se bater, retorna a solicitação
          return existe && solicitacao.statusSolicitacao.situacao === "andamento" ? solicitacao : null;
        })
      ); // FIM DO AWAIT PROMISSE


      // Responsável por montar os objs contendo a SOLICITAÇÃO/GRUPO/INSTRUMENTOS de cada solicitação
      const objsListaFiltrada = await Promise.all(
        listaFiltrada.filter(item => item !== null).map(async solicitacao => {

          // Retorna o grupo e instrumentos do servico atual
          const grupoDoServico = await puxarMusicosDoServico(solicitacao.id)
          const instrumentosDaSolicitacao = await puxarInstrumentosEscolhidos(solicitacao.id)

          console.log("solicitacao -> ", solicitacao)

          // Se a solicitacao atingir o número de músicos cadastrados, ela MUDA O STATUS e desaparece
          if (grupoDoServico.length >= instrumentosDaSolicitacao.length)
            await mudarStatusDaSolicitacao(solicitacao.id, 1) // muda para status pendente
          else {
            return {
              solicitacao,
              grupoDoServico,
              instrumentosDaSolicitacao
            }
          }

        })
      ); // FIM DO AWAIT PROMISSE


      // Guarda as listas para recuperação depois      
      setAgendamentos( objsListaFiltrada.map(obj => obj.solicitacao) )
      setObjsDosAgendamentos ( objsListaFiltrada )


      // Teste apenas
      console.log( "Solicitações -> ", objsListaFiltrada.map(obj => obj.solicitacao) )
      console.log("Tamanho da lista filtrada -> ", objsListaFiltrada.map(obj => obj.solicitacao).length)

    } 
    catch (erro) {
      alert("Erro ao puxar as solicitações em aberto!");
      console.log("Erro ao puxar as solicitações em aberto: " + erro);
    }
  };


  // Retorna os instrumentos do serviço
  const puxarInstrumentosEscolhidos = async (sol_id) => {
      try {
        const response = await buscarInstrumentosEscolhidos(sol_id)
        return response.data
      }
      catch(erro) {
        alert("Erro ao puxar instrumentos da solicitação!")
        console.log("Erro ao puxar instrumentos da solicitação: " + erro)
      }
    }
    

  // Checa se músico faz parte do grupo de serviço ou não
  const puxarMusicosDoServico = async (sol_id) => {
    try {
      const response = await buscarGrupoDoServico(sol_id)
      return response.data
      // console.log("SOL_ID -> " + sol_id)
      // console.log("grupo_da_sol " + sol_id + " -> ", promisse.data)
    }
    catch(erro) {
      alert("Erro ao verificar se o músico faz parte do serviço!")
      console.log("Erro ao verificar se o músico faz parte do serviço: " + erro)
    }
  }
    
  // Executa a função abaixo somente uma vez
  useEffect(() => {
    puxarDadosDoBanco()
    console.log("CPF_LOGADO -> " + musicoLogado.cpf)
  }, [])


  
  const [filtroData, setFiltroData]             = useState('');
  const [filtroTipoEvento, setFiltroTipoEvento] = useState('Todos');
  const [filtroStatus, setFiltroStatus]         = useState('Todos');


  const agendamentosFiltrados = agendamentos.filter(agendamento => {
    const matchData   = !filtroData                  || agendamento.dataEvento                     === filtroData;
    const matchTipo   = filtroTipoEvento === 'Todos' || agendamento.pacoteServico.tipoServico.nome === filtroTipoEvento;
    const matchStatus = filtroStatus === 'Todos'     || agendamento.statusSolicitacao.situacao     === filtroStatus;
    
    return matchData && matchTipo && matchStatus;
  });

  // FORMATA A DATA PARA DEIXAR PADRONIZADO
  const formatarData = (data) => {
    return new Date(data + 'T00:00:00').toLocaleDateString('pt-BR');
  };

  const getStatusBadge = (status) => {

    const statusClasses = {
      confirmado : `${css.statusBadge} ${css.statusConfirmed}`,
      pendente   : `${css.statusBadge} ${css.statusPending}`
    };
    
    const statusText = {
      confirmado : 'Confirmado',
      pendente   : 'Pendente'
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

  // RETORNO PRINCIPAL ======================================================================================================== //
  return (
    <div className={css.main}>
      <div className={css.dashboardContainer}>

        {/* Cabeçalho */}
        <div className={css.dashboardHeader}>
          <h1 className={css.dashboardTitle}>Painel de Agendamentos</h1>
          <p className={css.dashboardSubtitle}>Gerencie seus eventos e contratos musicais</p>
        </div>

        {/* Filtros */}
        <div className={css.filtersContainer}>
          <div className={css.filtersGrid}>

            {/* por data */}
            <div className={css.filterGroup}>
              <label className={css.filterLabel}>Data</label>
              <input
                type="date"
                value={filtroData}
                onChange={(e) => setFiltroData(e.target.value)}
                className={css.filterInput}
              />
            </div>
            
            {/* Tipo do Evento */}
            <div className={css.filterGroup}>
              <label>Tipo de Evento</label>
              <select
                value={filtroTipoEvento}
                onChange={(e) => setFiltroTipoEvento(e.target.value)}
              >
                {tiposEvento.map((tipo, i) => (
                  <option key={i} value={tipo}>{tipo.charAt(0).toUpperCase() + tipo.slice(1)}</option>
                ))}
              </select>
            </div>
            
            {/* Filtro de Status */}
            <div className={css.filterGroup}>
              <Select 
                msg={"Status"}
                setValue={setFiltroStatus}
                listaOpcoes={["Todos","confirmado","pendente"]}
              />
            </div>
            
            {/* Botão limpar filtros */}
            <div >
              <label>.</label>
              <button
                onClick={() => {
                  setFiltroData('');
                  setFiltroTipoEvento('Todos');
                  setFiltroStatus('Todos');
                }}
                className={css.filterButton}
              >
                Limpar Filtros
              </button>
            </div>

          </div>
        </div>

        {/* Estatísticas */}
        <div className={css.statsGrid}>

          <div className={css.statCard}>
            <div className={css.statNumberTotal}>{agendamentos.length}</div>
            <div className={css.statLabel}>Total de Agendamentos</div>
          </div>
          
          <div className={css.statCard}>
            <div className={css.statNumberConfirmed}>
              X
              {/* {agendamentos.filter(a => a.statusSolicitacao.situacao === 'confirmado').length} */}
              {/* {console.log("TESTE -> ", objsDosAgendamentos.filter(obj => obj.grupoDoServico.filter(m => m.cpf === musicoLogado.cpf)).length ) } */}
            </div>
            <div className={css.statLabel}>Confirmados</div>
          </div>
          
          <div className={css.statCard}>
            <div className={css.statNumberPending}>
              X
              {/* {agendamentos.filter(a => a.statusSolicitacao.situacao === 'pendente').length} */}
            </div>
            <div className={css.statLabel}>Pendentes</div>
          </div>
          
          <div className={css.statCard}>
            <div className={css.statNumberValue}>
              R$ { agendamentos.reduce((total, a) => total + Number(a.custo.cacheMusicos), 0).toLocaleString('pt-BR')}
            </div>
            <div className={css.statLabel}>Valor Total</div>
          </div>
        </div>

        {/* Lista de Agendamentos */}
        <div className={css.agendamentosContainer}>

          {/* Título da tabela */}
          <div className={css.agendamentosHeader}>
            <h2 className={css.agendamentosTitle}>
              Agendamentos ({agendamentosFiltrados.length})
            </h2>

            <Botao
              msg={"cadastro de instrumentos"}
              rota={"/Intranet/RotasMusico/CadastroInstrumentos"}
            />
          </div>
          
          {/* Tabela */}
          <div className={css.tableContainer}>
            <table className={css.agendamentosTable}>

              {/* Header da tabela */}
              <thead className={css.tableHeader}>
                <tr>
                  <th className={css.tableHeaderCell}>Data/Hora</th>
                  <th className={css.tableHeaderCell}>Local & Evento</th>
                  <th className={css.tableHeaderCell}>Valor</th>
                  <th className={css.tableHeaderCell}>Status</th>
                  <th className={css.tableHeaderCell}>Ações</th>
                </tr>
              </thead>

              {/* Body da tabela - PERCORRE SOLICITAÇÕES */}
              <tbody>
                {agendamentosFiltrados.map((agendamento, index) => (
                  <tr 
                    key={agendamento.id}
                    className={index % 2 === 0 ? css.tableRow : `${css.tableRow} ${css.tableRowEven}`}
                    // onClick={() => setAgendamentoSelecionado(agendamento)}
                  >

                    {/* DATA E HORA DO EVENTO */}
                    <td className={`${css.tableCell} ${css.dateTimeCell}`}>
                      <div className={css.dateMain}>
                        {agendamento.dataEvento}
                        {/* {formatarData(agendamento.data)} */}
                      </div>

                      <div className={css.timeSub}>
                        {`${agendamento.horarioInicio} - ${agendamento.horarioTermino}`}
                      </div>
                    </td>

                    {/* LOCAL / SERVIÇO / INSTRUMENTOS */}
                    <td className={css.tableCell}>
                      <div className={css.localMain}>
                        {agendamento.localEvento}
                      </div>

                      <div className={css.eventType}>
                        {agendamento.pacoteServico.tipoServico.nome}
                      </div>

                      <div className={css.instruments}>
                        { objsDosAgendamentos[index].instrumentosDaSolicitacao.map(registro => registro.nome).slice(1).join(', ') }
                      </div>
                    </td>

                    {/* VALOR DO CACHE */}
                    <td className={css.tableCell}>
                      <div className={css.valueAmount}>
                        R$ { Number(agendamento.custo.cacheMusicos).toLocaleString('pt-BR')}
                      </div>
                    </td>

                    {/* STATUS DA SOLICITAÇÃO */}
                    <td className={css.tableCell}>
                      {getStatusBadge( objsDosAgendamentos[index].grupoDoServico
                        .find(mus_ser => mus_ser.cpf === musicoLogado.cpf) ? "confirmado" : "pendente" )
                      }
                    </td>

                    {/* BOTÕES */}
                    <td className={`${css.tableCell} ${css.actionsCell}`}>
                      <div className={css.actionsGroup}>
                      
                        {/* Se músico estiver no grupo... */}
                        { objsDosAgendamentos[index].grupoDoServico.find(mus_ser => mus_ser.cpf === musicoLogado.cpf)
                        ?
                        
                        ( // mostra o botão de BAIXAR CONTRATO
                          <button
                            className={`${css.actionButton} ${css.actionButtonContract}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleVisualizarContrato(agendamento.contrato);

                              // EXIBIR CONTRATO AQUI // ========================================================================= //

                            }}
                          >
                            Contrato
                          </button> 
                        )
                        :
                        ( // senão, mostra o botão de ACEITAR SERVIÇO
                          <button
                            className={`${css.actionButton} ${css.actionButtonConfirm}`}
                            onClick={ async evt => {
                              evt.stopPropagation();
                              
                              try {
                                // Adiciona o músico ao grupo do serviço 
                                await adicionarAoGrupoDoServico({
                                  "solicitacaoServico" : { "id"  : agendamento.id },
                                  "musico"             : { "cpf" : musicoLogado.cpf }
                                })
                                handleConfirmarParticipacao(agendamento.id);
                                
                                // GERAR CONTRATO // ================================================================================= //
                                
                                // Recarrega a página (para puxar dados novos do banco)
                                window.location.reload();
                              }
                              catch(erro) {
                                alert("Erro ao adicionar músico ao grupo do serviço!")
                                console.log("Erro ao adicionar músico ao grupo do serviço: " + erro)
                              }
                            }}
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
              <div className={css.emptyState}>
                Nenhum agendamento encontrado com os filtros aplicados.
              </div>
            )}
          </div>
        </div>

      </div>

    </div>
  );
};

export default T01_painelAgendamentos;