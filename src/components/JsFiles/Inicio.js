
import React, { useState } from 'react';

const Header = ({handleLogout}) => {

  return (
    
    <div>
        <h1>Bienvenido</h1>
        <a href="Login" onClick={handleLogout} >Logout</a>
    </div>
  );
}

export default Header;
