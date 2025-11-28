// Importações do React
import { useState } from "react"

////////////////////////////////////////////////////////////////
let // Variáveis que armazenam os dados preenchidos pelo cliente
    infoCliente,
    infoSolicitacao
; 

export const dadosCliente = {
    get : ()     => { return infoCliente },
    set : (dado) => { infoCliente = dado }
}

export const dadosSolicitacao = {
    get : ()     => { return infoSolicitacao },
    set : (dado) => { infoSolicitacao = dado }
}