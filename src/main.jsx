import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Context from './Context/Context.jsx'
import 'react-quill/dist/quill.bubble.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <Context>
        <App />
     </Context>
    </BrowserRouter>
  </React.StrictMode>
);