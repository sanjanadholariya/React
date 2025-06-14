import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import CounterProvider from './contex/CounterProvider.jsx'

createRoot(document.getElementById('root')).render(
  
    <CounterProvider>
      <App />
    </CounterProvider>
)
