import api from "./api";

export const listarMeiosPagamento = () => api.get("/meiopagamento");
export const adicionarMeioPagamento = (dados) => api.post("/meiopagamento", dados);
export const atualizarMeioPagamento = (id, dados) => api.patch(`/meiopagamento/${id}`, dados);
export const excluirMeioPagamento = (id) => api.delete(`/meiopagamento/${id}`);
