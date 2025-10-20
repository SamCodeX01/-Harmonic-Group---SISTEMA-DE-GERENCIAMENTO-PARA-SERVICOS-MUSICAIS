// Importações do CRUD API
import { atualizarPacoteServico } from "../../../../../services/PacoteServicoService"
import { atualizarInstrumento } from "../../../../../services/InstrumentoService"
import { atualizarTipoServico } from "../../../../../services/TipoServicoService"
import { atualizarMeioPagamento } from "../../../../../services/MeioPagamentoService"
import { atualizarRepertorio } from "../../../../../services/RepertorioService"
import { atualizarStatus } from "../../../../../services/StatusSolicitacaoService"
import { atualizarTipoLocal } from "../../../../../services/TipoLocalService"
    
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