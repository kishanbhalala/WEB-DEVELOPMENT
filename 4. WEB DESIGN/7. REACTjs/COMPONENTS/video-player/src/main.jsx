import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import CounterApp from './counterApp/CounterApp.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <CounterApp/>
  </React.StrictMode>,
)
