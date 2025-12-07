// Importações da API (Axios)
import { atualizarPacoteServico } from "services/TabelasIndependentes/PacoteServico.js"
import { atualizarInstrumento }   from "services/TabelasIndependentes/Instrumento.js"
import { atualizarTipoServico }   from "services/TabelasIndependentes/TipoServico.js"
import { atualizarMeioPagamento } from "services/TabelasIndependentes/MeioPagamento.js"
import { atualizarRepertorio }    from "services/TabelasIndependentes/Repertorio.js"
import { atualizarStatus }        from "services/TabelasIndependentes/StatusSolicitacao.js"
import { atualizarTipoLocal }     from "services/TabelasIndependentes/TipoLocal.js"
import { useEffect } from "react"


function Update(tabela, campo, input, input2) {

    // console.log("input size -> " + input.length)

    const novoValor = input
    const id        = Number(input2)

    // Armazena o nome real da tabela
    console.log("tabela -> " + tabela)
    console.log("campo -> " + campo)
    console.log("input1Formatado -> " + novoValor)
    console.log("input2Formatado -> " + id)
    

    // Body - nome do CAMPO e seu novo VALOR
    const body = {}
        body["campo"] = campo
        body["novoValor"] = novoValor

    
    // Exibe todos os atributos e valores do obj criado
    // console.log(`TABLE -> ` + tabela)
    // Object.entries(body).forEach(([key, value]) => {
    //     console.log("key -> " + key)
    //     console.log("value -> " + value)
    // }) // Para verificação apenas!


    try {
        switch (tabela) { // De acordo com a tabela, chama a função correspondente
            case "PacoteServico":     atualizarPacoteServico(id, body) // tem que ver
                break
            case "Instrumento":       atualizarInstrumento(id, body) // tem que ver
                break
            case "Servico":           atualizarTipoServico(id, body)
                break
            case "MeioPagamento":     atualizarMeioPagamento(id, body)
                break
            case "Repertorio":        atualizarRepertorio(id, body) // tem que ver
                break
            case "StatusSolicitacao": atualizarStatus(id, body)
                break
            case "TipoLocal":         atualizarTipoLocal(id, body)
                break
        }

        alert("Registro atualizado!")
        // window.location.reload()
    }
    catch(erro) {
        alert("Não foi possível alterar o registro!")
        console.log("Erro ao alterar registro: " + erro)
    }

    // return(<></>)

}
export default Update;