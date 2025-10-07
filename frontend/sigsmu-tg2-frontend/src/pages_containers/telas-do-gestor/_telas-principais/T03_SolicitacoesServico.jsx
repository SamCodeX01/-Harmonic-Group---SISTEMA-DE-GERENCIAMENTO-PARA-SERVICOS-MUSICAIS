// Importações de estilos
import t03_solicitacoesServico from "./CSS/t03_solicitacoesServico.module.css"

// Importações de componentes
import Cards from "../_componentes-grandes/_compartilhados/Cards"
import Radio from "../../../components/Radio"

// Importações do React
import { useState } from "react"


// Tela de SOLICITAÇÕES DE SERVIÇO - para visualização das ordens de serviço geradas por solicitações de clientes
function T03_SolicitacoesServico() {
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
        <div className={t03_solicitacoesServico.main}>
            <Radio setSelecionado={setCard} name={"card"}>
                <Cards id={0} objCliente={dadosCliente} metodoSet={setDadosCliente} idCardSelecionado={card ? card.id : null} />
                <Cards id={1} objCliente={dadosCliente} metodoSet={setDadosCliente} idCardSelecionado={card ? card.id : null} />
                <Cards id={2} objCliente={dadosCliente} metodoSet={setDadosCliente} idCardSelecionado={card ? card.id : null} />
                <Cards id={3} objCliente={dadosCliente} metodoSet={setDadosCliente} idCardSelecionado={card ? card.id : null} />
            </Radio>
        </div>
    )
}
export default T03_SolicitacoesServico;