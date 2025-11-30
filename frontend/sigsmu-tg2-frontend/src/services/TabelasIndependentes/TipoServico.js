import api from "../api";

export const listarTiposServico   = ()         => api.get("/tiposervico");
export const adicionarTipoServico = (body)     => api.post("/tiposervico", body);
export const atualizarTipoServico = (id, body) => api.patch(`/tiposervico/${id}`, body);
export const excluirTipoServico   = (id)       => api.delete(`/tiposervico/${id}`);