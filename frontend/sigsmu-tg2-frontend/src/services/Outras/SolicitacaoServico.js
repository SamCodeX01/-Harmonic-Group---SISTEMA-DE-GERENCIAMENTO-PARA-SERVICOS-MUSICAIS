import api from "../api";

export const listarSolicitacoes          = ()     => api.get("/solicitacaoservico");
export const adicionarSolicitacaoServico = (body) => api.post("/solicitacaoservico", body);

export const buscarSolicitacoesPorStatus = (id)   => api.get(`/solicitacaoservico/status?id=${id}`)
export const listarSolicitacoesEmAberto = ()      => api.get(`/solicitacaoservico/ativa`)
