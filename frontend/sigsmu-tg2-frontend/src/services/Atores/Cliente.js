import api from "../api";

export const listarClientes   = ()     => api.get("/cliente");
export const adicionarCliente = (body) => api.post("/cliente", body);
