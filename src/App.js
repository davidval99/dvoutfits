import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import Historia from './components/Historia';
import SocialFollow from './components/SocialFollow';

function App() {

  
  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };

  return (
    <Router>
    
    <div className="grid-container">
    <Navbar />
    <Home />
    

    <main className="main">
      <div className="content">
      <Route path="/nosotros/historia" component={Historia} />
        <ul className="products">
          <li>
            <div className="product">
                <img className="product-image" src="/images/d1.jpg" alt="product" />
                <div className="product-name">
                  <a href="product.html">Pulsera</a>
                </div>
                <div className="product-brand">Pulsera de cristales checos y dijes de ojo turco </div>
                <div className="product-price">$10</div>
              </div>
          </li>
          <li>
            <div className="product">
                <img className="product-image" src="/images/d2.jpg" alt="product" />
                <div className="product-name">
                  <a href="product.html">Pulsera</a>
                </div>
                <div className="product-brand">Pulsera de cristales checos y dijes de ojo turco </div>
                <div className="product-price">$10</div>
              </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="/images/d3.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">Pulsera</a>
              </div>
              <div className="product-brand">Pulsera de cristales checos y dijes de ojo turco </div>
              <div className="product-price">$10</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="/images/p1.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">Pulsera</a>
              </div>
              <div className="product-brand">Pulsera de cristales checos y dijes de ojo turco </div>
              <div className="product-price">$10</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="/images/p2.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">Pulsera</a>
              </div>
              <div className="product-brand">Pulsera de cristales checos y dijes de ojo turco </div>
              <div className="product-price">$10</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="/images/p3.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">Pulsera</a>
              </div>
              <div className="product-brand">Pulsera de cristales checos y dijes de ojo turco </div>
              <div className="product-price">$10</div>
            </div>
          </li>
        </ul>
      </div>

    </main>
      <Footer />
    
  </div>
  </Router>

  );
}

export default App;
