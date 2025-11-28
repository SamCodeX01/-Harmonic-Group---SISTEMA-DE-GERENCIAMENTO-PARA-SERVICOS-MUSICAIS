// Importações do CRUD API
import { adicionarPacoteServico } from "services/TabelasIndependentes/PacoteServicoService.js"
import { adicionarInstrumento }   from "services/TabelasIndependentes/InstrumentoService.js"
import { adicionarTipoServico }   from "services/TabelasIndependentes/TipoServicoService.js"
import { adicionarMeioPagamento } from "services/TabelasIndependentes/MeioPagamentoService.js"
import { adicionarRepertorio }    from "services/TabelasIndependentes/RepertorioService.js"
import { adicionarStatus }        from "services/TabelasIndependentes/StatusSolicitacaoService.js"
import { adicionarTipoLocal }     from "services/TabelasIndependentes/TipoLocalService.js"

// Importações do CRUD API
// import { adicionarPacoteServico } from "@services/BancoDadosGestor/PacoteServicoService.js"
// import { adicionarInstrumento }   from "@services/BancoDadosGestor/InstrumentoService.js"
// import { adicionarTipoServico }   from "@services/BancoDadosGestor/TipoServicoService.js"
// import { adicionarMeioPagamento } from "@services/BancoDadosGestor/MeioPagamentoService.js"
// import { adicionarRepertorio }    from "@services/BancoDadosGestor/RepertorioService.js"
// import { adicionarStatus }        from "@services/BancoDadosGestor/StatusSolicitacaoService.js"
// import { adicionarTipoLocal }     from "@services/BancoDadosGestor/TipoLocalService.js"

// Importações do React
import { useEffect } from "react"


function Insert(tabela, campos, input) {

    const inputDividido = input.split(",")
    const body = {}
    
    campos // Varre os campos que vieram como parâmetro
    .filter((campo) => campo !== "id")
    .forEach((campo, i) => {

        // Verificação anti "out of index" e cria o novo atributo do obj
        if (i < inputDividido.length)
            body[ String(campo) ] = inputDividido[i]
    })


    // Exibe todos os atributos e valores do obj criado
    console.log(`TABLE -> ` + tabela)
    Object.entries(body).forEach(([key, value]) => {
        console.log(`CHAVE  -> ` + key)
        console.log(`valor  -> ` + value)
    }) // Para verificação apenas!


    switch (tabela) { // De acordo com a tabela, chama a função correspondente
        case "PacoteServico":     adicionarPacoteServico(body)
            break
        case "Instrumento":       adicionarInstrumento(body)
            break
        case "Servico":           adicionarTipoServico(body)
            break
        case "MeioPagamento":     adicionarMeioPagamento(body)
            break
        case "Repertorio":        adicionarRepertorio(body)
            break
        case "StatusSolicitacao": adicionarStatus(body)
            break
        case "TipoLocal":         adicionarTipoLocal(body)
            break
    }
    alert("Registro adicionado!")

}
export default Insert;