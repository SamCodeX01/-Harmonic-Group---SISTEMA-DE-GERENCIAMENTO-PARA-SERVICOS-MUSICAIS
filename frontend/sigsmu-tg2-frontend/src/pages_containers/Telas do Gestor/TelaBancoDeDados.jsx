// Importações de estilos
import styles from "./telabancoDeDados.module.css"

// Importação de componentes
import Botao from "../../components/forms/Botao"
import BotaoSelecionavel from "../../components/forms/BotaoSelecionavel"
import CamposTabela from "../../components/cadastronobd/CamposTabela"
import TabelaGestor from "../../components/cadastronobd/TabelaGestor"
import HelpDoGestor from "../../components/cadastronobd/HelpDoGestor"

import { useState } from "react"


// Tela de BANCO DE DADOS - para que gestores consigam cadastrar novos serviços/músicas/meios de pagamento/etc
function TelaBancoDeDados() {

    // Selecionar operação CRUD
    const [operacao, setOperacao] = useState("CADASTRAR")
    const crud = ["CADASTRAR", "ALTERAR", "EXCLUIR"]

    // Selecionar tabela
    const [tabelaSelecionada, setTabelaSelecionada] = useState(null)


    const [evento, setEvento] = useState(null);


    // NOME DAS TABELAS DO BANCO
    const tabelas = [
        "Pacotes de Serviço",
        "Instrumento",
        "Tipo de Serviço",
        "Meios de Pagamento",
        "Repertório / Músicas",
        "Status / Andamento",
        "Tipo de Local"
    ]

    // CAMPOS DAS TABELAS DO BANCO DE DADOS
    const campos = [
        ["pac_", "id", "nome", "valor", "qtdMusicos", "descricao"],
        ["ins_", "id", "nome"],
        ["pgt_", "id", "nome"],
        ["ser_", "id", "nome"],
        ["rep_", "id", "musica", "artista", "genero", "tempo", "tocamos"],
        ["stt_", "id", "situacao"],
        ["tip_", "id", "tipo"]
    ]

    // TABELAS E CAMPOS
    const dados = {
        "Pacotes de Serviço"   : ["pac_", "id", "nome", "valor", "qtdMusicos", "descricao"],
        "Instrumento"          : ["ins_", "id", "nome"],
        "Tipo de Serviço"      : ["pgt_", "id", "nome"],
        "Meios de Pagamento"   : ["ser_", "id", "nome"],
        "Repertório / Músicas" : ["rep_", "id", "musica", "artista", "genero", "tempo", "tocamos"],
        "Status / Andamento"   : ["stt_", "id", "situacao"],
        "Tipo de Local"        : ["tip_", "id", "tipo"]
    }
    

    return (
        <div className={styles.main}>

            {/* Local em que REGISTROS DO BANCO serão exibidos para o gestor */}
            <div className={styles.schema}>

            </div>


            {/* Local em que o gestor poderá alternar entre modos de CADASTRO/ALTERAÇÃO/EXCLUSÃO de dados do banco */}
            <div className={styles.botoes}>
                {
                    crud.map((op, i) => {
                        return <BotaoSelecionavel msg={op} estilo={true} selecionado={operacao} setSelecionado={setOperacao} key={"crud" + (i+1)} />
                    })
                }
            </div>


            {/* Local em que as TABELAS serão ser exibidas para SELEÇÃO do gestor */}
            <div className={styles.seletorTabelas}>
                {
                    // Retorna cada tabela  exibe na tela
                    Object.keys(dados).map((table, i) => {
                        if (table !== tabelaSelecionada)
                            return <Botao msg={table} key={"table" + (i+1)} value={Object.values(dados)[i]} selectTable={setTabelaSelecionada}/>
                    })
                }     
            </div>


            {/* Local em que os CAMPOS DA TABELA selecionada pelo gestor serão exibidos */}
            <div className={styles.tabelaCampos} >
                <div>
                {
                    // Retorna apenas a TABELA escolhida
                    Object.keys(dados).map((table, i) => {
                        if (table === tabelaSelecionada)
                            return <Botao msg={table} key={"table" + i} value={Object.values(dados)[i]} selectTable={setTabelaSelecionada}/>
                    })
                }
                {
                    // Exibe os CAMPOS da tabela escolhida
                    tabelaSelecionada !== null &&
                        <div className={styles.teste}> 
                            <CamposTabela 
                                campos={dados[tabelaSelecionada]} 
                                callback={setEvento} 
                            /> 
                        </div>
                }
                </div>
            </div>


            {/* Local em que o gestor poderá DAR INPUT de dados e manipular o banco */}
            <div className={styles.inputGestor}>
                <HelpDoGestor input={true} msg={"Dado a ser inserido:"} />
                <HelpDoGestor msg={"Campo a ser preenchido:"} evento={evento} prefixo={dados[tabelaSelecionada]} />
                <HelpDoGestor msg={"Nome da tabela:"} tabela={tabelaSelecionada} />

                <button>EXECUTAR COMANDO</button>
            </div>

        </div>
    )
}
export default TelaBancoDeDados;