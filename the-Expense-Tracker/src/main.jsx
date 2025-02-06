import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Provider} from 'react-redux'
import App from './App.jsx'
import { store } from './store/store';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import TransactionForm from './components/TransactionForm.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
<BrowserRouter>
     <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/add' element={<TransactionForm/>}/>
    
    </Routes>
    </BrowserRouter>
    </Provider>
    
  </StrictMode>,
)
