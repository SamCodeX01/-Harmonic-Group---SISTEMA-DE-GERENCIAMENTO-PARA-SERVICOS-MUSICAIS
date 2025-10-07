import { useState } from 'react'

import RotasCliente from './routes/RotasCliente';
import Rotas from './routes/Rotas';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"



function App() {
    return (
        // <RotasCliente nomeRota={nomeRota} setNomeRota={setNomeRota}/>   
        // <RotasCliente />   
        <Rotas/>
    )

    
}
export default App;