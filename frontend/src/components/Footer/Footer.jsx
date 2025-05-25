import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className='footer-content-left'>
            <img src={assets.logo} alt=""/>
            <p>EatNow is an innovative food delivery app designed to offer users convenient access to a variety of dishes from local restaurants. 
              It provides a seamless, user-friendly interface for browsing menus, adding items to a cart, and proceeding to checkout. 
              The app includes features like real-time cart updates, total price calculations, and promo code application for discounts. 
              Users can also track their order and manage items within their cart with ease. Tomato aims to enhance the overall dining experience 
              by combining a comprehensive food selection with a smooth digital ordering process.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className='footer-content-center'>
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>

            </ul>
        </div>
        <div className='footer-content-right'>
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-232-654-4346</li>
                <li>contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright">Copyright 2024 @ EatNow.com - All rights Reserved.</p>
    </div>
  )
}

export default Footer
