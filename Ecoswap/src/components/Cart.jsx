import React from 'react'
import { Link } from 'react-router-dom'
import './Cart.css'
import Header from './Header';
import Footer from './Footer';
import { Axios } from 'axios';

function Cart({ userdetails, ogproducts }) {
  return (
    <>
      <Header headerTitle={"Cart"} />
      <div className="cart">
        <section className="home-label">
          <div className="rectangle-parent">
            <div className="frame-child" />
            <div className="product-frame">
              <div className="price-label">
                <div className="price-label-child" />
                <div className="product">Product</div>
                <div className="iphone-image">
                  <div className="price">Price</div>
                </div>
                <div className="frame-total">
                  <div className="quantity">Quantity</div>
                  <div className="subtotal">Subtotal</div>
                </div>
              </div>
              <div className="checkout-label">
                <img
                  className="checkout-label-child"
                  loading="eager"
                  alt=""
                  src="/group-146@2x.png"
                />
                <div className="shipping-info-frame">
                  <div className="iphone-12">
                    <p className="iphone-121">Iphone 12</p>
                  </div>
                </div>
                <div className="payment-links">
                  <div className="rs-25000000">Rs. 25,000.00</div>
                </div>
                <div className="privacy-policy-frame">
                  <div className="rectangle-group">
                    <div className="frame-item" />
                    <div className="footer-layout">1</div>
                  </div>
                  <div className="rs-2500000-wrapper">
                    <div className="rs-2500000">Rs. 25,000.00</div>
                  </div>
                  <button className='delete-item'>
                    <svg width="28" className='ant-designdelete-filled-icon' height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.625 7H20.125V4.8125C20.125 3.84727 19.3402 3.0625 18.375 3.0625H9.625C8.65977 3.0625 7.875 3.84727 7.875 4.8125V7H4.375C3.89102 7 3.5 7.39102 3.5 7.875V8.75C3.5 8.87031 3.59844 8.96875 3.71875 8.96875H5.37031L6.0457 23.2695C6.08945 24.202 6.86055 24.9375 7.79297 24.9375H20.207C21.1422 24.9375 21.9105 24.2047 21.9543 23.2695L22.6297 8.96875H24.2812C24.4016 8.96875 24.5 8.87031 24.5 8.75V7.875C24.5 7.39102 24.109 7 23.625 7ZM18.1562 7H9.84375V5.03125H18.1562V7Z" fill="#B88E2F" />
                    </svg>

                  </button>
                </div>
              </div>
            </div>
            <div className="rectangle-container">
              <div className="frame-inner" />
              <div className="cart-totals-wrapper">
                <h1 className="cart-totals">Cart Totals</h1>
              </div>
              <div className="subtotal-frame">
                <div className="total-frame">
                  <div className="subtotal-text">
                    <div className="subtotal1">Subtotal</div>
                    <div className="rs-25000001">Rs. 25,000.00</div>
                  </div>
                  <div className="total-price">
                    <div className="total">Total</div>
                    <div className="rs-25000002">Rs. 25,000.00</div>
                  </div>
                </div>
                <button className="group-button">
                  <div className="rectangle-div" />
                  <div className="check-out">Check Out</div>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="cart-page">
        <div className="cart-page-items">

        </div>
        <div className="checkout-box"></div>
      </div>
      <Footer />
    </>
  );
}

export default Cart
