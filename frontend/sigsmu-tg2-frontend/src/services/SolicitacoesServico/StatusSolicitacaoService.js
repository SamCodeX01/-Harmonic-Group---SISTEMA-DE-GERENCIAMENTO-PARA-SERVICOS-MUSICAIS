import api from "../api";

export const listarStatus = () => api.get("/statussolicitacao");
