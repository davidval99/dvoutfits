import React, { Component } from "react";
import "../CssFiles/HomePage.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "../Home/Home";
import CarrouselComponent from "./CarrouselComponent";
import Products from "./productPreview2";
import PublicityComponent from "./PublicityComponent";

function HomePage() {
  return (
    <BrowserRouter>
      <CarrouselComponent />
      <Products></Products>
      <PublicityComponent />
    </BrowserRouter>
  );
}

export default HomePage;
