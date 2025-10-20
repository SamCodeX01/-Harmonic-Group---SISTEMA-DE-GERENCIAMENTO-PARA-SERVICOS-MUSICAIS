import React from "react";
import AgrupamentoOpcoes from "../../components/AgrupamentoOpcoes";

function T00_TESTES() {
        const entradaPaisPadrinhos = {
        Musicas_Sugeridas: ["musica1","musica2","musica3"]
    }
    const entradaNoivo = {
        Musicas_Sugeridas: ["musica4","musica5","musica6"]
    }


    return (
        <>
            {}
        <AgrupamentoOpcoes obj={entradaPaisPadrinhos}/>
        <AgrupamentoOpcoes obj={entradaNoivo}/>
      
        </>
    )
}
export default T00_TESTES;