// Importações das telas
import Site from '../site_do_sistema/Site.jsx';
import T01_Login from '../pages_containers/telas-geral/T01_Login.jsx';
import T02_Cadastro from '../pages_containers/telas-geral/T02_Cadastro.jsx';
import T03_Poslogin from '../pages_containers/telas-geral/T03_Poslogin.jsx';

// Importações de rotas específicas
import RotasGestor from './RotasGestor.jsx';
import RotasCliente from './RotasCliente.jsx';




// Importações do React
import { Routes, Route } from 'react-router-dom'


function RotaIntranet({nomeRota, setNomeRota}) {
    // setNomeRota("intranet")

    return (
            <Routes>
                <Route index element={<T01_Login/>}/>
                
                {/*                   Rotas Gerais                  */}
                <Route path='/TelaLogin'     element={ <T01_Login/>  }/>
                <Route path='/TelaCadastro'  element={<T02_Cadastro/>}/>
                <Route path='/TelaPosLogin'  element={<T03_Poslogin/>}/>

                {/*                Rotas de Usuários                */}
                {/* <Route path='/RotasGestor/*'  element={<RotasGestor nomeRota={nomeRota} setNomeRota={setNomeRota}>
                    <Route path="/Inicio" element={<T02_Inicio />} />
                </Route>}/> */}
                {/* <Route path='/RotasCliente/*' element={<RotasCliente />}/> */}
            </Routes>


    )
}
export default RotaIntranet;