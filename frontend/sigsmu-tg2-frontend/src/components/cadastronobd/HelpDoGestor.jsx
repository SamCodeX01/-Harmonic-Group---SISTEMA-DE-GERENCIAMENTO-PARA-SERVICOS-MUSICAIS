import styles from "./helpDoGestor.module.css"

function HelpDoGestor({input, msg, evento=null, tabela="nada", prefixo=""}) {
    if (input)
        return (
            <fieldset className={styles.main} >
                <legend> {msg} </legend>
                <input type="text" name="InputGestor" id="iInputGestor" />
            </fieldset>
        )

    if (tabela !== "nada")
    return (
        <fieldset className={styles.main} >
            <legend> {msg} </legend>
            <div> {tabela} </div>
        </fieldset>
    )

    return (
        <fieldset className={styles.main} >
            <legend> {msg} </legend>
            <div> {prefixo[0] + (evento !== null ? evento.value : "")} </div>
        </fieldset>
    )
}
export default HelpDoGestor;