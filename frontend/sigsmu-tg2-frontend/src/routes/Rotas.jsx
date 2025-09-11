import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Importação das Telas
import TelaDeTeste from '../pages_containers/TelaDeTelas';
import TelaLogin from '../pages_containers/TelaLogin';
import TelaCadastro from '../pages_containers/TelaCadastro';
import TelaCadastroItensGestor from '../pages_containers/TelaCadastroItensGestor';

// Importação das rotas específicas
import RotasGestor from './RotasGestor';

function Rotas() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<TelaDeTeste/>}/>
                <Route path='/TelaLogin' element={<TelaLogin/>}/>
                <Route path='/TelaCadastro' element={<TelaCadastro/>}/>
                <Route path='/TelaCadastroItensGestor' element={<TelaCadastroItensGestor/>}/>

                <Route path='/RotasGestor' element={<RotasGestor/>}/>
            </Routes>
        </Router>
    )
}
export default Rotas;