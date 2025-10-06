// Importações de estilos
import rotas from "./CSS/rotas.module.css"

// Importações das telas
import T01_Inicio from "../pages_containers/telas-do-cliente/_telas-principais/T01_Inicio";
import T03_Repertorio from "../pages_containers/telas-do-cliente/_telas-principais/T03_Repertorio";
import T02_Orcamento from "../pages_containers/telas-do-cliente/_telas-principais/T02_Orcamento";

// Importações do React
import {Routes, Route} from "react-router-dom"


function RotasCliente() {
    return (
        <div className={rotas.main}>
            <Routes>
                {/*             Rotas Principais             */}
                <Route path="/Repertorio/" element={<T03_Repertorio/>}/>
                <Route path="/Orcamento/" element={<T02_Orcamento/>}/>
            </Routes>
        </div>
    )
}
export default RotasCliente;