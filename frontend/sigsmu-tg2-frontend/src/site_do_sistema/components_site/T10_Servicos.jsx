import React, { useState } from "react";
import T09_Footer from "./T09_Footer";
import pacote01 from "../imagens_site/pacotes01.png"
import pacote02 from "../imagens_site/pacotes02.png"
import pacote03 from "../imagens_site/pacotes03.png"
import footer from "../imagens_site/footer.png"
import t10_servicos from "./t10_servicos.module.css"
import EventoItem from "../../components/EventoItem";

function T10_Servicos() {
 
return(
    <div>
            <img className={t10_servicos.imagemPacotes} src={pacote01} alt=""/>
            <img className={t10_servicos.imagemPacotes} src={pacote02} alt=""/>
            <img className={t10_servicos.imagemPacotes} src={pacote03} alt=""/>
            <img className={t10_servicos.imagemPacotes} src={footer} alt=""/>
        <T09_Footer/>
    </div>
    )

}
export default T10_Servicos;



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
