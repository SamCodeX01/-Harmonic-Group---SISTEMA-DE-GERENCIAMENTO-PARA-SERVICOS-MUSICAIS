// Importações de estilos
import t11_sugestaoCss from "./CSS/t03_repertorio.module.css"

// Importações de componentes
import Botao      from "components/Botao.jsx";
import Select     from "components/Select.jsx";
import EventoItem from "components/EventoItem.jsx"

// Importações do React
import React, { use, useEffect, useState } from "react";

// Importações dos serviços
import { adicionarCliente }                from "services/TelaOrcamento/ClienteService.js";
import { adicionarSolicitacaoServico }     from "services/TelaOrcamento/SolicitacaoServicoService.js";
import { dadosCliente, dadosSolicitacao }  from "services/GlobalData.js";

import getConfig from "./T03_repertorio_config.js";


// import T09_Footer from "./T09_Footer";
// import footer from "../imagens_site/footer.png"
// import footerImg from "../../site_do_sistema/imagens_site/footer.png"


// TERMINAR   TERMINAR   TERMINAR   TERMINAR  TERMINAR  TERMINAR  TERMINAR
function T03_Repertorio() {

    // Contém todos os dados informados pelo cliente até então
    const dadosTelaOrcamento = {
        cliente     : dadosCliente.get(),
        solicitacao : dadosSolicitacao.get()
    }
    

    const [servico, setServico] = useState("casamento") // string por enquanto (->id)
    const [musicasSelecionadas, setMusicasSelecionadas] = useState() // strings
    
    // TRAZER POR MEIO DO BANCO DEPOIS
    const opcoesServicos = [
        "casamento",
        "aniversario",
        "formatura",
        "corporativo"
    ]

    return (
        <div className={t11_sugestaoCss.main}>            
            
            {/* título estilizado */}
            <div className={t11_sugestaoCss.tituloContainer}>
                <h1 className={t11_sugestaoCss.tituloPrincipal}>🎵 Nossas Sugestões Musicais</h1>
                <p className={t11_sugestaoCss.subtitulo}>
                    Descubra playlists perfeitas para cada momento especial do seu evento
                </p>
            </div>

            <Select
                msg={"Informe o tipo de serviço:"}
                setValue={setServico}
                listaOpcoes={opcoesServicos}
                // values={}
            />                

            {/* mostra todos os eventos em forma de lista */}
            <div className={t11_sugestaoCss.eventosContainer}>
                <EventoItem evento={ getConfig(servico) } setMusicas={setMusicasSelecionadas} />
            </div>


            {/* TESTE */}
            <Botao msg={"SOLICITAR"}
                executarComando={() => {
                    alert("Cadastro concluído!")
                    
                    // Object.entries(dadosTelaOrcamento.cliente).map(([txt, valor]) => {
                    //     console.log(txt + " -> " + valor)
                    // }) // Mostra os dados do cliente

                    console.log("===========================")

                    Object.entries(dadosTelaOrcamento.solicitacao).map(([txt, valor]) => {
                        console.log(txt + " -> " + valor)
                    }) // Mostra os dados da solicitação de serviço

                    adicionarCliente(dadosTelaOrcamento.cliente)
                    adicionarSolicitacaoServico(dadosTelaOrcamento.solicitacao)
                    
                }}
            />

            {/* rota -> mensagem de obg */}

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
