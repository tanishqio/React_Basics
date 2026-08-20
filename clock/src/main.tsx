import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { App2 } from './topbutton.tsx'
import { Todos } from './todo.tsx'

createRoot(document.getElementById('root')!).render(
  
    <Todos />
  
)
