// Importações de estilos
import t11_sugestaoCss from "./CSS/t03_repertorio.module.css"

// Importações de componentes
import Botao        from "components/Botao.jsx";
import Select       from "components/Select.jsx";
import PartesEvento from "../_componentes-grandes/PartesEvento.jsx"

// Importações do React
import React, { useEffect, useState } from "react";

// Importações da API (Axios)
import { listarTiposServico }                                       from "services/TabelasIndependentes/TipoServico.js";
import { adicionarCliente }                                         from "services/Atores/Cliente.js";
import { adicionarSolicitacaoServico, buscarSolicitacaoPorCliente } from "services/Outras/SolicitacaoServico.js";
import { dadosCliente, dadosSolicitacao }                           from "services/_AUXILIAR/GlobalData.js";
import { adicionarAosInstrumentosEscolhidos }                       from "services/TabelasAssociativas/InstrumentosEscolhidos.js";
import { adicionarAsMusicasEscolhidas }                             from "services/TabelasAssociativas/MusicasEscolhidas.js"
import getMusicas                                                   from "./T03_repertorio_config.js";



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
            alert("Erro ao exibir os tipos de serviço!")
            console.log("Erro ao puxar os tipos de serviço do banco: " + erro)
        }
    }

    // Função responsável por CADASTRAR O CLIENTE e sua SOLICITAÇÃO no banco - OK
    const cadastrarNoBanco = async () => {
        try {
            // Aciciona o cliente ao banco - se der erro, cpf já existe e não cadastra o resto
            await adicionarCliente( dadosTelaOrcamento.cliente )
            await adicionarSolicitacaoServico( dadosTelaOrcamento.solicitacao )
            
            // Só para organizar os dados
            const cli_cpf = dadosTelaOrcamento.cliente.cpf
            const arrayIdsInstrumentos = retornarInstrumentosEmId()
            let sol_id
            
            try {
                const promisse = await buscarSolicitacaoPorCliente(cli_cpf)
                const sol = promisse.data
                sol_id = sol.id
            }
            catch(erro) {
                alert("Erro ao adquirir o id da solicitação!")
                console.log("Erro ao adquirir o id da solicitação: " + erro)
            }


            //======================= Para Testes =======================//
            console.log("cli_cpf -> " + cli_cpf)
            console.log("arrayIdsInstrumentos -> " + arrayIdsInstrumentos)
            console.log("sol_id -> " + sol_id)
            //===========================================================//
            
            
            // Adiciona cada instrumento a tabela de instrumentos escolhidos
            arrayIdsInstrumentos.forEach(async (ins_id) => {
                await adicionarAosInstrumentosEscolhidos({
                    "solicitacaoServico" : { "id" : sol_id },
                    "instrumento"        : { "id" : ins_id }
                })
            })

            // try {
            //     await Promise.all(
            //         musicasSelecionadas.map(async musica => {

            //             // NÃO TEMOS AS MÚSICAS CADASTRADAS NO BANCO 
            //             await adicionarAsMusicasEscolhidas(sol_id, )
            //             // aqui precisaria de uma lista de ids de repertório
            //         })
            //     ) 
            // }
            // catch(erro) {
            //     alert("Erro ao vincular músicas ao serviço!")
            //     console.log("Erro ao vincular músicas ao serviço: " + erro)
            // }
            
            alert("Solicitação realizada com sucesso!")
            window.location.reload()
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

    // Retorna a lista de instrumentos do pacote de serviço escolhido
    const retornarInstrumentosEmId = () => {
        let ser_id = dadosTelaOrcamento.solicitacao.pacoteServico.id

        switch(ser_id) {

            // Casamentos
            case 1 : return [1,1]
            case 2 : return [1,1,3]
            case 3 : return [1,1,3,4]
            case 4 : return [1,1,3,4,6]
            
            // Festas
            case 5 : return [8,7,6,4]
            case 6 : return [8,7,6,4,10]
            case 7 : return [8,7,6,4,10,12]
            
            // Acústicos
            case 8  : return [9,6,4]
            case 9  : return [9,6,4,10]
            case 10 : return [9,6,4,10,4]
            case 11 : return [9,6,4,10,4,1]
        }
    }

    // useStates de seleção do usuário
    const [servicoSelecionado, setServicoSelecionado]   = useState("casamento") // string por enquanto (->id)
    const [musicasSelecionadas, setMusicasSelecionadas] = useState([]) // strings
    
    useEffect(() => {
        console.log("musicasSelecionadas -> ", musicasSelecionadas)
    }, [musicasSelecionadas])

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
                    setMusicas={ setMusicasSelecionadas }
                />

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

            </div>


            {/* "TESTE" */}

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
