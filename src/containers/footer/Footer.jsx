import React from 'react'
import gpt3Logo from '../../assets/logo.svg';
import './footer.css';

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">

      {/* Footer heading */}
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">Do you want to step into the future before others</h1>
      </div>
      {/* Footer heading end */}

      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>

      {/* Links container */}
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="Logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-123567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      {/* Links container end */}

      {/* Copyrights section */}
      <div className="gpt3__footer-copyright">
        <p>&#169; 2024 GPT-3. All rights reserved.</p>
      </div>
      {/* Copyrights section end */}
    </div>
  )
}

export default Footer
