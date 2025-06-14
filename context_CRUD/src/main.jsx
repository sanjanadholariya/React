import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import CrudProvider from './context/CrudProvider.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CrudProvider>
      <App />
    </CrudProvider>
  </BrowserRouter>
)
