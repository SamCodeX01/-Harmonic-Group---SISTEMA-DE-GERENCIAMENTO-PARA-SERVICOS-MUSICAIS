// Importações do React
import { Routes, Route } from "react-router-dom";

// Importações de estilos
import styles from "./CSS/rotasgestor.module.css"

// Importações de telas do gestor
import TelaInicio from "../pages_containers/telas-do-gestor/TelaInicio";
import TelaSolicitacoesServico from "../pages_containers/telas-do-gestor/TelaSolicitacoesServico";
import TelaBancoDeDados from "../pages_containers/telas-do-gestor/TelaBancoDeDados";
import TelaPermissoes from "../pages_containers/telas-do-gestor/TelaPermissoes";
import TelaHistorico from "../pages_containers/telas-do-gestor/TelaHistorico";
import Header from "../components/cadastronobd/Header";


function RotasGestor() {
    return (
        <div className={styles.main}>
            <Header /> {/* COMPONENTE UTILIZADO EM TODAS AS TELAS DO GESTOR */}

            <Routes>
                <Route index element={<TelaInicio />} /> 

                <Route path="/Inicio" element={<TelaInicio />} />
                <Route path="/SolicitacoesServico" element={<TelaSolicitacoesServico />} />
                <Route path="/BancoDeDados" element={<TelaBancoDeDados />} />
                <Route path="/Permissoes" element={<TelaPermissoes />} />
                <Route path="/Historico" element={<TelaHistorico />} /> 
            </Routes>
         </div>
    )
}
export default RotasGestor;