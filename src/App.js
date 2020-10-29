import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Footer from './components/Footer';
import Historia from './components/Historia';
import HomePage from './components/HomePage';


function App() {

  
  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };

  return (
    <BrowserRouter>
    
    <div className="grid-container">
      <Navbar />
      
    

    <main className="main">
      <div className="content">
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/nosotros/historia" component={Historia} />
      
      </div>

    </main>
      
  <Footer />
  </div>
  </BrowserRouter>

  );
}

export default App;
