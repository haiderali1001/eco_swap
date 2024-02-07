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
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/'element={<App/>}/>
      <Route path='/*'element={<p>No route found here</p>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/checkout' element={<Cart/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/profile' element={<Register/>}/>
      <Route path='/shop' element={<Shop/>}/>
    </Routes>
  </BrowserRouter>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
)
