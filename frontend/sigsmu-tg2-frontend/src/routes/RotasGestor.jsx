// Importações de estilos
import styles from "./CSS/rotasgestor.module.css"

// Importações do React
import { Routes, Route } from "react-router-dom";

// Importações de telas do gestor
import Header from "../components/_maiores/gestor/Header";

import TelaInicio from "../pages_containers/telas-do-gestor/TelaInicio";
import TelaSolicitacoesServico from "../pages_containers/telas-do-gestor/TelaSolicitacoesServico";
import TelaBancoDeDados from "../pages_containers/telas-do-gestor/TelaBancoDeDados";
import TelaPermissoes from "../pages_containers/telas-do-gestor/TelaPermissoes";
import TelaHistorico from "../pages_containers/telas-do-gestor/TelaHistorico";

import TelaAlteracaoContrato from "../pages_containers/telas-do-gestor/_telas-de-opcoes/TelaAlteracaoContrato";
import TelaAtribuicaoAutomatica from "../pages_containers/telas-do-gestor/_telas-de-opcoes/TelaAtribuicaoAutomatica";
import TelaAtribuicaoManual from "../pages_containers/telas-do-gestor/_telas-de-opcoes/TelaAtribuicaoManual";
import TelaDeCustos from "../pages_containers/telas-do-gestor/_telas-de-opcoes/TelaDeCustos";
import TelaEnvioDevolutiva from "../pages_containers/telas-do-gestor/_telas-de-opcoes/TelaEnvioDevolutiva";


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

                <Route path="/AlteracaoContrato" element={<TelaAlteracaoContrato />} />
                <Route path="/Custos" element={<TelaDeCustos />} /> 
                <Route path="/AtribuicaoAutomatica" element={<TelaAtribuicaoAutomatica />} /> 
                <Route path="/AtribuicaoManual" element={<TelaAtribuicaoManual />} /> 
                <Route path="/Devolutiva" element={<TelaEnvioDevolutiva />} /> 
            </Routes>
         </div>
    )
}
export default RotasGestor;