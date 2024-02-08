import { useState } from 'react'
import './App.css'
import Home from './Home'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'
import Cart from './components/Cart.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import Shop from './components/Shop.jsx'
import Login from './components/login/Login.jsx'
import Register from './components/login/Register.jsx'

function App() {
  const [count, setCount] = useState(0);
  const [profilesrc, setProfilesrc] = useState("/icon-profile.svg");
  const [loggedin, setLoggedin] = useState(true);

  function changeprofileicon (){
    setProfilesrc('./icon-profile-loggedin.svg');
  }

  return (
    <><BrowserRouter>
    <Navbar profileicon={profilesrc} />
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/*'element={<p>No route found here</p>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/checkout' element={<Cart/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/profile' element={<Register change={changeprofileicon}/>}/>
      <Route path='/shop' element={<Shop/>}/>
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
