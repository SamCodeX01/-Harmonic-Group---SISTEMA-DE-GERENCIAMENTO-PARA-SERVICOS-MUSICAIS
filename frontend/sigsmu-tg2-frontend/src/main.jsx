// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { StrictMode } from 'react'
import "./styles/global.css"

import { createRoot } from 'react-dom/client'

import Rotas from './routes/Rotas.jsx'
// import RotasGestor from './routes/RotasGestor.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Rotas />
    {/* <RotasGestor /> */}

  </StrictMode>,
)
