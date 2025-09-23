// Importações de estilos
import css from "./CSS/rotas.module.css"

// Importações do React
import { Routes, Route } from "react-router-dom";

// Importações de telas do gestor
import Header from "../pages_containers/telas-do-gestor/_telas-principais/Header";

import TelaInicio from "../pages_containers/telas-do-gestor/_telas-principais/TelaInicio";
import TelaSolicitacoesServico from "../pages_containers/telas-do-gestor/_telas-principais/TelaSolicitacoesServico";
import TelaBancoDeDados from "../pages_containers/telas-do-gestor/_telas-principais/TelaBancoDeDados";
import TelaPermissoes from "../pages_containers/telas-do-gestor/_telas-principais/TelaPermissoes";
import TelaHistorico from "../pages_containers/telas-do-gestor/_telas-principais/TelaHistorico";

import TelaAlteracaoContrato from "../pages_containers/telas-do-gestor/telas-dos-botoes/TelaAlteracaoContrato";
import TelaAtribuicaoAutomatica from "../pages_containers/telas-do-gestor/telas-dos-botoes/TelaAtribuicaoAutomatica";
import TelaAtribuicaoManual from "../pages_containers/telas-do-gestor/telas-dos-botoes/TelaAtribuicaoManual";
import TelaDeCustos from "../pages_containers/telas-do-gestor/telas-dos-botoes/TelaDeCustos";
import TelaEnvioDevolutiva from "../pages_containers/telas-do-gestor/telas-dos-botoes/TelaEnvioDevolutiva";


function RotasGestor() {
    return (
        <div className={css.main}>
            <Header /> {/* COMPONENTE UTILIZADO EM TODAS AS TELAS DO GESTOR */}

            <Routes>
                <Route index element={<TelaInicio />} /> 

                {/*                       Rotas Principais                       */}
                <Route path="/Inicio" element={<TelaInicio />} />
                <Route path="/SolicitacoesServico" element={<TelaSolicitacoesServico />} />
                <Route path="/BancoDeDados" element={<TelaBancoDeDados />} />
                <Route path="/Permissoes" element={<TelaPermissoes />} />
                <Route path="/Historico" element={<TelaHistorico />} /> 
                
                {/*                    Rotas Opções do Gestor                    */}
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