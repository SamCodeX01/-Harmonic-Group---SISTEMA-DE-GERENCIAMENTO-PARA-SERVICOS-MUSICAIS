// Importações do React
import { useNavigate } from "react-router-dom";

// Importações de estilos
import styles from "./botao.module.css"


// Componente criado para FACILITAR A PASSAGEM DE PARÂMETROS para um botão comum
function Botao({msg, estilo, rota, selecionavel, marcadoPadrao}) {
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

                // Se selecionavel, pinta de outra cor adicionando a classe com background
                if (selecionavel) 
                    evt.currentTarget.classList.add(styles.selecionado)
                navigate(rota)
                
            }}
        >

        {msg} </button>
    )
}
export default Botao;