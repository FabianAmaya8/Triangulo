import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import PiedePagina from './components/Fijos/footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

createRoot(document.getElementById('footer')).render(
  <StrictMode>
    <PiedePagina/>
  </StrictMode>
)