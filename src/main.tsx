import { BrowserRouter } from "react-router";
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

// Import our custom CSS
import './scss/styles.scss'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
