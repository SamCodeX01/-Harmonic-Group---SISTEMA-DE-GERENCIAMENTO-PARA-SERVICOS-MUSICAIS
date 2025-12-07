import api from "../api";

export const buscarInstrumentosEscolhidos       = (id)   => api.get(`/instrumentosescolhidos/${id}`);
export const adicionarAosInstrumentosEscolhidos = (body) => api.post("/instrumentosescolhidos", body);