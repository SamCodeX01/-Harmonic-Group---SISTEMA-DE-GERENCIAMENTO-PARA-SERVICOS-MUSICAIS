import api from "./api";

export const listarStatus = () => api.get("/statussolicitacao");
export const adicionarStatus = (dados) => api.post("/statussolicitacao", dados);
export const atualizarStatus = (id, dados) => api.patch(`/statussolicitacao/${id}`, dados);
export const excluirStatus = (id) => api.delete(`/statussolicitacao/${id}`);
