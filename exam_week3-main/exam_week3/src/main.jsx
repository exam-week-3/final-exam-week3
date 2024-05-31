import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from "react-redux"; 
import store from "./store/store.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> 
    <Router>
      <App />
    </Router>
    </Provider> 
  </React.StrictMode>,
)
