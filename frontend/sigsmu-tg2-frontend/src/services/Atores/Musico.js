import api from "../api";

export const listarMusicos       = ()          => api.get("/musico");
export const buscarMusicoPorCpf  = (cpf)       => api.get(`/musico/${cpf}`);
export const adicionarMusico     = (body)      => api.post("/musico", body);
export const atualizarMusico     = (cpf, body) => api.patch(`/musico/${cpf}`, body);
export const excluirMusico       = (cpf)       => api.delete(`/musico/${cpf}`);
