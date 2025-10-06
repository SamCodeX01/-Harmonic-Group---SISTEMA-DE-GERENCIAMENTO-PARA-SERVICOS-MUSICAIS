import { useState } from 'react'

import RotasCliente from './routes/RotasCliente';
import Rotas from './routes/Rotas';


function App() {
    const [nomeRota, setNomeRota] = useState()
    
    return (
        // <RotasCliente nomeRota={nomeRota} setNomeRota={setNomeRota}/>   
        <Rotas/>
    )
}
export default App;