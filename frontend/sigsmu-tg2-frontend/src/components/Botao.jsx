// Importações de estilos
import botao from "./CSS/botao.module.css"

// Importações do React
import { replace, useNavigate } from "react-router-dom";


// Componente criado para FACILITAR A PASSAGEM DE PARÂMETROS para um botão comum
function Botao({msg, ativarEstilo, rota=null, style=null, value=null, executarComando=null}) {
    const navigate = useNavigate()

    // Retorna uma div para permitir manipulações futuras (BUTTON não funciona)
    return (
        <div 
            className={`
                ${botao.main} 
                ${ativarEstilo ? botao.cores : ""}
            `} // Aplicação de .cores caso estilo (props) seja true 
            
            onClick={evt => {
                // Evita a propagação do evento (não afeta o pai)
                evt.stopPropagation()

                if (rota != null) {
                    const rotaAtual = rota.split("/").filter(Boolean)//

                    if (rotaAtual[1] === "RotasGestor") // || rotaAtual[0] !== "Intranet" - NÃO USEI PQ VAI DAR ERRO EM ALGUMAS PARTES
                        navigate(rota, {replace: true})
                    else 
                        navigate(rota)
                }

                if (executarComando != null) {
                    executarComando()
                }
            }}

            style={style}
            value={value}
        >
        {msg} </div>
    )
}
export default Botao;