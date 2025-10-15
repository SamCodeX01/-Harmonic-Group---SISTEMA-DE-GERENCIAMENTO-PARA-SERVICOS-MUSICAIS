import api from "./api";

export const listarInstrumentos = () => api.get("/instrumento");
export const adicionarInstrumento = (dados) => api.post("/instrumento", dados);
export const atualizarInstrumento = (id, dados) => api.patch(`/instrumento/${id}`, dados);
export const excluirInstrumento = (id) => api.delete(`/instrumento/${id}`);
