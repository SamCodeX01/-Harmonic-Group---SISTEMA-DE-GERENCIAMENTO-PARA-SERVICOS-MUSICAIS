import api from "../api";

export const listarStatus    = ()         => api.get("/statussolicitacao");
export const adicionarStatus = (body)     => api.post("/statussolicitacao", body);
export const atualizarStatus = (id, body) => api.patch(`/statussolicitacao/${id}`, body);
export const excluirStatus   = (id)       => api.delete(`/statussolicitacao/${id}`);
