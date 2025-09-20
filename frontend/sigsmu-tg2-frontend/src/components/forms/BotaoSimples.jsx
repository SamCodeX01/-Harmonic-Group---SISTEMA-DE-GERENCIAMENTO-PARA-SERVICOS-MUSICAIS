// Importações do React
import { useNavigate } from "react-router-dom";

// Importações de estilos
import styles from "./CSS/botaosimples.module.css"


// Componente criado para FACILITAR A PASSAGEM DE PARÂMETROS para um botão comum
function BotaoSimples({msg, estilo, rota=null, value=null, style=null}) {
    const navigate = useNavigate()

    // Retorna uma div para permitir manipulações futuras (button não funciona)
    return (
        <div 
            className={`
                ${styles.main} 
                ${estilo ? styles.cores : ""}
            `}
            
            onClick={evt => {
                // Evita a propagação do evento (não afeta o pai)
                evt.stopPropagation()

                // Se tiver rota
                navigate(rota)
            }}

            value={value}

            // Em uso (radio)
            style={style}
        >
        {msg} </div>
    )
}
export default BotaoSimples;