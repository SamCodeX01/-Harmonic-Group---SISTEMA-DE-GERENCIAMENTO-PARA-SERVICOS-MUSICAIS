// Importações do CRUD API
import { excluirPacoteServico } from "services/TabelasIndependentes/PacoteServicoService.js"
import { excluirInstrumento }   from "services/TabelasIndependentes/InstrumentoService.js"
import { excluirTipoServico }   from "services/TabelasIndependentes/TipoServicoService.js"
import { excluirMeioPagamento } from "services/TabelasIndependentes/MeioPagamentoService.js"
import { excluirRepertorio }    from "services/TabelasIndependentes/RepertorioService.js"
import { excluirStatus }        from "services/TabelasIndependentes/StatusSolicitacaoService.js"
import { excluirTipoLocal }     from "services/TabelasIndependentes/TipoLocalService.js"

// Importações do CRUD API
// import { excluirPacoteServico } from "@services/BancoDadosGestor/PacoteServicoService.js"
// import { excluirInstrumento }   from "@services/BancoDadosGestor/InstrumentoService.js"
// import { excluirTipoServico }   from "@services/BancoDadosGestor/TipoServicoService.js"
// import { excluirMeioPagamento } from "@services/BancoDadosGestor/MeioPagamentoService.js"
// import { excluirRepertorio }    from "@services/BancoDadosGestor/RepertorioService.js"
// import { excluirStatus }        from "@services/BancoDadosGestor/StatusSolicitacaoService.js"
// import { excluirTipoLocal }     from "@services/BancoDadosGestor/TipoLocalService.js"


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