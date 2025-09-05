import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TelaLogin from './pages_containers/TelaLogin'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TelaLogin />
  </StrictMode>,
)
