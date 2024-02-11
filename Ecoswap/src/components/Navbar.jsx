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

  return (
    <>
      <div className="navbar">
        <div className="header-frame">
          <img draggable='false' className="sitelogo" loading="eager" alt="" src="/sitelogo.png" />
          <div className="title"><Link to="/">ECOSWAP</Link></div>
        </div>
        <div className="home-parent">
          <div className="home-nav"><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Home</Link></div>
          <div className="shop"><Link to="/shop" style={{ textDecoration: 'none', color: 'black' }}>Shop</Link></div>
          <div className="about"><Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>About</Link></div>
          <div className="contact"><Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>Contact</Link></div>
        </div>
        <div className="icon-nav">
          <Link to="/profile"><img draggable='false' className="icon-profile" loading="eager" alt="" src={profileicon} /></Link>
          <img draggable='false' className="icon-search" loading="eager" alt="" src="/icon-search.svg" />
          <img draggable='false' className="icon-heart" loading="eager" alt="" src="/icon-heart.svg" />
          <Link to="/cart" className='csbar' onClick={() => {
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
            <h3>Shopping Cart</h3>
            {(userdetails.cart && ogproducts.length > 0) ?
              userdetails.cart.map((ele, index) => {
                const p = findObjectById(ogproducts, ele);
                return (
                  <div className="nav-cart-item" key={index}>
                    <h4>{p.title}</h4>
                  </div>
                )
              }) : null
            }
          </div>
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
