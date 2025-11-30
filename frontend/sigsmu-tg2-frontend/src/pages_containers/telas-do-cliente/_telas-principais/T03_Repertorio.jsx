// Importações de estilos
import t11_sugestaoCss from "./CSS/t03_repertorio.module.css"

// Importações de componentes
import Botao        from "components/Botao.jsx";
import Select       from "components/Select.jsx";
import PartesEvento from "../_componentes-grandes/PartesEvento.jsx"

// Importações do React
import React, { useEffect, useState } from "react";

// Importações da API (Axios)
import { listarTiposServico }             from "services/TabelasIndependentes/TipoServico.js";
import { adicionarCliente }               from "services/Atores/Cliente.js";
import { adicionarSolicitacaoServico }    from "services/Outras/SolicitacaoServico.js";
import { dadosCliente, dadosSolicitacao } from "services/_AUXILIAR/GlobalData.js";
import getMusicas                         from "./T03_repertorio_config.js";



// import T09_Footer from "./T09_Footer";
// import footer from "../imagens_site/footer.png"
// import footerImg from "../../site_do_sistema/imagens_site/footer.png"


// TERMINAR   TERMINAR   TERMINAR   TERMINAR  TERMINAR  TERMINAR  TERMINAR
function T03_Repertorio() {

    //============ Dados retornados do banco ============//
    const [tiposServico, setTiposServico] = useState(null)
    //==================================================//
    
    // Contém todos os dados informados pelo cliente até então
    const dadosTelaOrcamento = {
        cliente     : dadosCliente.get(),
        solicitacao : dadosSolicitacao.get()
    }
    
    // Função responsável por PUXAR OS TIPOS DE SERVIÇO do banco - OK
    const puxarTiposServico = async () => {
        try {
            const retorno = await listarTiposServico()
            setTiposServico( retorno.data )
        }
        catch(erro) {
            alert("Erro ao puxar os dados do banco!")
            console.log("Erro ao puxar os dados do banco: " + erro)
        }
    }

    // Função responsável por CADASTRAR O CLIENTE e sua SOLICITAÇÃO no banco - OK
    const cadastrarNoBanco = async () => {
        try {
            await adicionarCliente( dadosTelaOrcamento.cliente )
            await adicionarSolicitacaoServico( dadosTelaOrcamento.solicitacao )
            alert("Solicitação realizada com sucesso!")
        }
        catch(erro) {
            alert("Erro ao cadastrar a solicitação!")
            console.log("Erro ao cadastrar a solicitação: " + erro)
        }
    }
    
    // Executa as funções abaixo apenas uma única vez
    useEffect(() => {
        puxarTiposServico()
    }, [])

    // useStates de seleção do usuário
    const [servicoSelecionado, setServicoSelecionado] = useState("casamento") // string por enquanto (->id)
    const [musicasSelecionadas, setMusicasSelecionadas] = useState() // strings
    

    return (
        <div className={t11_sugestaoCss.main}>            
            
            {/* título estilizado */}
            <div className={t11_sugestaoCss.tituloContainer}>
                <h1 className={t11_sugestaoCss.tituloPrincipal}>🎵 Nossas Sugestões Musicais</h1>
                <p className={t11_sugestaoCss.subtitulo}>
                    Descubra playlists perfeitas para cada momento especial do seu evento
                </p>
            </div>

            
            {/* Exibe os serviços disponíveis para o cliente */} { tiposServico &&
            <Select
                msg={"Informe o tipo de serviço:"}
                setValue={setServicoSelecionado}
                listaOpcoes={ tiposServico.map( registro => registro.nome ) }
                // values={}
            />
            }

            {/* Mostra todas as partes do evento em forma de lista */}
            <div className={t11_sugestaoCss.eventosContainer}>
                <PartesEvento
                    evento={ getMusicas(servicoSelecionado) }
                    setMusicas={setMusicasSelecionadas}
                />
            </div>


            {/* "TESTE" */}
            <Botao msg={"SOLICITAR"}
                executarComando={() => {

                    // console.log("===========================")
                    // Object.entries(dadosTelaOrcamento.solicitacao).map(([txt, valor]) => {
                    //     console.log(txt + " -> " + valor)
                    // }) // Mostra os dados da solicitação de serviço
                    // console.log("===========================")

                    cadastrarNoBanco()
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
