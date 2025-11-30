import api from "../api";

export const listarSolicitacoes          = ()     => api.get("/solicitacaoservico");
export const adicionarSolicitacaoServico = (body) => api.post("/solicitacaoservico", body);
