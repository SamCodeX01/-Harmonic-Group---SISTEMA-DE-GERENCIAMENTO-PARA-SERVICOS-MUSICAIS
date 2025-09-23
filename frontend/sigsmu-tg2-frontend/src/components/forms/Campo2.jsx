// Importações de estilos
import styles from "./CSS/campo2.module.css"


// Componente criado para JUNTAR LABEL+INPUT para melhor organização do código
function Campo({type, name, msg, placeholder, id}) {
    return (
        <div>
            <label htmlFor={name}> {msg} </label>
            <input type={type} name={name} placeholder={placeholder} className={styles.main} id={id}/>
        </div>
    )
}
export default Campo;