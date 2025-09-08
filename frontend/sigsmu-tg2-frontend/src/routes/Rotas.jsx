import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TelaLogin from '../pages_containers/TelaLogin';
import TelaCadastro from '../pages_containers/TelaCadastro';

function Rotas() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<TelaLogin/>}/>
                <Route path='/TelaCadastro' element={<TelaCadastro/>}/>
                {/* <Route path='TelaLogin'/> */}
                
            </Routes>
        </Router>
    )
}
export default Rotas;