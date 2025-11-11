import React from "react";

function Select({listaOpcoes, setValue, label, selectLabel=null, firstGeneric=false}){
    
    const primeiroItem = listaOpcoes[0]

    return(
        <div>
            <label htmlFor=""> {label} </label>

            <select onChange={evt => setValue(evt.currentTarget.value)}>

                {firstGeneric && <option> {primeiroItem} </option>}

                <optgroup label={selectLabel}>
                {
                    listaOpcoes
                    .filter(item => item !== primeiroItem)
                    .map((item, i) => {
                        return <option key={i} value={item}> {item} </option>
                    })
                }
                </optgroup>

            </select>
        </div>
    )
}
export default Select;

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