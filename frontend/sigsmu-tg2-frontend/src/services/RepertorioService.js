import api from "./api";

export const listarRepertorios = () => api.get("/repertorio");
export const adicionarRepertorio = (dados) => api.post("/repertorio", dados);
export const atualizarRepertorio = (id, dados) => api.patch(`/repertorio/${id}`, dados);
export const excluirRepertorio = (id) => api.delete(`/repertorio/${id}`);
