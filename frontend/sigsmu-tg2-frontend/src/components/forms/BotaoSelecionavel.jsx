// Importações do React
import { useNavigate } from "react-router-dom";

// Importações de estilos
import styles from "./botaoSelecionavel.module.css"


// Componente criado para FACILITAR A PASSAGEM DE PARÂMETROS para um botão comum
function BotaoSelecionavel({msg, estilo, rota, marcadoPadrao}) {
    const navigate = useNavigate()

    return (
        <button 
            className={`
                ${styles.main} 
                ${estilo ? styles.cores : ""}
                ${marcadoPadrao ? styles.selecionado : ""}
            `}
            
            onClick={evt => {
                    // Pega os irmãos do botão (filhos do pai do botão)
                    let filhos = [...evt.currentTarget.parentElement.children]

                    // Remove a classe "selecionado" de cada filho
                    filhos.map(filho => {
                        filho.classList.remove(styles.selecionado)
                    })

                    // Adiciona o status de selecionado no botão
                    evt.currentTarget.classList.add(styles.selecionado)
                    navigate(rota)
                
            }}
        >
        {msg} </button>
    )
}
export default BotaoSelecionavel;