import api from "./api";

export const listarStatus = () => api.get("/status");
export const adicionarStatus = (dados) => api.post("/status", dados);
export const atualizarStatus = (id, dados) => api.patch(`/status/${id}`, dados);
export const excluirStatus = (id) => api.delete(`/status/${id}`);
