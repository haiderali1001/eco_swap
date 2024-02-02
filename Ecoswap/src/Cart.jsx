import React from 'react'
import {Link} from 'react-router-dom'
import './Cart.css'
import Header from './components/header';

function Cart(){
  return (
    <>
    
    <div className="cart">
    <Header/>
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
                <div className="rs-25000000">Rs. 250,000.00</div>
              </div>
              <div className="privacy-policy-frame">
                <div className="rectangle-group">
                  <div className="frame-item" />
                  <div className="footer-layout">1</div>
                </div>
                <div className="rs-2500000-wrapper">
                  <div className="rs-2500000">Rs. 25,000.00</div>
                </div>
                <img
                  className="ant-designdelete-filled-icon"
                  loading="eager"
                  alt=""
                  src="/icon-delete.svg"
                />
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
      <section className="warranty-protection-frame">
        <div className="feature-wrapper">
          <div className="feature">
            <div className="help-text">
              <img
                className="trophy-1-icon"
                loading="eager"
                alt=""
                src="/trophy-1.svg"
              />
              <div className="text">
                <h3 className="high-quality">High Quality</h3>
                <div className="certified-products">Certified products</div>
              </div>
            </div>
            <div className="email-field">
              <img
                className="guarantee-icon"
                loading="eager"
                alt=""
                src="/guarantee.svg"
              />
              <div className="email-field-child" />
              <div className="text1">
                <h3 className="warranty-protection">Warranty Protection</h3>
                <div className="over-1-years">Over 1 years</div>
              </div>
            </div>
            <div className="help-text1">
              <img
                className="shipping-icon"
                loading="eager"
                alt=""
                src="/shipping.svg"
              />
              <div className="text2">
                <h3 className="free-shipping">Free Shipping</h3>
                <div className="order-over-1000">Order over 1000 Rs</div>
              </div>
            </div>
            <div className="help-text2">
              <img
                className="customer-support-icon"
                loading="eager"
                alt=""
                src="/customersupport.svg"
              />
              <div className="text3">
                <div className="support">24 / 7 Support</div>
                <div className="dedicated-support">Dedicated support</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="feature-frame" />
        <div className="frame-group">
          <div className="footer-link-parent">
            <div className="footer-link">
              <h3 className="ecoswap">Ecoswap.</h3>
              <div className="lovely-professional-university-container">
                <p className="lovely-professional-university">
                  Lovely Professional University ,
                </p>
                <p className="jalandhar-punjab">Jalandhar, Punjab</p>
                <p className="india">144411 INDIA</p>
              </div>
            </div>
            <div className="group-div">
              <div className="frame-parent1">
                <div className="links-parent">
                  <div className="links">Links</div>
                  <div className="home-group">
                    <div className="home2">Home</div>
                    <div className="shop1">Shop</div>
                    <div className="about1">About</div>
                    <div className="contact1">Contact</div>
                  </div>
                </div>
                <div className="help-parent">
                  <div className="help">Help</div>
                  <div className="payment-options-parent">
                    <div className="payment-options">Payment Options</div>
                    <div className="returns">Returns</div>
                    <div className="privacy-policies">Privacy Policies</div>
                  </div>
                </div>
              </div>
              <div className="newsletter-parent">
                <div className="newsletter">Newsletter</div>
                <div className="ecoswap-footer-parent">
                  <div className="ecoswap-footer">
                    <input
                      className="enter-your-email"
                      placeholder="Enter Your Email Address"
                      type="text"
                    />
                    <div className="ecoswap-footer-child" />
                  </div>
                  <button className="ecoswap-footer1">
                    <div className="subscribe">SUBSCRIBE</div>
                    <div className="ecoswap-footer-item" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="line-parent">
            <div className="line-div" />
            <div className="ecoswap-all-rights">
              2023 ecoswap. All rights reverved
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}

export default Cart
