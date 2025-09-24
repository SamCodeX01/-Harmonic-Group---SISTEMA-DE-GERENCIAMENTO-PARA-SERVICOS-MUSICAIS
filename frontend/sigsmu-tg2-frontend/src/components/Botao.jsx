// Importações de estilos
import css from "./CSS/botao.module.css"

// Importações do React
import { useNavigate } from "react-router-dom";


// Componente criado para FACILITAR A PASSAGEM DE PARÂMETROS para um botão comum
function Botao({msg, estilo, rota=null, style=null, value=null}) {
    const navigate = useNavigate()

    // Retorna uma div para permitir manipulações futuras (BUTTON não funciona)
    return (
        <div 
            className={`
                ${css.main} 
                ${estilo ? css.cores : ""}
            `} // Aplicação de .cores caso estilo (props) seja true 
            
            
            onClick={evt => {
                // Evita a propagação do evento (não afeta o pai)
                evt.stopPropagation()

                // Se tiver rota
                navigate(rota)
            }}

            style={style}
            value={value}
        >
        {msg} </div>
    )
}
export default Botao;