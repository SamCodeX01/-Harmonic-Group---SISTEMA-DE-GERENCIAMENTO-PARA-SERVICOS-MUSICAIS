import { StrictMode } from 'react'
import "./styles/global.css"

import { createRoot } from 'react-dom/client'

// Importação das rotas
import Rotas from './routes/Rotas.jsx'
import Site from './pages_containers/Site.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    {/* <Site/> */}
    <Rotas />

  </StrictMode>,
)
