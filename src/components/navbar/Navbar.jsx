import React, {useState} from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo.svg'
import './navbar.css';

// We can reuse this menu
const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt3">What is GPT?</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        {/* Logo */}
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="Logo" />
        </div>
        {/* Logo end */}

        {/* Navbar links */}
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
        {/* Navbar links end */}
      </div>
      
      {/* Sign in and Sign up */}
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      {/* Sign in and Sign up end */}

      {/* Menubar for smaller screens */}
      <div className="gpt3__navbar-menu">
        {
          toggleMenu 
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {
          toggleMenu && (
            <div className="gpt3__navbar-menu_container scale-up-center">
              <div className="gpt3__navbar-menu_container-links">
                <Menu />
                <div className="gpt3__navbar-menu_container-links-sign">
                  <p>Sign in</p>
                  <button type="button">Sign up</button>
                </div>
              </div>
            </div>
          )
        }
      </div>
      {/* Menubar end */}
    </div>
  )
}

export default Navbar