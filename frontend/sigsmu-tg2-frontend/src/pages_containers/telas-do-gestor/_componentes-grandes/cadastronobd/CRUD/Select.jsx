// Importações de estilos
import selectCSS from "./CSS/select.module.css"

// Importações da API (Axios)
import { listarPacotesServico } from "services/TabelasIndependentes/PacoteServico"
import { listarInstrumentos }   from "services/TabelasIndependentes/Instrumento.js"
import { listarTiposServico }   from "services/TabelasIndependentes/TipoServico.js"
import { listarMeiosPagamento } from "services/TabelasIndependentes/MeioPagamento.js"
import { listarRepertorios }    from "services/TabelasIndependentes/Repertorio.js"
import { listarStatus }         from "services/TabelasIndependentes/StatusSolicitacao.js"
import { listarTiposLocal }     from "services/TabelasIndependentes/TipoLocal.js"

// Importações do React
import { useState, useEffect } from "react"


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

    { // Retorna cada tabela do BANCO sempre que o componente for chamado
        useEffect(() => {
            // console.log(campos)

            // Retorna os pacotes de serviço cadastrados no BANCO
            listarPacotesServico()
                .then(res => setPacotesServico(res.data))
                .catch(err => console.log(err))

            // Retorna os instrumentos cadastrados no BANCO
            listarInstrumentos()
                .then(res => setInstrumentos(res.data))
                .catch(err => console.log(err))

            // Retorna os tipos de serviço cadastrados no BANCO
            listarTiposServico()
                .then(res => setServicos(res.data))
                .catch(err => console.log(err))

            // Retorna os meios de pagamento cadastrados no BANCO
            listarMeiosPagamento()
                .then(res => setMeiosPagamento(res.data))
                .catch(err => console.log(err))

            // Retorna as músicas cadastradas no BANCO
            listarRepertorios()
                .then(res => setRepertorios(res.data))
                .catch(err => console.log(err))

            // Retorna os status cadastrados no BANCO
            listarStatus()
                .then(res => setStatusSolicitacao(res.data))
                .catch(err => console.log(err))

            // Retorna os tipos de local cadastrados no BANCO
            listarTiposLocal()
                .then(res => setTiposLocal(res.data))
                .catch(err => console.log(err))

        }, [tabela, campos])
    }


    // Mostra todos os registros do BANCO para a tabela selecionada
    const retornarRegistros = () => {
        if (tabela != null) {
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
    }

    // Guarda apenas o retorno da tabela selecionada
    const retorno = (tabela ? retornarRegistros() : null)


    return (
        <table className={selectCSS.table}>
            <caption> {tabela ? tabela : ""} </caption>

            {/* Exibe os campos da tabela (nome do campo - HEADER) */}
            <thead className={selectCSS.thead}>
                <tr>
                { campos != null &&
                    campos.map((nomeCampo, i) => {
                        // if (nomeCampo[3] !== "_")
                            return <th key={i}> {(mostrarPrefixo ? prefixo : "") + nomeCampo} </th>
                    })
                }
                </tr>
            </thead> 
            
            {/* Exibe os dados retornados (registros - BODY) */}
            <tbody className={selectCSS.tbody}>
            {
                // Se tiver retorno, executa
                (retorno != null &&

                    // Executa individualmente cada registro (obj)
                    retorno.map((registro, i) => {

                        // Retorna cada linha
                        return <tr key={i}>
                        {
                            // Pega cada valor para cada chave e retorna como dado
                            Object.values(registro)

                                // Filtra para eliminar objetos e deixar apenas valores
                                .filter(dado => typeof dado !== "object")
                                .map((dado, i) => {
                                    return <td key={i}> {dado} </td>
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