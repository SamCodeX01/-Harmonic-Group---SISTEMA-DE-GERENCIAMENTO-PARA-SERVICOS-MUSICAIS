import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Importação das Telas
import TelaDeTeste from '../pages_containers/Outras/TelaDeTelas';
import TelaLogin from '../pages_containers/Outras/TelaLogin';
import TelaCadastro from '../pages_containers/Outras/TelaCadastro';

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