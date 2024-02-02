import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <>
        <section className="wrapper-rectangle-frame-parent">
        <div className="wrapper-rectangle-frame">
          <img
            className="rectangle-frame-icon"
            alt=""
            src="/bg-forest.png"
          />
        </div>
        <div className="group-container">
          <div className="meubel-house-logos">
            <img
              className="meubel-house-logos-05-icon1"
              alt=""
              src="/sitelogo2.png"
            />
            <h1 className="cart1">Cart</h1>
          </div>
        </div>
        <div className="cart-frame">
          <div className="home1"><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Home</Link></div>
          <img
            className="dashiconsarrow-down-alt2"
            loading="eager"
            alt=""
            src="/dashiconsarrowdownalt2@2x.png"
          />
          <div className="cart2">Cart</div>
        </div>
        </section>
    </>
  )
}
