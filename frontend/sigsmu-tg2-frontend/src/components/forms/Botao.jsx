// Importações do React
import { useNavigate } from "react-router-dom";

// Importações de estilos
import styles from "./botao.module.css"


// Componente criado para FACILITAR A PASSAGEM DE PARÂMETROS para um botão comum
function Botao({msg, estilo, rota}) {
    const navigate = useNavigate()

    return (
        <button 
            className={`${styles.main} ${estilo ? styles.cores : ""}`}
            onClick={() => navigate(rota)}>
            {msg} 
        </button>
    )
}
export default Botao;