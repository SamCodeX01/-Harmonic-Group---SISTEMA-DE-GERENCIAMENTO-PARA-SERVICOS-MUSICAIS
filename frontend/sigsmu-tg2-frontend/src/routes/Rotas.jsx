import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Importações das telas
import TelaLogin from '../pages_containers/telas-geral/TelaLogin';
import TelaCadastro from '../pages_containers/telas-geral/TelaCadastro.jsx';
import TelaPosLogin from '../pages_containers/telas-geral/TelaPosLogin';

// Importações de rotas específicas
import RotasGestor from './RotasGestor.jsx';
import RotasCliente from './RotasCliente.jsx';
// import Site from '../site_do_sistema/Site.jsx';
import Site from '../site_do_sistema/Site.jsx';

function Rotas() {
    return (
        <Router>
            <Routes>
                <Route index element={<Site/>}/>
                
                {/*                   Rotas Gerais                  */}
                <Route path='/TelaLogin/'     element={ <TelaLogin/>  }/>
                <Route path='/TelaCadastro/'  element={<TelaCadastro/>}/>
                <Route path='/TelaPosLogin/'  element={<TelaPosLogin/>}/>

                {/*                Rotas de Usuários                */}
                <Route path='/RotasGestor/*'  element={<RotasGestor />}/>
                <Route path='/RotasCliente/*' element={<RotasCliente />}/>
            </Routes>
        </Router>
    )
}
export default Rotas;