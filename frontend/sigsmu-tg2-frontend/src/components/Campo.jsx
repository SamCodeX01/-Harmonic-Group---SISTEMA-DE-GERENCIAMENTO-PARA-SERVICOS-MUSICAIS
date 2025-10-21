// Importações de estilos
import campo from "./CSS/campo.module.css"


// Componente criado para JUNTAR LABEL+INPUT para melhor organização do código
function Campo({msg, type, name, id, placeholder=null}) {
    return (
        <div>
            <label htmlFor={id}> {msg} </label>
            <input type={type} name={name} placeholder={placeholder} className={campo.main} id={id}/>
        </div>
    )
}
export default Campo;