import api from "./api";

export const listarTiposServico = () => api.get("/tiposervico");
export const adicionarTipoServico = (dados) => api.post("/tiposervico", dados);
export const atualizarTipoServico = (id, dados) => api.patch(`/tiposervico/${id}`, dados);
export const excluirTipoServico = (id) => api.delete(`/tiposervico/${id}`);