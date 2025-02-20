import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Kanban from './Page/Kanban'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Kanban />
  </StrictMode>,
)
