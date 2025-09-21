// Importações do React
import { useState } from "react"

// Importações de estilos
import styles from "./CSS/telasolicitacoesServico.module.css"

// Importações de componentes
import Cards from "../../components/historicoGestor/Cards"


// Tela de SOLICITAÇÕES DE SERVIÇO - para visualização das ordens de serviço geradas por solicitações de clientes
function TelaSolicitacoesServico() {

    // Para testes
    const [dadosCliente, setDadosCliente] = useState({
        idSolicitacao: 1234,
        nomeCliente: "Guilherme",
        situacaoServico: "Em andamento",
        dataSolicitacao: "23/12/2022",
        tipoServico: "Aniversário",
        pacoteEscolhido: "Harmonic Duo"
    })

    return (
        <div className={styles.main}>
            <Cards key={3} objCliente={dadosCliente} metodoSet={setDadosCliente} clicavel={true} />
            <Cards key={3} objCliente={dadosCliente} metodoSet={setDadosCliente} clicavel={true} />
            <Cards key={3} objCliente={dadosCliente} metodoSet={setDadosCliente} clicavel={true} />
        </div>
    )
}
export default TelaSolicitacoesServico;