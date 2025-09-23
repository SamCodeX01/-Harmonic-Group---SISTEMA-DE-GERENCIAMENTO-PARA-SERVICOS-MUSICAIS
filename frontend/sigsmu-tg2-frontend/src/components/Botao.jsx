// Importações de estilos
import css from "./CSS/botao.module.css"

// Importações do React
import { useNavigate } from "react-router-dom";


// Componente criado para FACILITAR A PASSAGEM DE PARÂMETROS para um botão comum
function Botao({msg, estilo, rota=null, style=null}) {
    const navigate = useNavigate()

    // Retorna uma div para permitir manipulações futuras (BUTTON não funciona)
    return (
        <div 
            className={`
                ${css.main} 
                ${estilo ? css.cores : ""}
            `}
            
            onClick={evt => {
                // Evita a propagação do evento (não afeta o pai)
                evt.stopPropagation()

                // Se tiver rota
                navigate(rota)
            }}

            // Em uso (radio)
            style={style}
        >
        {msg} </div>
    )
}
export default Botao;