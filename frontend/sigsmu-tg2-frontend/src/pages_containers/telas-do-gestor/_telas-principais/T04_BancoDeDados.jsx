// Importações de estilos
import t04_bancoDeDados from "./CSS/t04_bancoDeDados.module.css"

// Importação de componentes
import Botao from "../../../components/Botao"
import Radio from "../../../components/Radio"
import HelpDoGestor from "../_componentes-grandes/cadastronobd/HelpDoGestor"

// Importações do React
import { useEffect, useState } from "react"

// Importações do CRUD
import { listarTiposLocal, adicionarTipoLocal } from "../../../services/TipoLocalService"


// Tela de BANCO DE DADOS - para que gestores consigam cadastrar novos serviços/músicas/meios de pagamento/etc
function T04_BancoDeDados() {

    // Retorna os tipos de local do BANCO
    const [tiposLocais, setTiposLocais] = useState()
    useEffect(() => {
        listarTiposLocal()
            .then(res => setTiposLocais(res.data))
            .catch(err => console.log(err))
    }, [tiposLocais])

    

    // Mostra todos os registros do BANCO para a tabela selecionada
    const retornarRegistros = () => {
        switch (tabelaSelecionada.value) {
            case "PacoteServico":     return tiposLocais
            case "Instrumento":       return tiposLocais
            case "Servico":           return tiposLocais
            case "MeioPagamento":     return tiposLocais
            case "Repertorio":        return tiposLocais
            case "StatusSolicitacao": return tiposLocais
            case "TipoLocal":         return tiposLocais
        }
    }

    // Executa o comando INSERT no BANCO de acordo com a tabela e campos selecionados
    const adicionarDados = () => {
        console.log("adicionarDados(tabelaSelecionada.value) -> " + tabelaSelecionada.value)
        switch (tabelaSelecionada.value) {
            case "PacoteServico":     adicionarTipoLocal({"nome" : inputGestor})
                break
            case "Instrumento":       adicionarTipoLocal({"nome" : inputGestor})
                break
            case "Servico":           adicionarTipoLocal({"nome" : inputGestor})
                break
            case "MeioPagamento":     adicionarTipoLocal({"nome" : inputGestor})
                break
            case "Repertorio":        adicionarTipoLocal({"nome" : inputGestor})
                break
            case "StatusSolicitacao": adicionarTipoLocal({"nome" : inputGestor})
                break
            case "TipoLocal":         adicionarTipoLocal({"nome" : inputGestor})
                break
        }
    }


    // Seleciona a operação CRUD (evt)
    const [operacao, setOperacao] = useState(null)

    // Seleciona a tabela (evt)
    const [tabelaSelecionada, setTabelaSelecionada] = useState(null)
    // Serve para saber o índice da tabela selecionada
    const [index, setIndex] = useState(null)
    // Todos os retornos do BANCO
    let retornosBanco = [tiposLocais]

    // Seleciona a campo (evt)
    const [campoSelecionado, setCampoSelecionado] = useState(null)

    const [mensagemInputGestor, setMensagemInputGestor] = useState()
    const [inputGestor, setInputGestor] = useState(null)

    // Nome real e de exibição das tabelas
    const moldeBanco = {
        "PacoteServico" : "Pacotes de Serviço",
        "Instrumento" : "Instrumento",
        "Servico" : "Tipo de Serviço",
        "MeioPagamento" : "Meios de Pagamento",
        "Repertorio" : "Repertório / Músicas",
        "StatusSolicitacao" : "Status / Andamento",
        "TipoLocal"  : "Tipo de Local"
    }


    // Campos 
    const campos = [
        ["pac_", "id", "nome", "valor", "qtdMusicos", "descricao"],
        ["ins_", "id", "nome"],
        ["ser_", "id", "nome"],
        ["pgt_", "id", "nome"],
        ["rep_", "id", "musica", "artista", "genero", "tempo", "tocamos"],
        ["stt_", "id", "situacao"],
        ["tip_", "id", "tipo"]
    ]
    


    // Muda o index de acordo com a tabela selecionada para chamar os campos
    useEffect(() => {

        if (tabelaSelecionada !== null)
            setIndex( Object.keys(moldeBanco).findIndex(nomeTabela => nomeTabela === tabelaSelecionada.value) )
        setCampoSelecionado(null)

    }, [tabelaSelecionada])

    useEffect(() => {
        setTabelaSelecionada(null)

        if (operacao !== null) {
            switch(operacao.value) {
                case "insert": setMensagemInputGestor("Registro a ser INSERIDO:");
                    break;
                case "update": setMensagemInputGestor("Dado a ser ATUALIZADO:");
                    break;
                case "delete": setMensagemInputGestor("Índice do registro que será DELETADO:");
                    break;
            }
        } else setMensagemInputGestor("Registro a ser INSERIDO:");

    }, [operacao])


    // Retorno AQUI
    return (
        <div className={t04_bancoDeDados.main}>

            {/* Local em que REGISTROS DO BANCO serão exibidos para o gestor */}
            <div className={t04_bancoDeDados.schema}>

                {tabelaSelecionada !== null &&
                    retornarRegistros().map((registro, i) => {
                        return <p key={i}> {registro.nome} A=A </p>
                    })
                }

            </div> 


            {/* Local em que o gestor poderá alternar entre modos de CADASTRO/ALTERAÇÃO/EXCLUSÃO de dados do banco */}
            <div className={t04_bancoDeDados.botoes}>
                <Radio setSelecionado={setOperacao} name={"crud"} firstChecked={true}>
                    <Botao msg={"CADASTRAR"} rota={""} estilo={true} value={"insert"} />
                    <Botao msg={"ALTERAR"} rota={""} estilo={true} value={"update"} />
                    <Botao msg={"EXCLUIR"} rota={""} estilo={true} value={"delete"} />
                </Radio>
            </div>


            {/* Local em que as TABELAS serão ser exibidas para SELEÇÃO do gestor */}
            <div className={t04_bancoDeDados.seletorTabelas}>
                {
                    // Retorna cada tabela  exibe na tela
                    <Radio setSelecionado={setTabelaSelecionada} name={"table"}>
                    {
                        Object.entries(moldeBanco).map(([nomeTabela, nomeExibicao]) => {
                            return <Botao msg={nomeExibicao} value={nomeTabela} />
                        })
                    }
                    </Radio>
                }
            </div>


            {/* Local em que os CAMPOS DA TABELA selecionada e a TABELA SELECIONADA pelo gestor serão exibidos */}
            <div className={t04_bancoDeDados.tabelaCampos} >
                {index != null && tabelaSelecionada != null &&
                
                    <div>
                        {/* Exibe a tabela selecionada */}
                        <Botao msg={tabelaSelecionada ? moldeBanco[tabelaSelecionada.value] : ""}/>

                        {/* {console.log("index -> " + index)} */}

                        <section className={t04_bancoDeDados.campos}>

                            {
                                operacao !== null && operacao.value === "delete" ? 
                                    <Botao msg={campos[index][1]} value={campos[index][0] + campos[index][1]}/>                   
                                :
                                <Radio setSelecionado={setCampoSelecionado} name={"campo"} firstChecked={true}>
                                {
                                    campos[index]
                                    .filter(campo => campo[3] != "_")
                                    .map(campo => { 
                                        return <Botao msg={campo} value={campos[index][0] + campo}/>
                                    })
                                }
                                </Radio>
                            }
                        </section>

                    </div>
                }
            </div>
            


            {/* Local em que o gestor poderá DAR INPUT de dados e manipular o banco */}
            <div className={t04_bancoDeDados.inputGestor}>


                <HelpDoGestor input={true} msg={mensagemInputGestor} setInput={setInputGestor} />

                <div>
                    <HelpDoGestor msg={"Nome da tabela:"} evento={tabelaSelecionada} />
                    <button onClick={() => { 
                        if (campoSelecionado !== null) {
                            adicionarDados()
                            alert("Dado adicionado!")
                        }
                        else
                            alert("Falta selecionar o campo!")
                    }}>EXECUTAR COMANDO</button>
                </div>

                <HelpDoGestor 
                    msg={"Campo:"} 
                    evento={campoSelecionado}
                    campoDeleteId={tabelaSelecionada && operacao && operacao.value === "delete" ? campos[index][0] + campos[index][1] : ""}
                />

                
                {/* {operacao.value !== "delete" && 
                    <HelpDoGestor 
                        msg={"Campo a ser preenchido:"} 
                        evento={campoSelecionado}
                    />
                } */}
            </div>

        </div>
    )
}
export default T04_BancoDeDados;