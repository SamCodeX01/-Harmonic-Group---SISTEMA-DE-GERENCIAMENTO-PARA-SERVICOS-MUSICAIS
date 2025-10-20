import api from "./api";

export const listarTiposLocal = () => api.get("/tipolocal");
export const adicionarTipoLocal = (body) => api.post("/tipolocal", body);
export const atualizarTipoLocal = (id, body) => api.patch(`/tipolocal/${id}`, body);
export const excluirTipoLocal = (id) => api.delete(`/tipolocal/${id}`);