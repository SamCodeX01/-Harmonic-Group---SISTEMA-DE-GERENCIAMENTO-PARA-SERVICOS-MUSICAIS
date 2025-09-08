import { StrictMode } from 'react'
import "./styles/globalStyles.css"

import { createRoot } from 'react-dom/client'
import Rotas from './routes/Rotas.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Rotas/>

    {/* <App/> Fazer Depois */}
  </StrictMode>,
)
