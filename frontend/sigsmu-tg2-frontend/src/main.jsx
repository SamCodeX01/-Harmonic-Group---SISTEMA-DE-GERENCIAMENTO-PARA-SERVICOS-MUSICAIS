import { StrictMode } from 'react'
import "./styles/globalStyles.css"

import { createRoot } from 'react-dom/client'
import TelaLogin from './pages_containers/TelaLogin'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TelaLogin/>
    {/* <App/> Fazer Depois */}
  </StrictMode>,
)
