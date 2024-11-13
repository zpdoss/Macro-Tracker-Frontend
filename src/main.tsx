import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import {BrowserRouter} from 'react-router-dom';

import './index copy.css'
import App from './App.tsx'
//import NavBar from './NavBar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
      <App />

  </StrictMode>,
)
