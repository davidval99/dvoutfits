
import React, { useState } from 'react';
import "../CssFiles/Header.css";
import SocialFollow from "./SocialFollow";
import { Link } from 'react-router-dom';
import Login from "./LoginForm";

function Header() {

  return (
    <>
    <header className="header">
      <Link to='/'>{<img className="logoD" src="/images/dvLogo.svg"/>}</Link>
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