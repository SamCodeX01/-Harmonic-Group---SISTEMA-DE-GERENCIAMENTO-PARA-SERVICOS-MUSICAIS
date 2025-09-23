// Importações de estilos
import css from "./CSS/telasolicitacoesServico.module.css"

// Importações do React
import { useState } from "react"

// Importações de componentes
import Cards from "../_componentes-grandes/_compartilhados/Cards"
import Radio from "../../../components/Radio"


// Tela de SOLICITAÇÕES DE SERVIÇO - para visualização das ordens de serviço geradas por solicitações de clientes
function TelaSolicitacoesServico() {
    const [card, setCard] = useState(null)

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
        <div className={css.main}>
            <Radio selecionado={card} setSelecionado={setCard} name={"card"} >
                <Cards id={0} objCliente={dadosCliente} metodoSet={setDadosCliente} idCardSelecionado={card} />
                <Cards id={1} objCliente={dadosCliente} metodoSet={setDadosCliente} idCardSelecionado={card} />
                <Cards id={2} objCliente={dadosCliente} metodoSet={setDadosCliente} idCardSelecionado={card} />
            </Radio>
        </div>
    )
}
export default TelaSolicitacoesServico;