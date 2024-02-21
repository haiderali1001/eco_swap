import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

export default function Header({headerTitle}) {
  return (
    <>
        <section className="wrapper-rectangle-frame-parent">
        <div className="wrapper-rectangle-frame">
          <img
            className="rectangle-frame-icon"
            alt=""
            src="/bg-forest.png"
            draggable="false"
          />
        </div>
        <div className="group-container">
          <div className="meubel-house-logos">
            <img
              className="meubel-house-logos-05-icon1"
              alt=""
              src="/sitelogo.png"
              draggable="false"
            />
            <h1 className="cart1">{headerTitle}</h1>
          </div>
        </div>
        <div className="cart-frame">
          <div className="home1"><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Home</Link></div>
          <img
            className="dashiconsarrow-down-alt2"
            loading="eager"
            alt=""
            src="/dashiconsarrowdownalt2@2x.png"
            draggable="false"
          />
          <div className="cart2">{headerTitle}</div>
        </div>
        </section>
    </>
  )
}
