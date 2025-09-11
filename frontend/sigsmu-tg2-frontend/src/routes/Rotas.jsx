import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TelaLogin from '../pages_containers/TelaLogin';
import TelaCadastro from '../pages_containers/TelaCadastro';
import TelaCadastroItensGestor from '../pages_containers/TelaCadastroItensGestor';

import TelaDeTeste from '../pages_containers/TelaDeTelas';

function Rotas() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<TelaDeTeste/>}/>
                <Route path='/TelaCadastro' element={<TelaCadastro/>}/>
                <Route path='/TelaLogin' element={<TelaLogin/>}/>
                <Route path='/TelaCadastroItensGestor' element={<TelaCadastroItensGestor/>}/>
            </Routes>
        </Router>
    )
}
export default Rotas;