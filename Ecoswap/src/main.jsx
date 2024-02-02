import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'
import Cart from './Cart.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/'element={<App/>}/>
      <Route path='/*'element={<p>No route found here</p>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/contact' element={<Cart/>}/>
      <Route path='/checkout' element={<Cart/>}/>
    </Routes>
  </BrowserRouter>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
)
