// Importações de estilos
import { useEffect } from "react"
import insertCSS from "./CSS/insert.module.css"

// Importações do CRUD API
import { adicionarPacoteServico } from "../../../../../services/PacoteServicoService"
import { adicionarInstrumento } from "../../../../../services/InstrumentoService"
import { adicionarTipoServico } from "../../../../../services/TipoServicoService"
import { adicionarMeioPagamento } from "../../../../../services/MeioPagamentoService"
import { adicionarRepertorio } from "../../../../../services/RepertorioService"
import { adicionarStatus } from "../../../../../services/StatusSolicitacaoService"
import { adicionarTipoLocal } from "../../../../../services/TipoLocalService"


function Insert({tabela=null, input}) {

    const adicionarDados = () => {
        console.log("input -> " + input)
        switch (tabela) {
            case "PacoteServico":     adicionarTipoLocal({"nome" : input})
                break
            case "Instrumento":       adicionarTipoLocal({"nome" : input})
                break
            case "Servico":           adicionarTipoLocal({"nome" : input})
                break
            case "MeioPagamento":     adicionarTipoLocal({"nome" : input})
                break
            case "Repertorio":        adicionarTipoLocal({"nome" : input})
                break
            case "StatusSolicitacao": adicionarTipoLocal({"nome" : input})
                break
            case "TipoLocal":         adicionarTipoLocal({"nome" : input})
                break
            default:
                break
        }
    }

    useEffect(() => {
        adicionarDados()
    }, [tabela])

    return(
        <></>
    )
}
export default Insert;