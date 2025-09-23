// Importações de estilo
import css from "./CSS/campostabela.module.css"
// import buttoncss from "../forms/CSS/botaoselecionavel.module.css"

// Importações de componentes
// import BotaoSelecionavel from "../forms/BotaoSelecionavel";
import { useState } from "react";


// Componente que retorna todos os campos de uma tabela do banco de dados
function CamposTabela({campos, callback}) {
    const [callback2, setCallback2] = useState(null)
    callback(callback2)


    const [campoSelecionado, setCampoSelecionado] = useState(campos[0])

    return (
        <div className={css.main}>
        {
            // campos.map((campo, i) => {

            //     if (campo[3] !== "_")
            //         return <BotaoSelecionavel 
            //             msg={campo}
            //             selecionado={campoSelecionado} 
            //             setSelecionado={setCampoSelecionado} 
            //             key={"campo" + (i+1)} 

            //             callback={setCallback2}
            //         />
            // })
        }
        </div>
    )
}
export default CamposTabela;