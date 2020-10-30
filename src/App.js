import React, { Component } from 'react';
import './App.css';
import Navbar from './components/JsFiles/Navbar';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Footer from './components/JsFiles/Footer';
import Historia from './components/JsFiles/Historia';
import OurProductsDescription from "./components/JsFiles/OurProductsDescription";
import HomePage from './components/JsFiles/HomePage';
import Ubicacion from './components/Ubicacion';
import Conformacion from './components/Conformacion';
import FAQ from './components/FAQ';



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
      <Route path="/nosotros/nuestrosProductos" component={OurProductsDescription}/>
      <Route path="/nosotros/ubicacion" component={Ubicacion} />
      <Route path="/nosotros/conformacion-empresa" component={Conformacion} />
      <Route path="/faq" component={FAQ} />
      
      </div>

    </main>
      
  <Footer />
  </div>
  </BrowserRouter>

  );
}

export default App;
