// Importações de estilos
import css from "./CSS/telabancoDeDados.module.css"

// Importação de componentes
import Botao from "../../../components/Botao"
import Radio from "../../../components/Radio"


// import CamposTabela from "../../components/_maiores/gestor/cadastronobd/CamposTabela"
// import TabelaGestor from "../../components/_maiores/gestor/cadastronobd/TabelaGestor"

// import HelpDoGestor from "../_componentes-grandes/cadastronobd/HelpDoGestor"

import { useState } from "react"


// Tela de BANCO DE DADOS - para que gestores consigam cadastrar novos serviços/músicas/meios de pagamento/etc
function TelaBancoDeDados() {

    // Selecionar operação CRUD
    const [operacao, setOperacao] = useState("icrud0")

    // Selecionar tabela
    const [tabelaSelecionada, setTabelaSelecionada] = useState(null)
    const [valoresRadio, setValoresRadio] = useState(null)


    const [evento, setEvento] = useState(null);


    // NOME E EXIBIÇÃO DAS TABELAS
    const moldeBanco = {
        "Pacotes de Serviço" : ["nometabela", "itable0"],
        "Instrumento" : ["nometabela", "itable1"],
        "Tipo de Serviço" : ["nometabela", "itable2"],
        "Meios de Pagamento" : ["nometabela", "itable3"],
        "Repertório / Músicas" : ["nometabela", "itable4"],
        "Status / Andamento" : ["nometabela", "itable5"],
        "Tipo de Local" : ["nometabela", "itable6"]
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

    return (
        <div className={css.main}>

            {/* Local em que REGISTROS DO BANCO serão exibidos para o gestor */}
            <div className={css.schema}>
                Puxar os campos da tabela selecionada do banco e mostrar registros (em desenvolvimento)
            </div>


            {/* Local em que o gestor poderá alternar entre modos de CADASTRO/ALTERAÇÃO/EXCLUSÃO de dados do banco */}
            <div className={css.botoes}>
                <Radio selecionado={operacao} setSelecionado={setOperacao} name={"crud"} grupo={2} >
                    <Botao msg={"CADASTRAR"} rota={""} estilo={true} />
                    <Botao msg={"ALTERAR"} rota={""} estilo={true} />
                    <Botao msg={"EXCLUIR"} rota={""} estilo={true} />
                </Radio>
            </div>


            {/* Local em que as TABELAS serão ser exibidas para SELEÇÃO do gestor */}
            <div className={css.seletorTabelas}>
                {
                    // Retorna cada tabela  exibe na tela
                    <Radio 
                        selecionado={tabelaSelecionada} 
                        setSelecionado={setTabelaSelecionada} 
                        name={"table"} 
                        grupo={3} 
                        arrayValoresRadio={campos}
                        callbackValores={setValoresRadio}
                    >
                        {
                            
                            Object.entries(moldeBanco).map(([nome, valor]) => {
                                return (tabelaSelecionada != valor[1] ? <Botao msg={nome} /> : <></>)
                            })
                            
                        }
                    </Radio>
                }
            </div>


            {/* Local em que os CAMPOS DA TABELA selecionada pelo gestor serão exibidos */}
            <div className={css.tabelaCampos} >
                <div>
                    <div className={css.tabela}>
                    {
                        Object.entries(moldeBanco).map(([nome, valor]) => {
                            return (tabelaSelecionada !== null && tabelaSelecionada === valor[1] ? <Botao msg={nome}/> : "")
                        })
                    }
                    </div>

                    <div className={css.campos}>
                    {
                        (tabelaSelecionada !== null &&
                            valoresRadio.split(",").map(campo => {
                                if (campo[3] !== "_")
                                    return <Botao msg={campo} />
                            })
                        )
                    }
                    </div>
                </div>
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