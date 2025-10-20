import api from "./api";

export const listarPacotesServico = () => api.get("/pacoteservico");
export const adicionarPacoteServico = (body) => api.post("/pacoteservico", body);
export const atualizarPacoteServico = (id, body) => api.patch(`/pacoteservico/${id}`, body);
export const excluirPacoteServico = (id) => api.delete(`/pacoteservico/${id}`);
