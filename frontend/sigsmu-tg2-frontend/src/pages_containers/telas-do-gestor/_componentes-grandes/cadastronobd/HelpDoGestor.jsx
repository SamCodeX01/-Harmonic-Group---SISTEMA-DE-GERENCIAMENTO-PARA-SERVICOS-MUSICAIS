// Importações de estilos
import helpdogestor from "./CSS/helpdogestor.module.css"


// DESCRIÇÃO
function HelpDoGestor({input, msg, evento=null, campoDeleteId="", setInput}) {
    if (input)
    return (
        <fieldset className={helpdogestor.main} >
            <legend> {msg} </legend>
            <input type="text" name="InputGestor" id="iInputGestor" onChange={evt => {setInput(evt.currentTarget.value)}} />
        </fieldset>
    )

    if (evento !== null)
    return (
        <fieldset className={helpdogestor.main} >
            <legend> {msg} </legend>
            <div> {evento.value} </div>
        </fieldset>
    )

    return (
        <fieldset className={helpdogestor.main} >
            <legend> {msg} </legend>
            <div> {campoDeleteId} </div>
        </fieldset>
    )
}
export default HelpDoGestor;