import React, { useEffect, useState } from "react";
// import T09_Footer from "./T09_Footer";
// import footer from "../imagens_site/footer.png"

import EventoItem from "../../../components/EventoItem"
import getConfig from "./T03_repertorio_config";

import t11_sugestaoCss from "./CSS/t03_repertorio.module.css"
// import footerImg from "../../site_do_sistema/imagens_site/footer.png"

// TERMINAR   TERMINAR   TERMINAR   TERMINAR  TERMINAR  TERMINAR  TERMINAR
function T03_Repertorio() {

    const [nomeServicoSelecionado, setNomeServicoSelecionado] = useState()
    const [dadosServico, setDadosServico] = useState()

    useEffect(() => {
        if (nomeServicoSelecionado)
            setDadosServico( getConfig( nomeServicoSelecionado ) )

    }, [nomeServicoSelecionado])

    return (
        <div>            
            {/* TÍTULO ESTILIZADO */}
            <div className={t11_sugestaoCss.tituloContainer}>
                <h1 className={t11_sugestaoCss.tituloPrincipal}>🎵 Nossas Sugestões Musicais</h1>
                <p className={t11_sugestaoCss.subtitulo}>
                    Descubra playlists perfeitas para cada momento especial do seu evento
                </p>
            </div>

                <select onChange={evt => setNomeServicoSelecionado( evt.currentTarget.value ) }>
                    <option value={"casamento"}>casamento</option>
                    <option value={"aniversario"}>aniversario</option>
                    <option value={"formatura"}>formatura</option>
                    <option value={"corporativo"}>corporativo</option>
                </select>

                {/* MOSTRAR TODOS OS EVENTOS UM EMBAIXO DO OUTRO */}
                <div className={t11_sugestaoCss.eventosContainer}>
                    <EventoItem evento={ getConfig( nomeServicoSelecionado ) }/>



                </div>

                {/* {renderizarEvento()} */}
                {/* <EventoItem evento={cerimoniaCivil}/> */}
                {/* <img className={t10_servicos.imagemPacotes} src={footer} alt=""/> */}
                {/* <img className={t11_sugestaoCss.footerImg} src={footerImg} alt="" /> */}
            {/* <T09_Footer/> */}
        </div>
    )
}
export default T03_Repertorio;



/*
https://www.casamentos.com.br/artigos/musicas-para-casamento-civil--c6417

Ordem de músicas clássicas para entrada de casamento

Para a entrada dos Pais e Padrinhos: Jesus Alegria dos Homens
Para a entrada do Noivo: Clarins de Roma
Anúncio da Noiva: Clarinada da Rainha ou a de Mahler
Entrada da Noiva: Marcha Nupcial de Mendelssohn
Entrada da Dama e Pajem com as alianças: Minueto de Bach em Sol Maior
Benção das Alianças (Católico): Ave Maria de Gounod Música de Louvor (Evangélico): Agnus Dei – Michael W.Smith
Assinaturas: Clair de Lune – Debussy
Cumprimentos dos Padrinhos: Nessum Dorma – Turandot
Saída dos Padrinhos: Con te Partiro – Andrea Bocelli
Saída do Casal: Nona Sinfonia de Beethoven – Ode à Alegria
*/
