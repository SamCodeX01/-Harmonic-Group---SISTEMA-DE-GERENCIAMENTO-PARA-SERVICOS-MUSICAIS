// Importações de estilos
import t04_bancoDeDados from "./CSS/t04_bancoDeDados.module.css"

// Importação de componentes
import Botao from "../../../components/Botao"
import Radio from "../../../components/Radio"
import HelpDoGestor from "../_componentes-grandes/cadastronobd/HelpDoGestor"

// Importações do React
import { useEffect, useState } from "react"


// Tela de BANCO DE DADOS - para que gestores consigam cadastrar novos serviços/músicas/meios de pagamento/etc
function T04_BancoDeDados() {

    // Selecionar operação CRUD - FAZER AINDA
    const [operacao, setOperacao] = useState("icrud0")

    // Seleciona a tabela (evt)
    const [tabelaSelecionada, setTabelaSelecionada] = useState(null)

    // Seleciona a campo (evt)
    const [campoSelecionado, setCampoSelecionado] = useState(null)


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
    
    const [index, setIndex] = useState(null)

    // Muda o index de acordo com a tabela selecionada para chamar os campos
    useEffect(() => {
        if (tabelaSelecionada !== null)
            setIndex( Object.keys(moldeBanco).findIndex(nomeTabela => nomeTabela === tabelaSelecionada.value) )
        setCampoSelecionado(null)

    }, [tabelaSelecionada])

    return (
        <div className={t04_bancoDeDados.main}>

            {/* Local em que REGISTROS DO BANCO serão exibidos para o gestor */}
            <div className={t04_bancoDeDados.schema}>
                Puxar os campos da tabela selecionada do banco e mostrar registros (em desenvolvimento)
            </div>


            {/* Local em que o gestor poderá alternar entre modos de CADASTRO/ALTERAÇÃO/EXCLUSÃO de dados do banco */}
            <div className={t04_bancoDeDados.botoes}>
                <Radio setSelecionado={setOperacao} name={"crud"} firstChecked={true}>
                    <Botao msg={"CADASTRAR"} rota={""} estilo={true} />
                    <Botao msg={"ALTERAR"} rota={""} estilo={true} />
                    <Botao msg={"EXCLUIR"} rota={""} estilo={true} />
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


            {/* Local em que os CAMPOS DA TABELA selecionada pelo gestor serão exibidos */}
            <div className={t04_bancoDeDados.tabelaCampos} >
                {index != null &&
                
                    <div>
                        {/* Exibe a tabela selecionada */}
                        <Botao msg={moldeBanco[tabelaSelecionada.value]}/>

                        {/* {console.log("index -> " + index)} */}

                        <section className={t04_bancoDeDados.campos}>
                            <Radio setSelecionado={setCampoSelecionado} name={"campo"} firstChecked={true}>
                            {
                                campos[index]
                                .filter(campo => campo[3] != "_")
                                .map(campo => { 
                                    return <Botao msg={campo} value={campos[index][0] + campo}/>
                                })
                            }
                            </Radio>
                        </section>

                    </div>
                }
            </div>
            


            {/* Local em que o gestor poderá DAR INPUT de dados e manipular o banco */}
            <div className={t04_bancoDeDados.inputGestor}>
                <HelpDoGestor input={true} msg={"Dado a ser inserido:"} />

                <div>
                    <HelpDoGestor msg={"Nome da tabela:"} evento={tabelaSelecionada} />
                    <button onClick={() => {alert("Dado adicionado!")}}>EXECUTAR COMANDO</button>
                </div>

                <HelpDoGestor 
                    msg={"Campo a ser preenchido:"} 
                    evento={campoSelecionado} 
                />
            </div>

        </div>
    )
}
export default T04_BancoDeDados;