// Importações de estilos
import React from "react"
import helpdogestor from "./CSS/helpdogestor.module.css"


// DESCRIÇÃO
function HelpDoGestor({input, msg, evento=null, setInput}) {
    let qtdCampos;

    // Retorna o campo de INPUT DO GESTOR
    if (input)
    return (
        <fieldset className={helpdogestor.main} >
            <legend> {msg} </legend>
            <input type="text" name="InputGestor" id="iInputGestor" onChange={evt => { setInput(evt.currentTarget.value) }} />
        </fieldset>
    )


    // Retorna isso caso aja alguma tabela/campo selecionado
    if (evento != null) 
    return (
        <fieldset className={helpdogestor.main} >
            <legend> {msg} </legend>
            <div> {evento.value} </div>
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