import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Rotas do cliente (rota inicial)
import Site from '../site_do_sistema/Site.jsx';
import T01_HeaderCliente from '../site_do_sistema/components_site/T01_Header.jsx';
import RotaIntranet from "./RotaIntranet.jsx";

// Rotas Intranet
import T01_Login from '../pages_containers/telas-geral/T01_Login.jsx';
import T02_Cadastro from '../pages_containers/telas-geral/T02_Cadastro.jsx';
import T03_Poslogin from '../pages_containers/telas-geral/T03_Poslogin.jsx';

// Rotas do gestor
import T02_Inicio from "../pages_containers/telas-do-gestor/_telas-principais/T02_Inicio";


function Rotas() {
    return (
        <Router>

            <T01_HeaderCliente/>

            <Routes>
                <Route index element={<Site/>}/>
                <Route path='/Inicio'        element={ <Site/>  }/>

                <Route path="/Intranet/*"  element={<RotaIntranet/>}>

                    {/* <Routes> */}
                        <Route path='TelaLogin'     element={ <T01_Login/>  }/>
                        <Route path='TelaCadastro'  element={<T02_Cadastro/>}/>
                        <Route path='TelaPosLogin'  element={<T03_Poslogin/>}/>

                        <Route path='RotasGestor/*'>
                            <Route path="Inicio" element={<T02_Inicio />} />
                        </Route>
                    {/* </Routes> */}

                </Route>
            </Routes>

        </Router>
    )
}
export default Rotas;