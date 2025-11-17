import api from "../api";

export const listarSolicitacoes = () => api.get("/solicitacaoservico");
