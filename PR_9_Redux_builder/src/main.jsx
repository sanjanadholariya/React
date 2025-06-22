import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import Store from './redux/store.js'

  import "bootstrap/dist/js/bootstrap.bundle.min.js"
  import "bootstrap/dist/css/bootstrap.min.css"

createRoot(document.getElementById('root')).render(
   <Provider store={Store}>
     <App />
   </Provider>
)
