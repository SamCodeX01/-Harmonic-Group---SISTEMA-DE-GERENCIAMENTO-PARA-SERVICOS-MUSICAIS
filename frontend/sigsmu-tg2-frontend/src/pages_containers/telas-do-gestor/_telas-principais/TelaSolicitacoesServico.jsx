// Importações de estilos
import css from "./CSS/telasolicitacoesServico.module.css"

// Importações de componentes
import Cards from "../_componentes-grandes/_compartilhados/Cards"
import Radio from "../../../components/Radio"

// Importações do React
import { useState } from "react"


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
            <Radio setSelecionado={setCard} name={"card"}>
                <Cards id={0} objCliente={dadosCliente} metodoSet={setDadosCliente} idCardSelecionado={card ? card.id : null} />
                <Cards id={1} objCliente={dadosCliente} metodoSet={setDadosCliente} idCardSelecionado={card ? card.id : null} />
                <Cards id={2} objCliente={dadosCliente} metodoSet={setDadosCliente} idCardSelecionado={card ? card.id : null} />
            </Radio>
        </div>
    )
}
export default TelaSolicitacoesServico;