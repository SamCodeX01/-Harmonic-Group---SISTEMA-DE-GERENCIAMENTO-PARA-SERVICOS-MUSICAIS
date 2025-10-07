// Importações de estilos
import rotas from "./CSS/rotas.module.css"

// Importações do React
import { Routes, Route } from "react-router-dom";

// Importações de telas do gestor
import T01_Header from "../pages_containers/telas-do-gestor/_telas-principais/T01_Header";

import T02_Inicio from "../pages_containers/telas-do-gestor/_telas-principais/T02_Inicio";
import T03_SolicitacoesServico from "../pages_containers/telas-do-gestor/_telas-principais/T03_SolicitacoesServico";
import T04_BancoDeDados from "../pages_containers/telas-do-gestor/_telas-principais/T04_BancoDeDados";
import T05_Permissoes from "../pages_containers/telas-do-gestor/_telas-principais/T05_Permissoes";
import T06_Historico from "../pages_containers/telas-do-gestor/_telas-principais/T06_Historico";

import TelaAlteracaoContrato from "../pages_containers/telas-do-gestor/telas-dos-botoes/TelaAlteracaoContrato";
import TelaAtribuicaoAutomatica from "../pages_containers/telas-do-gestor/telas-dos-botoes/TelaAtribuicaoAutomatica";
import TelaAtribuicaoManual from "../pages_containers/telas-do-gestor/telas-dos-botoes/TelaAtribuicaoManual";
import TelaDeCustos from "../pages_containers/telas-do-gestor/telas-dos-botoes/TelaDeCustos";
import TelaEnvioDevolutiva from "../pages_containers/telas-do-gestor/telas-dos-botoes/TelaEnvioDevolutiva";


function RotasGestor({nomeRota, setNomeRota}) {
    setNomeRota("gestor")

    return (
        <div className={rotas.main}>
            {/* {nomeRota === "gestor" && <T01_Header />} */}
                <Route index element={<T02_Inicio />} />

            <Routes>
                {/*                       Rotas Principais                       */}
                <Route path="Inicio" element={<T02_Inicio />} />
                <Route path="SolicitacoesServico" element={<T03_SolicitacoesServico />} />
                <Route path="BancoDeDados" element={<T04_BancoDeDados />} />
                <Route path="Permissoes" element={<T05_Permissoes />} />
                <Route path="Historico" element={<T06_Historico />} /> 
                
                {/*                    Rotas Opções do Gestor                    */}
                <Route path="AlteracaoContrato" element={<TelaAlteracaoContrato />} />
                <Route path="Custos" element={<TelaDeCustos />} /> 
                <Route path="AtribuicaoAutomatica" element={<TelaAtribuicaoAutomatica />} /> 
                <Route path="AtribuicaoManual" element={<TelaAtribuicaoManual />} /> 
                <Route path="Devolutiva" element={<TelaEnvioDevolutiva />} /> 
            </Routes>
         </div>
    )
}
export default RotasGestor;