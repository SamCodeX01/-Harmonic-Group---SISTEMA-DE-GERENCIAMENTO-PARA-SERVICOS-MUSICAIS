import api from "./api";

export const listarRepertorios = () => api.get("/repertorio");
export const adicionarRepertorio = (body) => api.post("/repertorio", body);
export const atualizarRepertorio = (id, body) => api.patch(`/repertorio/${id}`, body);
export const excluirRepertorio = (id) => api.delete(`/repertorio/${id}`);
