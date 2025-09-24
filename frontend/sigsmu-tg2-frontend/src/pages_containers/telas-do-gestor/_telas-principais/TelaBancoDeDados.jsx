// Importações de estilos
import css from "./CSS/telabancoDeDados.module.css"

// Importação de componentes
import Botao from "../../../components/Botao"
import Radio from "../../../components/Radio"


// import CamposTabela from "../../components/_maiores/gestor/cadastronobd/CamposTabela"
// import TabelaGestor from "../../components/_maiores/gestor/cadastronobd/TabelaGestor"

// import HelpDoGestor from "../_componentes-grandes/cadastronobd/HelpDoGestor"

import { useEffect, useState } from "react"


// Tela de BANCO DE DADOS - para que gestores consigam cadastrar novos serviços/músicas/meios de pagamento/etc
function TelaBancoDeDados() {

    // Selecionar operação CRUD
    const [operacao, setOperacao] = useState("icrud0")

    // Selecionar tabela
    const [tabelaSelecionada, setTabelaSelecionada] = useState(null)
    // const [valoresRadio, setValoresRadio] = useState(null)


    const [evento, setEvento] = useState(null);
    const [campoSelecionado, setCampoSelecionado] = useState(null)


    // NOME E EXIBIÇÃO DAS TABELAS
    const moldeBanco = {
        "nometabela0" : "Pacotes de Serviço",
        "nometabela1" : "Instrumento",
        "nometabela2" : "Tipo de Serviço",
        "nometabela3" : "Meios de Pagamento",
        "nometabela4" : "Repertório / Músicas",
        "nometabela5" : "Status / Andamento",
        "nometabela6"  : "Tipo de Local"
    }

    const campos = [
        ["pac_", "id", "nome", "valor", "qtdMusicos", "descricao"],
        ["ins_", "id", "nome"],
        ["pgt_", "id", "nome"],
        ["ser_", "id", "nome"],
        ["rep_", "id", "musica", "artista", "genero", "tempo", "tocamos"],
        ["stt_", "id", "situacao"],
        ["tip_", "id", "tipo"]
    ]
    
    const [index, setIndex] = useState(null)

    // Muda o index de acordo com a tabela selecionada para chamar os campos
    useEffect(() => {
        if (tabelaSelecionada !== null)
            setIndex( Object.keys(moldeBanco).findIndex(nomeTabela => nomeTabela === tabelaSelecionada.value) )

    }, [tabelaSelecionada])

    return (
        <div className={css.main}>

            {/* Local em que REGISTROS DO BANCO serão exibidos para o gestor */}
            <div className={css.schema}>
                Puxar os campos da tabela selecionada do banco e mostrar registros (em desenvolvimento)
            </div>


            {/* Local em que o gestor poderá alternar entre modos de CADASTRO/ALTERAÇÃO/EXCLUSÃO de dados do banco */}
            <div className={css.botoes}>
                <Radio setSelecionado={setOperacao} name={"crud"} firstChecked={true}>
                    <Botao msg={"CADASTRAR"} rota={""} estilo={true} />
                    <Botao msg={"ALTERAR"} rota={""} estilo={true} />
                    <Botao msg={"EXCLUIR"} rota={""} estilo={true} />
                </Radio>
            </div>


            {/* Local em que as TABELAS serão ser exibidas para SELEÇÃO do gestor */}
            <div className={css.seletorTabelas}>
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
            <div className={css.tabelaCampos} >
                {index != null &&
                
                    <div>
                        {/* Exibe a tabela selecionada */}
                        <Botao msg={moldeBanco[tabelaSelecionada.value]}/>

                        {/* {console.log("index -> " + index)} */}

                        <section className={css.campos}>
                            <Radio setSelecionado={setCampoSelecionado} name={"campo"} firstChecked={true}>
                            {
                                campos[index]
                                .filter(campo => campo[3] != "_")
                                .map(campo => {
                                    return <Botao msg={campo} value={3}/>
                                })
                            }
                            </Radio>
                        </section>

                    </div>
                }
            </div>
            


            {/* Local em que o gestor poderá DAR INPUT de dados e manipular o banco */}
            <div className={css.inputGestor}>
                {/* <HelpDoGestor input={true} msg={"Dado a ser inserido:"} />

                <HelpDoGestor 
                    msg={"Campo a ser preenchido:"} 
                    evento={evento} 
                    prefixo={dados[tabelaSelecionada]} 
                />
                
                <div>
                    <HelpDoGestor msg={"Nome da tabela:"} tabela={tabelaSelecionada} />
                    <button onClick={() => {alert("Dado adicionado!")}}>EXECUTAR COMANDO</button>
                </div> */}
            </div>

        </div>
    )
}
export default TelaBancoDeDados;