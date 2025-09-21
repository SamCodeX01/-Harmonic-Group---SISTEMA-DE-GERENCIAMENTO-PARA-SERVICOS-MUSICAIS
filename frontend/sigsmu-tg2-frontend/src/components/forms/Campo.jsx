// Importações de estilos
import campoCss from "./CSS/campo.module.css"


// Componente criado para JUNTAR LABEL+INPUT para melhor organização do código
function Campo({type, name, placeholder, labelName, id, htmlFor}) {
    return (
        <div>
            <label htmlFor={htmlFor}> {labelName} </label>
            <input type={type} name={name} placeholder={placeholder} className={campoCss.main} id={id}/>
        </div>
    )
}
export default Campo;