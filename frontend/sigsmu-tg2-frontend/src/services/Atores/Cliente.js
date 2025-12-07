import api from "../api";

export const listarClientes   = ()     => api.get("/cliente");
export const buscarCliente    = (cpf)  => api.get(`/cliente/${cpf}`);
export const adicionarCliente = (body) => api.post("/cliente", body);
