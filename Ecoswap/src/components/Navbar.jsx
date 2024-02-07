import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useRef } from 'react';
import { useState, useEffect } from 'react';
// import { slide as Menu } from 'react-burger-menu'

// class Example extends React.Component {
//   showSettings (event) {
//     event.preventDefault();
//   }}


function Navbar() {
  const myRef = useRef(null);
  const [visibility, setVisibility] = useState("invisible");
  const [sidemenusrc, setSidemenusrc] = useState("/burger-icon.svg");

  // function handleClick() {
  //   myRef.style
  // }

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
          <Link to="/profile"><img draggable='false' className="icon-profile" loading="eager" alt="" src="/icon-profile.svg" /></Link>
          <img draggable='false' className="icon-search" loading="eager" alt="" src="/icon-search.svg" />
          <img draggable='false' className="icon-heart" loading="eager" alt="" src="/icon-heart.svg" />
          <Link to="/cart"><img draggable='false' className="icon-cart" loading="eager" alt="" src="/icon-cart.svg" /></Link>
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
        <div className={"side-bar " + visibility} >
          <div className="home-nav"><Link to="/" onClick={()=>{setVisibility("invisible");}} style={{ textDecoration: 'none', color: 'black' }}>Home</Link></div>
          <div className="shop"><Link to="/shop" style={{ textDecoration: 'none', color: 'black' }}>Shop</Link></div>
          <div className="about"><Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>About</Link></div>
          <div className="contact"><Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>Contact</Link></div>
        </div>
      </div>
    </>
  )
}

export default Navbar;
