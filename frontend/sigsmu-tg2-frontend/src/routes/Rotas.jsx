// Importações do React
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

//Teste apagar depois
import T00_ChatBot from '../site_do_sistema/components_site/T00_ChatBot.jsx';

// Rotas do Cliente (rota inicial)
import Site from '../site_do_sistema/Site.jsx';
import T01_HeaderCliente from '../site_do_sistema/components_site/T01_Header.jsx';
import T01_Inicio from "../pages_containers/telas-do-cliente/_telas-principais/T01_Inicio";
import T02_Orcamento from "../pages_containers/telas-do-cliente/_telas-principais/T02_Orcamento";
import T03_Repertorio from "../pages_containers/telas-do-cliente/_telas-principais/T03_Repertorio";


// Rotas Intranet
import T01_Login from '../pages_containers/telas-geral/T01_Login.jsx';
import T02_Cadastro from '../pages_containers/telas-geral/T02_Cadastro.jsx';
import T03_Poslogin from '../pages_containers/telas-geral/T03_Poslogin.jsx';


// Rotas do Gestor
import T01_HeaderGestor from '../pages_containers/telas-do-gestor/_telas-principais/T01_Header.jsx';
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


// Salvador de vidas - amo o useLocation(☺)
function ConfigurarHeader() {
    const location = useLocation()
    const path = location.pathname
    const nomeRota = path.split("/").filter(Boolean)

    if (nomeRota[0] !== "Intranet")
        return <T01_HeaderCliente/>
    else if (nomeRota[1] === "RotasGestor")
        return <T01_HeaderGestor/>
}


function Rotas() {
    return (
        <Router>
            <ConfigurarHeader/>

            <Routes> 
                {/*               ROTAS DO CLIENTE               */}
                <Route path='/'           element={<T00_ChatBot/>}/>
                {/* <Route path='/'           element={<Site/>}/> */}
                <Route path='/Inicio'     element={<Site/>}/>

                <Route path="/Orcamento"  element={<T02_Orcamento/>}/>
                <Route path="/Repertorio" element={<T03_Repertorio/>}/>


                {/*                     ROTAS INTRANET                     */}
                <Route path='/Intranet/TelaLogin'    element={<T01_Login/>}/>
                <Route path='/Intranet/TelaCadastro' element={<T02_Cadastro/>}/>
                <Route path='/Intranet/TelaPosLogin' element={<T03_Poslogin/>}/>


                {/*                         ROTAS DO GESTOR                         */}
                <Route path="/Intranet/RotasGestor/Inicio"              element={<T02_Inicio />} />
                <Route path="/Intranet/RotasGestor/SolicitacoesServico" element={<T03_SolicitacoesServico />} />
                <Route path="/Intranet/RotasGestor/BancoDeDados"        element={<T04_BancoDeDados />} />
                <Route path="/Intranet/RotasGestor/Permissoes"          element={<T05_Permissoes />} />
                <Route path="/Intranet/RotasGestor/Historico"           element={<T06_Historico />} /> 
                
                {/*                    Rotas das Opções do Gestor                    */}
                <Route path="/Intranet/RotasGestor/SolicitacoesServico/AlteracaoContrato"    element={<TelaAlteracaoContrato />} />
                <Route path="/Intranet/RotasGestor/SolicitacoesServico/Custos"               element={<TelaDeCustos />} /> 
                <Route path="/Intranet/RotasGestor/SolicitacoesServico/AtribuicaoAutomatica" element={<TelaAtribuicaoAutomatica />} /> 
                <Route path="/Intranet/RotasGestor/SolicitacoesServico/AtribuicaoManual"     element={<TelaAtribuicaoManual />} /> 
                <Route path="/Intranet/RotasGestor/SolicitacoesServico/Devolutiva"           element={<TelaEnvioDevolutiva />} /> 
            </Routes>
        </Router>
    )
}
export default Rotas;