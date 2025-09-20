// Importações do React
import { Routes, Route } from "react-router-dom";

// Importações de estilos
import styles from "./CSS/rotasgestor.module.css"

// Importações de telas do gestor
import TelaInicio from "../pages_containers/Telas do Gestor/TelaInicio";
import TelaSolicitacoesServico from "../pages_containers/Telas do Gestor/TelaSolicitacoesServico";
import TelaBancoDeDados from "../pages_containers/Telas do Gestor/TelaBancoDeDados";
import TelaPermissoes from "../pages_containers/Telas do Gestor/TelaPermissoes";
import TelaHistorico from "../pages_containers/Telas do Gestor/TelaHistorico";
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