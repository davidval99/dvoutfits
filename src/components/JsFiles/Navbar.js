import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import '../CssFiles/Navbar.css';
import "../CssFiles/SocialFollow.css";
import Dropdown from './Dropdown';
import Dropdown2 from './Dropdown2';
import Header from './Header';
import AddNewPost from "./add-new-post";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
    <Header />
      <nav className='navbar'>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Inicio
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Categorías <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li 
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/nosotros'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Nosotros <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown2 />}
          </li>
          <li className='nav-item'>
            <Link
              to='/faq'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Preguntas frecuentes
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/forum'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Preguntas y Sugerencias 
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;