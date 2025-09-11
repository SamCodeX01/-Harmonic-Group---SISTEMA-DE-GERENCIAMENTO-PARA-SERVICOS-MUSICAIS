// Importação das telas do gestor
import Botao from "../components/forms/Botao";
import Inicio from "../pages_containers/Telas do Gestor/Inicio";
import SolicitacoesServico from "../pages_containers/Telas do Gestor/SolicitacoesServico";
// import BancoDeDados from "../pages_containers/Telas do Gestor/BancoDeDados";
// import Permissoes from "../pages_containers/Telas do Gestor/Permissoes";
// import Historico from "../pages_containers/Telas do Gestor/Historico";
// import Header from "../components/cadastronobd/Header";

import { Routes, Route, useNavigate } from "react-router-dom";

function RotasGestor() {
    const navigate = useNavigate();

    return (
        // <Router>
        //     {/* Chama o header para todas as telas do gestor */}
            <>
             <Routes>
                 {/* <Header /> */}
                 <Route path="/" element={<Inicio />} />
                 {/* <Route path="/Inicio" element={<Inicio />} /> */}
                 <Route path="/SolicitacoesServico" element={<SolicitacoesServico />} />
                 {/* <Route path="/BancoDeDados" element={<BancoDeDados />} />
                 <Route path="/Permissoes" element={<Permissoes />} />
                 <Route path="/Historico" element={<Historico />} />  */}
             </Routes>
                 <Botao msg={"ffff"} rota={ () =>  navigate( "/SolicitacoesServico") }/>
         {/* </Router>  */}
         </>

        // <>
        //     fdsf
        // </>
    )
}
export default RotasGestor;