// Importações do React
import { useNavigate } from "react-router-dom";

// Importações de estilos
import styles from "./botaoDirecionavel.module.css"


// Componente criado para FACILITAR A PASSAGEM DE PARÂMETROS para um botão comum
function BotaoDirecionavel({msg, estilo, rota, value, recebe}) {
    const navigate = useNavigate()

    return (
        // <div style={recebe}>TESTE</div>

            <button 
                className={`
                    ${styles.main} 
                    ${estilo ? styles.cores : ""}
                    
                `}
                
                onClick={evt => {
                    navigate(rota)
                }}

                
                
            >
            {msg} </button>
    )
}
export default BotaoDirecionavel;