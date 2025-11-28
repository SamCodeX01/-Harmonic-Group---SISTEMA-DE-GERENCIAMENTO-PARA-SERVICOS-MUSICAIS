// Importações de estilos
import selectCSS from "./CSS/select.module.css"

// Importações do CRUD API
import { listarPacotesServico } from "services/TabelasIndependentes/PacoteServicoService"
import { listarInstrumentos }   from "services/TabelasIndependentes/InstrumentoService.js"
import { listarTiposServico }   from "services/TabelasIndependentes/TipoServicoService.js"
import { listarMeiosPagamento } from "services/TabelasIndependentes/MeioPagamentoService.js"
import { listarRepertorios }    from "services/TabelasIndependentes/RepertorioService.js"
import { listarStatus }         from "services/TabelasIndependentes/StatusSolicitacaoService.js"
import { listarTiposLocal }     from "services/TabelasIndependentes/TipoLocalService.js"

// Importações do React
import { useState, useEffect } from "react"

// Importações do CRUD API
// import { listarPacotesServico } from "@services/BancoDadosGestor/PacoteServicoService.js"
// import { listarInstrumentos }   from "@services/BancoDadosGestor/InstrumentoService.js"
// import { listarTiposServico }   from "@services/BancoDadosGestor/TipoServicoService.js"
// import { listarMeiosPagamento } from "@services/BancoDadosGestor/MeioPagamentoService.js"
// import { listarRepertorios }    from "@services/BancoDadosGestor/RepertorioService.js"
// import { listarStatus }         from "@services/BancoDadosGestor/StatusSolicitacaoService.js"
// import { listarTiposLocal }     from "@services/BancoDadosGestor/TipoLocalService.js"


// Função que retona o resultado de um SELECT no banco quando uma tabela é selecionada
function Select({tabela=null, campos=null, prefixo="", mostrarPrefixo=false}) { 

    // Armazena o retorno de cada tabela do banco
    const [pacotesServico, setPacotesServico]       = useState()
    const [instrumentos, setInstrumentos]           = useState()
    const [servicos, setServicos]                   = useState()
    const [meiosPagamento, setMeiosPagamento]       = useState()
    const [repertorios, setRepertorios]             = useState()
    const [statusSolicitacao, setStatusSolicitacao] = useState()
    const [tiposLocal, setTiposLocal]               = useState()

    { // Retorna cada tabela do BANCO (useStates)  
        
        // Retorna os pacotes de serviço cadastrados no BANCO
        useEffect(() => {
            listarPacotesServico()
                .then(res => setPacotesServico(res.data))
                .catch(err => console.log(err))
        }, [pacotesServico])

        // Retorna os instrumentos cadastrados no BANCO
        useEffect(() => {
            listarInstrumentos()
                .then(res => setInstrumentos(res.data))
                .catch(err => console.log(err))
        }, [instrumentos])

        // Retorna os tipos de serviço cadastrados no BANCO
        useEffect(() => {
            listarTiposServico()
                .then(res => setServicos(res.data))
                .catch(err => console.log(err))
        }, [servicos])

        // Retorna os meios de pagamento cadastrados no BANCO
        useEffect(() => {
            listarMeiosPagamento()
                .then(res => setMeiosPagamento(res.data))
                .catch(err => console.log(err))
        }, [meiosPagamento])

        // Retorna as músicas cadastradas no BANCO
        useEffect(() => {
            listarRepertorios()
                .then(res => setRepertorios(res.data))
                .catch(err => console.log(err))
        }, [repertorios])

        // Retorna os status cadastrados no BANCO
        useEffect(() => {
            listarStatus()
                .then(res => setStatusSolicitacao(res.data))
                .catch(err => console.log(err))
        }, [statusSolicitacao])

        // Retorna os tipos de local cadastrados no BANCO
        useEffect(() => {
            listarTiposLocal()
                .then(res => setTiposLocal(res.data))
                .catch(err => console.log(err))
        }, [tiposLocal])
    }


    // Mostra todos os registros do BANCO para a tabela selecionada
    const retornarRegistros = () => {
        if (tabela != null)
            switch (tabela) {
                case "PacoteServico":     return pacotesServico
                case "Instrumento":       return instrumentos
                case "Servico":           return servicos
                case "MeioPagamento":     return meiosPagamento
                case "Repertorio":        return repertorios
                case "StatusSolicitacao": return statusSolicitacao
                case "TipoLocal":         return tiposLocal
            }
    }

    // Guarda apenas o retorno da tabela selecionada
    const retorno = tabela != null ? retornarRegistros() : null

    return (
        <table className={selectCSS.table}>
            <caption> {tabela ? tabela : ""} </caption>

            {/* Exibe os campos da tabela (nome do campo) */}
            <thead className={selectCSS.thead}>
                <tr>
                {
                    (campos != null &&
                    campos.map((nomeCampo, i) => {
                        if (nomeCampo[3] !== "_")
                            return <th key={i}> { (mostrarPrefixo ? prefixo : "") + nomeCampo} </th>
                    }))
                }
                </tr>
            </thead> 
            
            {/* Exibe os dados retornados (registros) */}
            <tbody className={selectCSS.tbody}>
            {
                // Se tiver retorno, executa
                (retorno != null &&
                    retorno.map((obj, i) => {
                        return <tr key={i}>
                            {
                                Object.values(obj).map((atributo, i) => {
                                    return <td key={i}> {atributo} </td>
                                })
                            }
                        </tr>
                    })
                )
            }
            </tbody>
        </table>
    )
}
export default Select;