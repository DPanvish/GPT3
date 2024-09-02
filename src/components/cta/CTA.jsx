import React from 'react';
import './cta.css';

// CTA means Click To Action, this is used for our convenience

const CTA = () => {
  return (
    <div className="gpt3__cta">

      {/* Paragraph and Heading */}
      <div className="gpt3__cta-content">
        <p>Request Early Access to Get Started</p>
        <h3>Register today & start exploring the endless possibilities.</h3>
      </div>
      {/* Paragraph and Heading end */}

      {/* Button */}
      <div className="gpt3__cta-btn">
        <button type="button">Get Started</button>
      </div>
      {/* Button end */}

    </div>
  )
}

export default CTA
