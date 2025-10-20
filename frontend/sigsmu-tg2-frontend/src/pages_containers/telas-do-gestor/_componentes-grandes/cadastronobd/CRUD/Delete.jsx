// Importações do CRUD API
import { excluirPacoteServico } from "../../../../../services/PacoteServicoService"
import { excluirInstrumento } from "../../../../../services/InstrumentoService"
import { excluirTipoServico } from "../../../../../services/TipoServicoService"
import { excluirMeioPagamento } from "../../../../../services/MeioPagamentoService"
import { excluirRepertorio } from "../../../../../services/RepertorioService"
import { excluirStatus } from "../../../../../services/StatusSolicitacaoService"
import { excluirTipoLocal } from "../../../../../services/TipoLocalService"

function Delete(tabela, id) {

    switch (tabela) { // De acordo com a tabela, chama a função correspondente
        case "PacoteServico":     excluirPacoteServico(id)
            break
        case "Instrumento":       excluirInstrumento(id)
            break
        case "Servico":           excluirTipoServico(id)
            break
        case "MeioPagamento":     excluirMeioPagamento(id)
            break
        case "Repertorio":        excluirRepertorio(id)
            break
        case "StatusSolicitacao": excluirStatus(id)
            break
        case "TipoLocal":         excluirTipoLocal(id)
            break
    }
    alert("Registro deletado!")
}
export default Delete;