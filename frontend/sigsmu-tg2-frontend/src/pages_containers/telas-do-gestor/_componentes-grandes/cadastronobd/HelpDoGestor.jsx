// Importações de estilos
import helpdogestor from "./CSS/helpdogestor.module.css"

// Importações do React
import React from "react"


// DESCRIÇÃO
function HelpDoGestor({input, msg, evento=null, operacao, setInput, setInput2=null}) {
    let qtdCampos;

    // Retorna o campo de INPUT DO GESTOR
    if (input)
    return (
        <div>
            <fieldset className={helpdogestor.main} >
                <legend> {msg} </legend>
                <input
                    type="text"
                    name="InputGestor"
                    id="iInputGestor"
                    placeholder={operacao === "insert" ? "separe os valores por vírgula" : "informe um único valor"} 
                    onChange={evt => setInput(evt.currentTarget.value) }
                />
            </fieldset>

            { setInput2 &&
                <fieldset className={helpdogestor.main2} >
                    <legend> ID do registro a ser alterado </legend>
                    <input
                        type="text"
                        name="InputGestor"
                        id="iInputGestor"
                        placeholder="informe somente o ID"
                        onChange={evt => setInput2(evt.currentTarget.value) }
                    />
                </fieldset>
            }
        </div>
    )


    // Retorna isso caso aja alguma tabela/campo selecionado
    if (evento != null) 
    return (
        <fieldset className={helpdogestor.main} >
            <legend> {msg} </legend>
            <div> {operacao === "insert" ? String(evento.value?.slice(1)).replaceAll(",", ", ") : evento.value } </div>
        </fieldset>
    )
    

    // No início, nenhuma tabela/campo está selecionado
    return (
        <fieldset className={helpdogestor.main} >
            <legend> {msg} </legend>
            <div> ... </div>
        </fieldset>
    )
}
export default HelpDoGestor;