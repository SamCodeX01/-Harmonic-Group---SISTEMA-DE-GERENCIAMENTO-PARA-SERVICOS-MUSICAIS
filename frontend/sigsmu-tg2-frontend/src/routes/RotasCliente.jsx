// Importações de estilos
import css from "./CSS/rotas.module.css"

// Importações das telas
import TelaInicio from "../pages_containers/telas-do-cliente/_telas-principais/TelaInicio";
import TelaRepertorio from "../pages_containers/telas-do-cliente/_telas-principais/TelaRepertorio";

// Importações do React
import {Routes, Route} from "react-router-dom"


function RotasCliente() {
    return (
        <div className={css.main}>
            <Routes>
                <Route index element={<TelaRepertorio/>}/>
                
                {/*             Rotas Principais             */}
                <Route path="/Inicio/" element={<TelaInicio/>}/>
                <Route path="/Repertorio/" element={<TelaRepertorio/>}/>
            </Routes>
        </div>
    )
}
export default RotasCliente;