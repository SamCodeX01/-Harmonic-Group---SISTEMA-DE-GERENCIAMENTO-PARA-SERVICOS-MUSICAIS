// Importações do React
import { useNavigate } from "react-router-dom";

// Importações de estilos
import styles from "./botaoSelecionavel.module.css"
import { useState } from "react";


// Componente criado para FACILITAR A PASSAGEM DE PARÂMETROS para um botão comum
function BotaoSelecionavel({msg, estilo, rota, value, selecionado, setSelecionado, setCallback_filho1}) {
    const navigate = useNavigate()

    const [callback_filho2, setCallback_filho2] = useState(null)
    setCallback_filho1(callback_filho2)

    value = msg

    return (
        <button 
            className={`
                ${styles.main} 
                ${estilo ? styles.cores : ""}
                ${selecionado === msg ? styles.selecionado : ""}
            `}
            
            onClick={evt => {
                // Retorna o evento ao pai
                setCallback_filho2(evt.currentTarget)

                setSelecionado(msg)
                navigate(rota)
            }}
        >
        {msg} </button>
    )
}
export default BotaoSelecionavel;