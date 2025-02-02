import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Let's Build Something amazing with GPT-3 OpenAI</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all excercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
         
        {/* Input and Button */}
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="Button">Get Started</button>
        </div>
        {/* Input and Button end */}

        {/* People Requests */}
        <div className="gpt3__header-content__people">
          <img src={people} alt="People" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
        {/* People Requests */}
      </div>

      {/* AI Image */}
      <div className="gpt3__header-image">
          <img src={ai} alt="AI" />
      </div>
      {/* AI Image end */}
    </div>
  )
}

export default Header
