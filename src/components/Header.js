
import React, { useState } from 'react';
import "./Header.css";
import SocialFollow from "./SocialFollow";


function Header() {

  return (
    <>
    
    <header className="header">
    <img className="logoD" src="/images/dvLogo.svg" />
    <SocialFollow />
    <div className="header-links">
        <a href="cart.html">Cart</a>
        <a href="signin.html">Sign In</a>
    </div>
</header>


    </>
  );
}

export default Header;