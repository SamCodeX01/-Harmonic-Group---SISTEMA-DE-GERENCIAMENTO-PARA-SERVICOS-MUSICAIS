import api from "../api";

export const buscarCusto    = (id)       => api.get(`/custo/${id}`);
export const adicionarCusto = (id, body) => api.post(`/custo/${id}`, body);