import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
     <div className='footer__coloum'>
        <div className='footer__1'>
            
            <ul>
            <h3>Get to know us</h3>
                <li>Career</li>
                <li>Blog</li>
                <li>About Amazon</li>
                <li>Investor Relations</li>
                <li>Amazon Devices</li>
                <li>Amazon Science</li>
            </ul>
        </div>
        <div className='footer__1'>
            <ul>
            <h3>Make Money with Us</h3>
                <li>Sell products on Amazon</li>
                <li>Sell on Amazon Business </li>
                <li>Sell apps on Amazon</li>
                <li>Become an Affiliate</li>
                <li>Avertise Your Product</li>
                <li>Self-Publish with Us</li>
                <li>Host an Amazon Hub</li>
              <li>{'>'}See More Make Money with Us</li>
            </ul>
        </div>

        <div className='footer__1'>
            <ul>
            <h3>Amazon Payment Products</h3>
                <li>Amazon Bussines Card</li>
                <li>Shop with Points</li>
                <li>Reload Your Balance</li>
                <li>Amazon Currency Converter</li>
            </ul>
        </div>

        <div className='footer__1'>
            <ul>
            <h3>Let Us Help You</h3>
                <li>Amazon and COVID-19</li>
                <li>Your Account</li>
                <li>Your Order</li>
                <li>Shipping Rates & Policies</li>
                <li>Returns & Replacements</li>
                <li>Manage Your Content and Devices</li>
                <li>Amazon Assistant</li>
                <li>Help</li>
            </ul>
        </div>
    </div>
    
    </div>
  )
}

export default Footer