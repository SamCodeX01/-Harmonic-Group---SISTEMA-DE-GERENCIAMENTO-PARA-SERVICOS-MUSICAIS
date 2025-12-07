import api from "../api";

export const buscarMusicasEscolhidas      = (id)   => api.get(`/musicasescolhidas/${id}`);
export const adicionarAsMusicasEscolhidas = (body) => api.post("/musicasescolhidas", body);