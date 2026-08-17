import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App1 from './App1.jsx'
import App2 from './App2.jsx'
import App3 from './App3.jsx'
import App4 from './App4_useeffect.jsx'
import Tab from './LinkedIntab.jsx'
import Todo from './todos.jsx'
import Cleanup from './cleanup_useeffect.jsx'
import Childrenapp from './childrenInReact.jsx'
import Listandkeysapp from './lists&keys.jsx'
import Errorapp from './errorBoundaries.jsx'
createRoot(document.getElementById('root')).render(
    // <App4/>
    // <Tab/>
    // <Cleanup />
     // <Childrenapp/>
    // <Listandkeysapp/>
    <Errorapp/>
)
