// Importações de estilos
import styles from "./radioButton.module.css"


// Componente criado para facilitar o uso de um radio button
function RadioButton({id, msg, checked, setChecked}) {
    return (
        <>
            {/* Uma div que faz referência a um radio button */}
            <label htmlFor={"iradio" + (id)}>
                {console.log("iradio"+id)}
                <div 
                    className={`${styles.flex} ${(checked === "iradio"+id ? styles.selected : styles.main)}`}
                >
                {msg} </div>
            </label>

            {/* Radio button escondido para poder estilizar */}
            <input 
                className={styles.radio}
                type="radio" 
                name="radio" 
                id={"iradio" + (id)} 
                onChange={evt => { setChecked((evt.currentTarget.checked ? "iradio"+id : "")) }}
            />
        </>
    )
}
export default RadioButton;