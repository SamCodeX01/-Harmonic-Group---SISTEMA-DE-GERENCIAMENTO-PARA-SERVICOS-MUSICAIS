import { useState } from "react"

// Vou criar vários useStates aqui para conter o valor de cada entidade (menos as de tela específica como BD).
// Quando for adicionar valor, uso setState; Quando quiser recuperar em alguma tela, uso getState 

const [infoClientes, setInfoClientes] = useState()
const [infoOutro, setInfoOutro] = useState()

const dataCliente = {
    get : infoClientes,
    set : setInfoClientes
}

const dataOutro = {
    get : infoOutro,
    set : setInfoOutro
}

export { dataCliente, dataOutro }