import api from "./api";

export const listarInstrumentos = () => api.get("/instrumento");
export const adicionarInstrumento = (body) => api.post("/instrumento", body);
export const atualizarInstrumento = (id, body) => api.patch(`/instrumento/${id}`, body);
export const excluirInstrumento = (id) => api.delete(`/instrumento/${id}`);
