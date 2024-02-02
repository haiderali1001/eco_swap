import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div className="navbar">
            <div className="header-frame">
              <img  className="sitelogo"  loading="eager"  alt=""  src="/sitelogo2.png"/>
              <div className="title"><Link to="/">ECOSWAP</Link></div>
            </div>
            <div className="home-parent">
              <div className="home-nav"><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Home</Link></div>
              <div className="shop"><Link to="/shop" style={{ textDecoration: 'none', color: 'black' }}>Shop</Link></div>
              <div className="about"><Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>About</Link></div>
              <div className="contact"><Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>Contact</Link></div>
            </div>
            <div className="icon-nav">
              <img  className="icon-profile"  loading="eager"  alt=""  src="/icon-profile.svg"/>
              <img  className="icon-search"  loading="eager"  alt=""  src="/icon-search.svg"/>
              <img className="icon-heart"  loading="eager"  alt=""  src="/icon-heart.svg"/>
              <Link to="/cart"><img  className="icon-cart"  loading="eager"  alt=""  src="/icon-cart.svg"/></Link>
            </div>
        </div>
    </>
  )
}

export default Navbar;
