import React from "react";

function AgrupamentoOpcoes({obj}){


    return(
            <div>
                {/* <label htmlFor="teste1">Pré definições</label> <br /> */}
                    <select id="teste1">
                        <option>{}Selecione o tipo de evento</option>

                        <optgroup label="Eventos">
                            <option>{obj.Musicas_Sugeridas[0]}</option>
                            <option>2</option>
                            <option>2</option>
                        
                        </optgroup>
                    </select>
            </div>
        )
}
export default AgrupamentoOpcoes;

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