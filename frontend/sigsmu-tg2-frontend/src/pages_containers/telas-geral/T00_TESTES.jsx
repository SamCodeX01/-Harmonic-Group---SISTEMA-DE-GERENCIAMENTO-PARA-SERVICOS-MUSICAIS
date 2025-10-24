import React from "react";
import AgrupamentoOpcoes from "../../components/AgrupamentoOpcoes";
import EventoItem from "../../components/EventoItem";

function T00_TESTES() {
        const entradaPaisPadrinhos = {
        Musicas_Sugeridas: ["musica1","musica2","musica3"]
            }
    const entradaNoivo = {
        Musicas_Sugeridas: ["musica4","musica5","musica6"]
            }


    return (
        <>
            <EventoItem/>
            <AgrupamentoOpcoes obj={entradaPaisPadrinhos}/>
            <AgrupamentoOpcoes obj={entradaNoivo}/>
        </>
    )
}
export default T00_TESTES;