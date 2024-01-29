import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div className="navbar">
            <div className="header-frame">
              <img  className="sitelogo"  loading="eager"  alt=""  src="/sitelogo.png"/>
              <div className="title"><Link to="/">ECOSWAP</Link></div>
            </div>
            <div className="home-parent">
              <div className="home"><Link to="/home" style={{ textDecoration: 'none', color: 'black' }}>Home</Link></div>
              <div className="shop"><Link to="/shop" style={{ textDecoration: 'none', color: 'black' }}>Shop</Link></div>
              <div className="about"><Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>About</Link></div>
              <div className="contact"><Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>Contact</Link></div>
            </div>
            <div className="icon-nav">
              <img  className="mdiaccount-alert-outline-icon"  loading="eager"  alt=""  src="/mdiaccountalertoutline.svg"/>
              <img  className="akar-iconssearch"  loading="eager"  alt=""  src="/akariconssearch.svg"/>
              <img className="akar-iconsheart"  loading="eager"  alt=""  src="/akariconsheart.svg"/>
              <Link to="/cart"><img  className="ant-designshopping-cart-outli-icon"  loading="eager"  alt=""  src="/antdesignshoppingcartoutlined.svg"/></Link>
            </div>
        </div>
    </>
  )
}

export default Navbar;
