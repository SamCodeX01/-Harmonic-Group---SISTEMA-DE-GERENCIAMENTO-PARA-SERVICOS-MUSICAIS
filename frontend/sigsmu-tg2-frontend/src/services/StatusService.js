import api from "./api";

export const listarTiposLocais = () => api.get("/tipolocal");
export const adicionarTipoLocal = (dados) => api.post("/tipolocal", dados);
export const atualizarTipoLocal = (id, dados) => api.patch(`/tipolocal/${id}`, dados);
export const excluirTipoLocal = (id) => api.delete(`/tipolocal/${id}`);
