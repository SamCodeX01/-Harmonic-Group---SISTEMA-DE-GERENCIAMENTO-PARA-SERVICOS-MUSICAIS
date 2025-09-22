// Importações do React
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Importações das telas
import TelaDeTeste from '../pages_containers/TelaDeTelas';
import TelaLogin from '../pages_containers/Outras/TelaLogin';
import TelaCadastro from '../pages_containers/Outras/TelaCadastro';

// Importações de rotas específicas
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