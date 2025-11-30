// Importações do React
import { useState } from "react"

////////////////////////////////////////////////////////////////
let // Variáveis que armazenam os dados preenchidos pelo cliente
    infoCliente,
    infoSolicitacao,
    infoGestor,
    infoMusico
; 

export const dadosCliente = {
    get : ()     => { return infoCliente },
    set : (dado) => { infoCliente = dado }
}

export const dadosSolicitacao = {
    get : ()     => { return infoSolicitacao },
    set : (dado) => { infoSolicitacao = dado }
}

export const dadosGestor = {
    get : ()     => { return infoGestor },
    set : (dado) => { infoGestor = dado }
}

export const dadosMusico = {
    get : ()     => { return infoMusico },
    set : (dado) => { infoMusico = dado }
}