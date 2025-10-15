import api from "./api";

export const listarPacotesServico = () => api.get("/pacoteservico");
export const adicionarPacoteServico = (dados) => api.post("/pacoteservico", dados);
export const atualizarPacoteServico = (id, dados) => api.patch(`/pacoteservico/${id}`, dados);
export const excluirPacoteServico = (id) => api.delete(`/pacoteservico/${id}`);
