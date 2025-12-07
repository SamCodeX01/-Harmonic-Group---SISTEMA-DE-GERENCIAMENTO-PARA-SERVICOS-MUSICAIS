import api from "../api";

export const listarSolicitacoes            = ()                    => api.get("/solicitacaoservico");
export const adicionarSolicitacaoServico   = (body)                => api.post("/solicitacaoservico", body);

export const buscarSolicitacaoPorCliente   = (cpf)                 => api.get(`/solicitacaoservico/${cpf}`)
export const buscarSolicitacoesPorStatus   = (id)                  => api.get(`/solicitacaoservico/status?id=${id}`)

export const listarSolicitacoesEmAberto    = ()                    => api.get(`/solicitacaoservico/ativa`)
export const listarSolicitacoesParaMusicos = ()                    => api.get(`/solicitacaoservico/aceitacao`)
export const mudarStatusDaSolicitacao      = (sol_id, novo_stt_id) => api.get(`/solicitacaoservico/${sol_id}/status/${novo_stt_id}`)
