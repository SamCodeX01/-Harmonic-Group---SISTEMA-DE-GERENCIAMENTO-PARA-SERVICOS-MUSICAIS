// Importações de estilos
import styles from "./telabancoDeDados.module.css"

// Importação de componentes
import Botao from "../../components/forms/Botao"
import TabelaGestor from "../../components/cadastronobd/TabelaGestor"


// Tela de BANCO DE DADOS - para que gestores consigam cadastrar novos serviços/músicas/meios de pagamento/etc
function TelaBancoDeDados() {

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
    const campos = {
        pacotesServico: ["pac_", "id", "nome", "valor", "qtdMusicos", "descricao"],
        instrumentos: ["ins_", "id", "nome"],
        meiosPagamento: ["pgt_", "id", "nome"],
        tipoServico: ["ser_", "id", "nome"],
        repertorio: ["rep_", "id", "musica", "artista", "genero", "tempo", "tocamos"],
        status: ["stt_", "id", "situacao"],
        tipoLocal: ["tip_", "id", "tipo"]
    }
    

    return (
        <div className={styles.main}>
            <div className={styles.schema}></div>

            <div className={styles.botoes}>
                <Botao msg={"CADASTRAR"} estilo={true} selecionavel={true} marcadoPadrao={true} />
                <Botao msg={"ALTERAR"} estilo={true} selecionavel={true} />
                <Botao msg={"EXCLUIR"} estilo={true} selecionavel={true} />
            </div>

            <div className={styles.tabelas}>

                {
                    Object.values(campos).map((campo, i) => {
                        return <TabelaGestor tabela={tabelas[i]} campos={campo} />
                    })
                }

                {/* <TabelaGestor tabela={tabelas[0]} campos={campos.instrumentos} /> */}
                {
                // console.log(campos.instrumentos)
                }

                {/* <div>
                    <Botao msg={"Pacotes de Serviço"} />
                </div>

                <div>
                    <Botao msg={"Instrumento"} />
                </div>

                <div>
                    <Botao msg={"Tipo de Serviço"} />
                </div>

                <div>
                    <Botao msg={"Meios de Pagamento"} />
                </div>

                <div>
                    <Botao msg={"Repertório / Músicas"} />
                </div>

                <div>
                    <Botao msg={"Status / Andamento"} />
                </div>

                <div>
                    <Botao msg={"Tipo de Local"} />
                </div> */}
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