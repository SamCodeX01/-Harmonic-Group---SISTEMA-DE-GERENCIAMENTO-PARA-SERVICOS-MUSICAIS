import { Routes, Route } from "react-router-dom";

// Importação das telas do gestor
import Inicio from "../pages_containers/Telas do Gestor/Inicio";
import SolicitacoesServico from "../pages_containers/Telas do Gestor/SolicitacoesServico";
import BancoDeDados from "../pages_containers/Telas do Gestor/BancoDeDados";
import Permissoes from "../pages_containers/Telas do Gestor/Permissoes";
import Historico from "../pages_containers/Telas do Gestor/Historico";
import Header from "../components/cadastronobd/Header";

function RotasGestor() {
    return (
        <>
            <Header />
            <Routes>
                {/* equivale a /RotasGestor */}
                <Route index element={<Inicio />} /> 

                <Route path="/Inicio" element={<Inicio />} />
                <Route path="/SolicitacoesServico" element={<SolicitacoesServico />} />
                <Route path="/BancoDeDados" element={<BancoDeDados />} />
                <Route path="/Permissoes" element={<Permissoes />} />
                <Route path="/Historico" element={<Historico />} /> 
            </Routes>
         </>
    )
}
export default RotasGestor;