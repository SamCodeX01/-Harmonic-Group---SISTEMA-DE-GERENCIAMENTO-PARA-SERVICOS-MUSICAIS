// Importações de estilos
import styles from "./telabancoDeDados.module.css"

// Importação de componentes
import Botao from "../../components/forms/Botao"
import BotaoSelecionavel from "../../components/forms/BotaoSelecionavel"
import TabelaGestor from "../../components/cadastronobd/TabelaGestor"
import TabelaCampos from "../../components/cadastronobd/TabelaCampos"
import { useState } from "react"


// Tela de BANCO DE DADOS - para que gestores consigam cadastrar novos serviços/músicas/meios de pagamento/etc
function TelaBancoDeDados() {

    const [tabelaSelecionada, setTabelaSelecionada] = useState(null)

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
    

    return (
        <div className={styles.main}>
            <div className={styles.schema}></div>

            <div className={styles.botoes}>
                <BotaoSelecionavel msg={"CADASTRAR"} estilo={true} marcadoPadrao={true} />
                <BotaoSelecionavel msg={"ALTERAR"} estilo={true} />
                <BotaoSelecionavel msg={"EXCLUIR"} estilo={true} />
            </div>

            <div className={styles.seletorTabelas}>
                {
                    tabelas.map((table, i) => {
                        if (table !== tabelaSelecionada)
                            return <Botao msg={table} key={"table" + i} value={campos[i]} selectTable={setTabelaSelecionada}/>
                    })
                }     
            </div>

            <div className={styles.tabelaCampos} >
                {
                    tabelas.map((table, i) => {
                        if (table === tabelaSelecionada)
                            return <Botao msg={table} key={"table" + i} value={campos[i]} selectTable={setTabelaSelecionada}/>
                    })
                }
            </div>

            <div className={styles.inputGestor}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
export default TelaBancoDeDados;