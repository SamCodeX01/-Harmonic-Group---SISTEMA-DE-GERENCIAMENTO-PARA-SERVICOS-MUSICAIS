// Importações da API (Axios)
import { excluirPacoteServico } from "services/TabelasIndependentes/PacoteServico.js"
import { excluirInstrumento }   from "services/TabelasIndependentes/Instrumento.js"
import { excluirTipoServico }   from "services/TabelasIndependentes/TipoServico.js"
import { excluirMeioPagamento } from "services/TabelasIndependentes/MeioPagamento.js"
import { excluirRepertorio }    from "services/TabelasIndependentes/Repertorio.js"
import { excluirStatus }        from "services/TabelasIndependentes/StatusSolicitacao.js"
import { excluirTipoLocal }     from "services/TabelasIndependentes/TipoLocal.js"


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