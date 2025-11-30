import api from "../api";

export const listarMeiosPagamento   = ()         => api.get("/meiopagamento");
export const adicionarMeioPagamento = (body)     => api.post("/meiopagamento", body);
export const atualizarMeioPagamento = (id, body) => api.patch(`/meiopagamento/${id}`, body);
export const excluirMeioPagamento   = (id)       => api.delete(`/meiopagamento/${id}`);
