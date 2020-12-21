import React, { Component } from "react";
import "../CssFiles/HomePage.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "../Home/Home";
import CarrouselComponent from "./CarrouselComponent";
import Products from "./productPreview";
import PublicityComponent from "./PublicityComponent";
import Cart from "./Cart";

export default class HomeScreen extends Component {
  render() {
    return (
      <BrowserRouter>
        <CarrouselComponent></CarrouselComponent>
        <div>
          <div className="content">
            <div className="main">
              <Products></Products>
            </div>
            <div className="sidebar">
              <Cart />
            </div>
          </div>
        </div>
        <PublicityComponent></PublicityComponent>
      </BrowserRouter>
    );
  }
}
