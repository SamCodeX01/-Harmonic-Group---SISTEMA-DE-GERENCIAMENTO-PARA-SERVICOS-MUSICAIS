import React from "react";
// import AgrupamentoOpcoes from "../../components/AgrupamentoOpcoes";
import EventoItem from "../../components/EventoItem";
import T01_PainelAgendamentos from "../telas-do-musico/T01_PainelAgendamentos"; 

function T00_TESTES() {
       // Crie um evento de exemplo para testar
    const eventoTeste = {
        titulo: "🎩 Cerimônia Civil - EXEMPLO",
        descricao: "Este é um evento de teste para demonstrar o componente",
        partes: {
            acolhidaConvidados: {
                titulo: "🎶 Acolhida dos Convidados",
                descricao: "Música de fundo enquanto os convidados chegam",
                musicas: ["Perfect - Ed Sheeran", "A Thousand Years - Christina Perri", "Say You Won't Let Go - James Arthur"]
            },
            entradaNoiva: {
                titulo: "👰‍♀️ Entrada da Noiva", 
                descricao: "Momento emocionante da entrada da noiva",
                musicas: ["Can't Help Falling In Love - Kina Grannis", "Make You Feel My Love - Adele"]
            }
        }
    };

    return (
        <>
            {/* <EventoItem evento={eventoTeste}/> */}
            <T01_PainelAgendamentos/>
            

            {/* <AgrupamentoOpcoes obj={entradaPaisPadrinhos}/>  */}
            {/* <AgrupamentoOpcoes obj={entradaNoivo}/>  */}
        </>
    )
}
export default T00_TESTES;