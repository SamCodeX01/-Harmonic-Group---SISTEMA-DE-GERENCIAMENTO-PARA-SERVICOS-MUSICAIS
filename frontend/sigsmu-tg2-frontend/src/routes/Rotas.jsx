import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Importação das Telas
import TelaDeTeste from '../pages_containers/TelaDeTelas.jsx';
import TelaLogin from '../pages_containers/TelaLogin.jsx';
import TelaCadastro from '../pages_containers/TelaCadastro.jsx';

// Importação das rotas específicas
import RotasGestor from './RotasGestor.jsx';

function Rotas() {
    return (
        <Router>
            <Routes>
                <Route index element={<TelaDeTeste/>}/>
                
                <Route path='/TelaLogin/' element={<TelaLogin/>}/>
                <Route path='/TelaCadastro/' element={<TelaCadastro/>}/>

                {/* Rotas de Usuários */}
                <Route path='/RotasGestor/*' element={<RotasGestor />}/>
            </Routes>
        </Router>
    )
}
export default Rotas;