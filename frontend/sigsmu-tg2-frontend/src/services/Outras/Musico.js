import api from "../api";

export const listarMusicos = () => api.get("/musico");
export const adicionarMusico = (body) => api.post("/musico", body);
export const atualizarMusico = (id, body) => api.patch(`/musico/${id}`, body);
export const excluirMusico = (id) => api.delete(`/musico/${id}`);
