import React from 'react'
import './footer.scss'
import logo from '../images/logo.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Logo" className="footer-logo-img" />
      </div>
      <div className="footer-nav">
        <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
        <span className="footer-divider">|</span>
        <a href="/contact-us" className="footer-link">Contact Us</a>
        <span className="footer-divider">|</span>
        <a href="/about" className="footer-link">About</a>
        <span className="footer-divider">|</span>
        <a href="/testimonial" className="footer-link">Testimonial</a>
        <span className="footer-divider">|</span>
        <a href="/faq" className="footer-link">FAQ</a>
      </div>
    </footer>
  )
}

export default Footer
