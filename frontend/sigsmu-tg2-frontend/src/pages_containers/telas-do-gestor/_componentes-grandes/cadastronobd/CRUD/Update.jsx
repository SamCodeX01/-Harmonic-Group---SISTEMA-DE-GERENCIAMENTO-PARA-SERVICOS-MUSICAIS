// Importações da API (Axios)
import { atualizarPacoteServico } from "services/TabelasIndependentes/PacoteServico.js"
import { atualizarInstrumento }   from "services/TabelasIndependentes/Instrumento.js"
import { atualizarTipoServico }   from "services/TabelasIndependentes/TipoServico.js"
import { atualizarMeioPagamento } from "services/TabelasIndependentes/MeioPagamento.js"
import { atualizarRepertorio }    from "services/TabelasIndependentes/Repertorio.js"
import { atualizarStatus }        from "services/TabelasIndependentes/StatusSolicitacao.js"
import { atualizarTipoLocal }     from "services/TabelasIndependentes/TipoLocal.js"


function Update(tabela, campo, input) {

    const inputDividido = input.split(",")
    const tamanhoInput = inputDividido.length

    // Armazena o nome real da tabela
    const campoFormatado = campo.slice(4,)
    
    // Monta o id e o body para envio
    const id = inputDividido[ tamanhoInput - 1 ]
    const body = {}
        body["campo"] = campoFormatado
        body["novoValor"] = inputDividido[0]

    
    // Exibe todos os atributos e valores do obj criado
    console.log(`TABLE -> ` + tabela)
    Object.entries(body).forEach(([key, value]) => {
        console.log("key -> " + key)
        console.log("value -> " + value)
    }) // Para verificação apenas!


    switch (tabela) { // De acordo com a tabela, chama a função correspondente
        case "PacoteServico":     atualizarPacoteServico(id, body)
            break
        case "Instrumento":       atualizarInstrumento(id, body)
            break
        case "Servico":           atualizarTipoServico(id, body)
            break
        case "MeioPagamento":     atualizarMeioPagamento(id, body)
            break
        case "Repertorio":        atualizarRepertorio(id, body)
            break
        case "StatusSolicitacao": atualizarStatus(id, body)
            break
        case "TipoLocal":         atualizarTipoLocal(id, body)
            break
    }
    alert("Registro atualizado!")

}
export default Update;