import api from "../api";

export const buscarInstrumentosDoMusico       = (cpf)     => api.get(`/instrumentosdomusico/${cpf}`);
export const adicionarAosInstrumentosDoMusico = (body)    => api.post("/instrumentosdomusico", body);
export const excluirInstrumentoDaLista        = (cpf, id) => api.delete(`/instrumentosdomusico/${cpf}/instrumento/${id}`)