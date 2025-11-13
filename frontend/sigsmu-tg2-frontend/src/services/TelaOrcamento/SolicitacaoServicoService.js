import api from "../api";

export const adicionarSolicitacaoServico = (body) => api.post("/solicitacaoservico", body);
