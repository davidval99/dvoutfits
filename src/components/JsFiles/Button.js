import React from 'react';
import '../CssFiles/Button.css';
import { Link } from 'react-router-dom';
import Login from '../JsFiles/LoginForm';
  

export function Button() {
  return (
    <Link to='Login'>
      <button className='btn'>Sign Up</button>
    </Link>
  );
}