// Importações do React
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Importações das telas
import TelaLogin from '../pages_containers/telas-geral/TelaLogin';
import TelaCadastro from '../pages_containers/telas-geral/TelaCadastro';

import TelaPosLogin from '../pages_containers/telas-geral/TelaPosLogin';

// Importações de rotas específicas
import RotasGestor from './RotasGestor.jsx';


function Rotas() {
    return (
        <Router>
            <Routes>
                <Route index element={<TelaLogin/>}/>
                
                {/*                   Rotas Gerais                  */}
                <Route path='/TelaLogin/'    element={ <TelaLogin/>  }/>
                <Route path='/TelaCadastro/' element={<TelaCadastro/>}/>
                <Route path='/TelaPosLogin/' element={<TelaPosLogin/>}/>

                {/*                Rotas de Usuários                */}
                <Route path='/RotasGestor/*' element={<RotasGestor />}/>
            </Routes>
        </Router>
    )
}
export default Rotas;