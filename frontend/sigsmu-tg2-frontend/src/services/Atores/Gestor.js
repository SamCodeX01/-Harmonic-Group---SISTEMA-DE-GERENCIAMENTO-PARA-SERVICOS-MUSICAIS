import api from "../api";

export const listarGestores     = ()          => api.get("/gestor");
export const buscarGestorPorCpf = (cpf)       => api.get(`/gestor/${cpf}`);
export const adicionarGestor    = (body)      => api.post("/gestor", body);
export const atualizarGestor    = (cpf, body) => api.patch(`/gestor/${cpf}`, body);
export const excluirGestor      = (cpf)       => api.delete(`/gestor/${cpf}`);
