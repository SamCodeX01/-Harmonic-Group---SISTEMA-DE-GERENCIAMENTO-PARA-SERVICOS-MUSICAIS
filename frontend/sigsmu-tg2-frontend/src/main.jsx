import { StrictMode } from 'react'
import "./styles/global.css"

import { createRoot } from 'react-dom/client'
import Rotas from './routes/Rotas.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Rotas />

  </StrictMode>,
)
