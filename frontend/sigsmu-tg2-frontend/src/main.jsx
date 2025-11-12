// Importação do estilo global
import "./styles/global.css"

// Importações de componentes
import App from './App.jsx'

// Importações do React
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <App/>

  </StrictMode>,
)
