import React, { Component } from 'react';
import '../CssFiles/HomePage.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from '../Home/Home';
import CarrouselComponent from './CarrouselComponent';
import ProductPreview from "./productPreview";


function HomePage(){
    return(
        
        <BrowserRouter>
        < CarrouselComponent />
        < ProductPreview  />
        </BrowserRouter>

    )
  
}


export default HomePage;