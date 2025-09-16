// Importações do React
import { useNavigate } from "react-router-dom";

// Importações de estilos
import styles from "./botao.module.css"

// Importações de componentes
import TabelaCampos from "../cadastronobd/TabelaCampos";


// Componente criado para FACILITAR A PASSAGEM DE PARÂMETROS para um botão comum
function Botao({msg, estilo, rota, marcadoPadrao, value, selectTable}) {
    const navigate = useNavigate()

    return (
        <button 
            className={`
                ${styles.main} 
                ${estilo ? styles.cores : ""}
                ${marcadoPadrao ? styles.selecionado : ""}
            `}
            
            onClick={evt => {
                    // console.log(evt.currentTarget.parentElement.nextSibling.appendChild())
                    

                    // if (evt.currentTarget.parentElement.nextSibling.hasChildNodes)
                    //     evt.currentTarget.parentElement.nextSibling.firstChild.get
                        selectTable(msg)
                        console.log()

                    // evt.currentTarget.parentElement.nextSibling.appendChild(evt.currentTarget)
                    // return <TabelaCampos tabela={msg} campos={value} />


                    navigate(rota)
            }}
        >
        {msg} </button>
    )
}
export default Botao;