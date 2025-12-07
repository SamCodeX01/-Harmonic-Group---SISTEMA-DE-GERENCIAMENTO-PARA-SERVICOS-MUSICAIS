import api from "../api";

export const buscarGrupoDoServico      = (id)   => api.get(`/grupodoservico/${id}`);
export const adicionarAoGrupoDoServico = (body) => api.post("/grupodoservico", body);