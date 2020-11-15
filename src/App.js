import React, { Component } from 'react';
import './App.css';
import Navbar from './components/JsFiles/Navbar';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import { ChakraProvider } from "@chakra-ui/core";
import Footer from './components/JsFiles/Footer';
import Historia from './components/JsFiles/Historia';
import OurProductsDescription from "./components/JsFiles/OurProductsDescription";
import HomePage from './components/JsFiles/HomePage';
import Ubicacion from './components/Ubicacion';
import Conformacion from './components/Conformacion';
import FAQ from './components/JsFiles/FAQ';
import ProductForm from "./components/JsFiles/ProductForm";
import ProductInsert from "./components/JsFiles/ProductCRUD";
import { Container, Flex, Spinner, VStack } from "@chakra-ui/core";
import CommentSection from './components/JsFiles/CommentSection';



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
      <Route path= "/RegisterProduct" component={ProductInsert} />
      <Route path= "/forum" component={CommentSection} />
      </div>

    </main>
      
  <Footer />
  </div>
  </BrowserRouter>

  );
}

export default App;
