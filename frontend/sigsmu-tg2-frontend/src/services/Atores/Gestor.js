import api from "../api";

export const listarGestores     = ()         => api.get("/gestor");
export const buscarGestorPorCpf = (cpf)      => api.get(`/gestor/${cpf}`);
export const adicionarGestor    = (body)     => api.post("/gestor", body);
export const atualizarGestor    = (id, body) => api.patch(`/gestor/${id}`, body);
export const excluirGestor      = (id)       => api.delete(`/gestor/${id}`);
