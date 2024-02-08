import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'
import Cart from './components/Cart.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import Shop from './components/Shop.jsx'
import Login from './components/login/Login.jsx'
import Register from './components/login/Register.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
