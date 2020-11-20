
import React, { useState } from 'react';

const Header = ({handleLogout}) => {

  return (
    
    <div>
        <a href="Login" onClick={handleLogout} >Logout</a>
    </div>
  );
}

export default Header;
