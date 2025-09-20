// Importações de estilos
import styles from "./CSS/telainicio.module.css"

// Importações de componentes
import BotaoSimples from "../../components/forms/BotaoSimples";
import Radio from "../../components/forms/Radio";

// Importações do React
import { useState } from "react";


// Tela de INÍCIO - para auxiliar o gestor com gráficos e análises de desempenho relativos a qualidade dos serviços prestados
function TelaInicio() {
    const [selecionado, setSelecionado] = useState("ibutton0")

    return (
        <div className={styles.main}>
            
            <Radio selecionado={selecionado} setSelecionado={setSelecionado} name={"button"} grupo={1}>
                <BotaoSimples
                    msg={"TESTE1"}
                    estilo={false}
                    value={8}
                />

                <BotaoSimples
                    msg={"TESTE2"}
                    estilo={false}
                    value={16}
                />
            </Radio>

        </div>
    )
}
export default TelaInicio;