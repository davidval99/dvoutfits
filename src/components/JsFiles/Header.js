
import React, { useState } from 'react';
import "../CssFiles/Header.css";
import SocialFollow from "./SocialFollow";
import Login from "./LoginForm";

function Header() {

  return (
    <>
    <header className="header">
    <img className="logoD" src="/images/dvLogo.svg" />
    <SocialFollow />
    <div className="header-links">
        <a href="cart.html">Cart</a>
        <a href="Login">Sign In</a>
    </div>
</header>


    </>
  );
}

export default Header;