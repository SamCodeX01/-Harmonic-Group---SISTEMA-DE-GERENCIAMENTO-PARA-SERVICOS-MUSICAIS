// Importações de estilos
import selectdatabela from "./CSS/selectdatabela.module.css"

// Importações do React
import { useState, useEffect } from "react"

// Importações do CRUD API
import { listarPacotesServico } from "../../../../services/PacoteServicoService"
import { listarInstrumentos } from "../../../../services/InstrumentoService"
import { listarTiposServico } from "../../../../services/TipoServicoService"
import { listarMeiosPagamento } from "../../../../services/MeioPagamentoService"
import { listarRepertorios } from "../../../../services/RepertorioService"
import { listarStatus } from "../../../../services/StatusSolicitacaoService"
import { listarTiposLocal } from "../../../../services/TipoLocalService"


// JOGAR TODAS AS IMPORTAÇÕES DE GET DO BANCO AQUI E ESTRUTURAR A LÓGICA //

// Nome da tabela e array de campos
function SelectDaTabela({tabela, campos}) { 

    // Retorna os pacotes de serviço cadastrados no BANCO
    const [pacotesServico, setPacotesServico] = useState()
    useEffect(() => {
        if (pacotesServico)
            listarPacotesServico()
                .then(res => setPacotesServico(res.data))
                .catch(err => console.log(err))
    }, [pacotesServico])

    // Retorna os instrumentos cadastrados no BANCO
    const [instrumentos, setInstrumentos] = useState()
    useEffect(() => {
        if (instrumentos)
            listarInstrumentos()
                .then(res => setInstrumentos(res.data))
                .catch(err => console.log(err))
    }, [instrumentos])

    // Retorna os tipos de serviço cadastrados no BANCO
    const [servicos, setServicos] = useState()
    useEffect(() => {
        if (servicos)
            listarTiposServico()
                .then(res => setServicos(res.data))
                .catch(err => console.log(err))
    }, [servicos])

    // Retorna os meios de pagamento cadastrados no BANCO
    const [meiosPagamento, setMeiosPagamento] = useState()
    useEffect(() => {
        if (meiosPagamento)
            listarMeiosPagamento()
                .then(res => setMeiosPagamento(res.data))
                .catch(err => console.log(err))
    }, [meiosPagamento])

    // Retorna as músicas cadastradas no BANCO
    const [repertorios, setRepertorios] = useState()
    useEffect(() => {
        if (repertorios)
            listarRepertorios()
                .then(res => setRepertorios(res.data))
                .catch(err => console.log(err))
    }, [repertorios])

    // Retorna os status cadastrados no BANCO
    const [statusSolicitacao, setStatusSolicitacao] = useState()
    useEffect(() => {
        if (statusSolicitacao)
            listarStatus()
                .then(res => setStatusSolicitacao(res.data))
                .catch(err => console.log(err))
    }, [statusSolicitacao])

    // Retorna os tipos de local cadastrados no BANCO
    const [tiposLocal, setTiposLocal] = useState()
    useEffect(() => {
        if (tiposLocal)
            listarTiposLocal()
                .then(res => setTiposLocal(res.data))
                .catch(err => console.log(err))
    }, [tiposLocal])


    // Mostra todos os registros do BANCO para a tabela selecionada
    const retornarRegistros = () => {
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
    // let retornosBanco = [pacotesServico, instrumentos, servicos, meiosPagamento, repertorios, statusSolicitacao, tiposLocal]




    // {tabelaSelecionada !== null &&
    //     retornarRegistros().map((registro, i) => {
    //         return <p key={i}> {registro.nome} A=A </p>
    //     })
    // }

    return (
        <table>
            <thead className={selectdatabela.head}>
                <tr>

                    {
                        (tabela != null ? 
                            retornarRegistros().map((campo, i) => {
                                return <th key={i}> {campo} </th>
                            })
                        :
                            <th></th>
                        )
                        // TERMINAR DEPOIS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                    }
                    <th>T</th>
                    <th>TT</th>
                </tr>
            </thead>

            <tbody className={selectdatabela.body}>
                <tr>
                    <td>teste1</td>
                    <td>teste2</td>
                </tr>
                <tr>
                    <td>teste3</td>
                    <td>teste4</td>
                </tr>
            </tbody>
        </table>
    )
}
export default SelectDaTabela;