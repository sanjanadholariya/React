import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Provider } from 'react-redux'
import Store from './redux/Store.js'


createRoot(document.getElementById('root')).render(
 
   <Provider store={Store}>
     <App />
   </Provider>
 
)
