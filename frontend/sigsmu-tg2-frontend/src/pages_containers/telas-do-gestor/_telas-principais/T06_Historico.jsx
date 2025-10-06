// Importações de estilos
import t06_historico from "./CSS/t06_historico.module.css"

// Importações de componentes
import Cards from "../_componentes-grandes/_compartilhados/Cards";
import { useState } from "react";


// Tela de HISTÓRICO - para armazenar registros de serviços já realizados ou até mesmo cancelados
function T06_Historico() {

    // Nem sei se precisa disso, pq é uma tela apenas de visualização, não alteração
    const [dadosCliente, setDadosCliente] = useState({
        idSolicitacao: 1234,
        nomeCliente: "Guilherme",
        situacaoServico: "Em andamento",

        dataSolicitacao: "23/12/2022",
        tipoServico: "Aniversário",
        pacoteEscolhido: "Harmonic Duo"
    })

    return (
        <div className={t06_historico.main}>
            <Cards id={1} objCliente={dadosCliente} metodoSet={setDadosCliente} comBotao={true} />
            <Cards id={2} objCliente={dadosCliente} metodoSet={setDadosCliente} comBotao={true} />
        </div>
    )
}
export default T06_Historico;