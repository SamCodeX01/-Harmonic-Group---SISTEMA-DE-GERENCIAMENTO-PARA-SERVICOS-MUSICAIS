// Importações do CRUD API
import { atualizarPacoteServico } from "../../../../../services/BancoDadosGestor/PacoteServicoService"
import { atualizarInstrumento } from "../../../../../services/BancoDadosGestor/InstrumentoService"
import { atualizarTipoServico } from "../../../../../services/BancoDadosGestor/TipoServicoService"
import { atualizarMeioPagamento } from "../../../../../services/BancoDadosGestor/MeioPagamentoService"
import { atualizarRepertorio } from "../../../../../services/BancoDadosGestor/RepertorioService"
import { atualizarStatus } from "../../../../../services/BancoDadosGestor/StatusSolicitacaoService"
import {atualizarTipoLocal} from "../../../../../services/BancoDadosGestor/TipoLocalService"
    
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