// Importações de estilo
import styles from "./camposTabela.module.css"
import buttonStyles from "../forms/botaoSelecionavel.module.css"

// Importações de componentes
import BotaoSelecionavel from "../forms/BotaoSelecionavel";
import { useState } from "react";

// Componente que retorna todos os campos de uma tabela do banco de dados
function CamposTabela({campos, setCallback_pai}) {
    const [callback_filho1, setCallback_filho1] = useState(null)
    setCallback_pai(callback_filho1)


    const [campoSelecionado, setCampoSelecionado] = useState(campos[0])

    return (
        <div className={styles.main}>
        {
            campos.map((campo, i) => {
                if (campo[3] !== "_")
                    return <BotaoSelecionavel 
                        msg={campo} 
                        selecionado={campoSelecionado} 
                        setSelecionado={setCampoSelecionado} 
                        key={"campo" + (i+1)} 
                        setCallback_filho1={setCallback_filho1} 
                    />
                
            })
        }
        </div>
    )
}
export default CamposTabela;