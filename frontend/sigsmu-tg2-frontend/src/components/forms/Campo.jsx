// Importações de estilos
import styles from "./CSS/campo.module.css"


// Componente criado para JUNTAR LABEL+INPUT para melhor organização do código
function Campo({nome, msg, tipo, dica, id}) {
    return (
        <div>
            <label htmlFor={nome}> {msg} </label>
            <input type={tipo} name={nome} placeholder={dica} className={styles.main}/>
        </div>
    )
}
export default Campo;