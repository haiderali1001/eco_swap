import { useState, useEffect } from 'react'
import './App.css'
import Home from './Home'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Cart from './components/Cart.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import Shop from './components/Shop.jsx'
import Login from './components/login/Login.jsx'
import Register from './components/login/Register.jsx'
import { ToastContainer, toast } from "react-toastify";
import axios from 'axios'
import Profile from './components/login/Profile.jsx'

// const baseURL = "http://localhost:3000"
const baseURL = "https://mystiqueapi.onrender.com/";

function App() {
  const [profilesrc, setProfilesrc] = useState("/icon-profile.svg");
  const [userdetails, setUserdetails] = useState({});
  const [ogproducts, setOgproducts] = useState([]);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Generate random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements at i and j
    }
    return array;
  }

  useEffect(() => {
    const token = localStorage.getItem('logintoken');
    // console.log(`bhoi m hu token = ${token}`);
    if (!(token) || token == "null") return;
    // console.log("object")
    axios.post(`${baseURL}/logintoken`, { "logintoken": token })
      .then((res) => {
        console.log(res.data.success);
        //res.data.token res.data.userid res.data.username res.data.cart res.data.email
        setUserdetails({ userid: res.data.userid, cart: res.data.cart, username: res.data.username, email: res.data.email });
        // console.log(res.data.userid,res.data.username, res.data.cart);
        toast.success("Logged-in Successfully!");
        changeprofileicon();
        // setTimeout(goHome, 5000);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  React.useEffect(() => {
    axios.get(`${baseURL}/products`).then((res) => {
      var productList = res.data;
      productList = shuffleArray(productList);
      setOgproducts(productList);
      // post.map((ele) => {
      //   console.log(ele.title);
      // })
    });
  }, []);

  function changeprofileicon() {
    setProfilesrc('./icon-profile-loggedin.svg');
  }
  function changeprofileiconlgout() {
    setProfilesrc('./icon-profile.svg');
  }

  return (
    <>
      <BrowserRouter>
        <ToastContainer autoClose={1800} />
        <Navbar profileicon={profilesrc} userdetails={userdetails} ogproducts={ogproducts} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/*' element={<p>No route found here</p>} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/checkout' element={<Cart />} />
          <Route path='/about' element={<About />} />
          <Route path='/profile' element={(userdetails.userid != null) ? <Profile change={(changeprofileiconlgout)} userdetails={userdetails} setUserdetails={setUserdetails} /> : <Login change={changeprofileicon} userdetails={userdetails} setUserdetails={setUserdetails} />} />
          <Route path='/shop' element={<Shop userdetails={userdetails} ogproducts={ogproducts} />} />
          <Route path='/register' element={<Register change={changeprofileicon} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
