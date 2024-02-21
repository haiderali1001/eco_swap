import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useRef } from 'react';
import { useState, useEffect } from 'react';

function Navbar({ profileicon, userdetails, ogproducts }) {
  const myRef = useRef(null);
  const [visibility, setVisibility] = useState("invisible");
  const [sidemenusrc, setSidemenusrc] = useState("/burger-icon.svg");
  const [cbvisible, setCbvisible] = useState("cb-invisible");
  const [carticonsrc, setCarticonsrc] = useState("/icon-cart.svg");


  function findObjectById(objects, id) {
    return objects.find(obj => obj._id === id);
}

  function handleClick() {
    setVisibility("invisible");
    setSidemenusrc("/burger-icon.svg");
  }
  function allClear(){
    setVisibility("invisible");
    setCbvisible("cb-invisible");
    setCarticonsrc("/icon-cart.svg");
  }

  return (
    <>
      <div className="navbar">
        <div className="header-frame">
          <img draggable='false' className="sitelogo" loading="eager" alt="" src="/sitelogo.png" />
          <div className="title"><Link to="/">ECOSWAP</Link></div>
        </div>
        <div className="home-parent">
          <div className="home-nav"><Link to="/" onClick={allClear} style={{ textDecoration: 'none', color: 'black' }}>Home</Link></div>
          <div className="shop"><Link to="/shop" onClick={allClear} style={{ textDecoration: 'none', color: 'black' }}>Shop</Link></div>
          <div className="about"><Link to="/about" onClick={allClear} style={{ textDecoration: 'none', color: 'black' }}>About</Link></div>
          <div className="contact"><Link to="/contact" onClick={allClear} style={{ textDecoration: 'none', color: 'black' }}>Contact</Link></div>
        </div>
        <div className="icon-nav">
          <Link to="/profile"><img draggable='false' className="icon-profile" loading="eager" alt="" src={profileicon} /></Link>
          <img draggable='false' className="icon-search" loading="eager" alt="" src="/icon-search.svg" />
          <img draggable='false' className="icon-heart" loading="eager" alt="" src="/icon-heart.svg" />
          <Link  className='csbar' onClick={() => {
            if (cbvisible === "cb-invisible") {
              setCbvisible("cb-visible");
              setCarticonsrc("/cart-close.svg");
            }
            else {
              setCbvisible("cb-invisible");
              setCarticonsrc("/icon-cart.svg");
            }
          }}><img draggable='false' className="icon-cart" loading="eager" alt="" src={carticonsrc} /></Link>
          <button className='side-menu-btn' style={{ backgroundColor: 'transparent', border: 'none', outline: 'none' }} onClick={() => {
            if (visibility === "invisible") {
              setVisibility("visibile");
              setSidemenusrc("/cross-icon.svg");
            }
            else {
              setVisibility("invisible");
              setSidemenusrc("/burger-icon.svg");
            }
          }}>
            <img draggable='false' className="side-menu" loading="eager" alt="" src={sidemenusrc} />
          </button>
        </div>
        <div className={`cart-sidebar ${cbvisible}`}>
          <div className="cbar-title">
            <h2>Shopping Cart</h2>
          </div>
          <div className="cart-items-sidebar">
          {(userdetails.cart && ogproducts.length > 0) ?
              userdetails.cart.map((ele, index) => {
                const p = findObjectById(ogproducts, ele);
                return (
                  <div className="nav-cart-item" key={index}>
                    <img src={p.image}></img>
                    <h4>{p.title}</h4>
                    <button>  <svg width="28" className='ant-designdelete-filled-icon' height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.625 7H20.125V4.8125C20.125 3.84727 19.3402 3.0625 18.375 3.0625H9.625C8.65977 3.0625 7.875 3.84727 7.875 4.8125V7H4.375C3.89102 7 3.5 7.39102 3.5 7.875V8.75C3.5 8.87031 3.59844 8.96875 3.71875 8.96875H5.37031L6.0457 23.2695C6.08945 24.202 6.86055 24.9375 7.79297 24.9375H20.207C21.1422 24.9375 21.9105 24.2047 21.9543 23.2695L22.6297 8.96875H24.2812C24.4016 8.96875 24.5 8.87031 24.5 8.75V7.875C24.5 7.39102 24.109 7 23.625 7ZM18.1562 7H9.84375V5.03125H18.1562V7Z" fill="#B88E2F" />
                    </svg></button>
                  </div>
                )
              }) : null
            }
          </div>
          <div className="cart-link"><Link to="/cart" onClick={()=>{
             setCbvisible("cb-invisible");
             setCarticonsrc("/icon-cart.svg");
          }} style={{ textDecoration: 'none', color: 'black' }}>Cart</Link></div>
        </div>
        <div className={"side-bar " + visibility} >
          <div className="home-nav"><Link to="/" onClick={handleClick} style={{ textDecoration: 'none', color: 'black' }}>Home</Link></div>
          <div className="shop"><Link to="/shop" onClick={handleClick} style={{ textDecoration: 'none', color: 'black' }}>Shop</Link></div>
          <div className="about"><Link to="/about" onClick={handleClick} style={{ textDecoration: 'none', color: 'black' }}>About</Link></div>
          <div className="contact"><Link to="/contact" onClick={handleClick} style={{ textDecoration: 'none', color: 'black' }}>Contact</Link></div>
        </div>
      </div>
    </>
  )
}

export default Navbar;
