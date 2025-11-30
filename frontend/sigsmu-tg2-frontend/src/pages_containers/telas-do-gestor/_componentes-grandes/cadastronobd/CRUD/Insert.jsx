// Importações da API (Axios)
import { adicionarPacoteServico } from "services/TabelasIndependentes/PacoteServico.js"
import { adicionarInstrumento }   from "services/TabelasIndependentes/Instrumento.js"
import { adicionarTipoServico }   from "services/TabelasIndependentes/TipoServico.js"
import { adicionarMeioPagamento } from "services/TabelasIndependentes/MeioPagamento.js"
import { adicionarRepertorio }    from "services/TabelasIndependentes/Repertorio.js"
import { adicionarStatus }        from "services/TabelasIndependentes/StatusSolicitacao.js"
import { adicionarTipoLocal }     from "services/TabelasIndependentes/TipoLocal.js"

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