// Importações de estilos
import css from "./CSS/rotas.module.css"

// Importações das telas
import TelaInicio from "../pages_containers/telas-do-cliente/_telas-principais/TelaInicio";
import TelaRepertorio from "../pages_containers/telas-do-cliente/_telas-principais/TelaRepertorio";
import TelaOrcamento from "../pages_containers/telas-do-cliente/_telas-principais/TelaOrcamento";

// Importações do React
import {Routes, Route} from "react-router-dom"


function RotasCliente() {
    return (
        <div className={css.main}>
            <Routes>
                <Route index element={<TelaOrcamento/>}/>
                
                {/*             Rotas Principais             */}
                <Route path="/Inicio/" element={<TelaInicio/>}/>
                <Route path="/Repertorio/" element={<TelaRepertorio/>}/>
                <Route path="/Orcamento/" element={<TelaOrcamento/>}/>
            </Routes>
        </div>
    )
}
export default RotasCliente;