// Importações do React
import { useNavigate } from "react-router-dom";

// Importações de estilos
import styles from "./CSS/botaoselecionavel.module.css"


// Componente criado para FACILITAR A PASSAGEM DE PARÂMETROS para um botão comum
function BotaoSelecionavel({msg, estilo, rota, selecionado, setSelecionado, callback}) {
    const navigate = useNavigate()

    return (
        <button 
            className={`
                ${styles.main} 
                ${estilo ? styles.cores : ""}
                ${selecionado === msg ? styles.selecionado : ""}
            `}
            
            onClick={evt => {
                // Retorna o evento ao pai
                callback(evt.target)

                setSelecionado(msg)
                navigate(rota)
            }}

            value={msg}
        >
        {msg} </button>
    )
}
export default BotaoSelecionavel;