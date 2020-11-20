import React, { Component } from "react";
import "../CssFiles/HomePage.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "../Home/Home";
import CarrouselComponent from "./CarrouselComponent";
import PublicityComponent from "./PublicityComponent";

function HomePage() {
  return (
    <BrowserRouter>
      <CarrouselComponent />
      <PublicityComponent />

      <ul className="products">
        <li>
          <div className="product">
            <img className="product-image" src="/images/d1.jpg" alt="product" />
            <div className="product-name">
              <a href="product.html">Pulsera</a>
            </div>
            <div className="product-brand">
              Pulsera de cristales checos y dijes de ojo turco{" "}
            </div>
            <div className="product-price">$10</div>
          </div>
        </li>
        <li>
          <div className="product">
            <img className="product-image" src="/images/d2.jpg" alt="product" />
            <div className="product-name">
              <a href="product.html">Pulsera</a>
            </div>
            <div className="product-brand">
              Pulsera de cristales checos y dijes de ojo turco{" "}
            </div>
            <div className="product-price">$10</div>
          </div>
        </li>
        <li>
          <div className="product">
            <img className="product-image" src="/images/d3.jpg" alt="product" />
            <div className="product-name">
              <a href="product.html">Pulsera</a>
            </div>
            <div className="product-brand">
              Pulsera de cristales checos y dijes de ojo turco{" "}
            </div>
            <div className="product-price">$10</div>
          </div>
        </li>
        <li>
          <div className="product">
            <img className="product-image" src="/images/p1.jpg" alt="product" />
            <div className="product-name">
              <a href="product.html">Pulsera</a>
            </div>
            <div className="product-brand">
              Pulsera de cristales checos y dijes de ojo turco{" "}
            </div>
            <div className="product-price">$10</div>
          </div>
        </li>
        <li>
          <div className="product">
            <img className="product-image" src="/images/p2.jpg" alt="product" />
            <div className="product-name">
              <a href="product.html">Pulsera</a>
            </div>
            <div className="product-brand">
              Pulsera de cristales checos y dijes de ojo turco{" "}
            </div>
            <div className="product-price">$10</div>
          </div>
        </li>
        <li>
          <div className="product">
            <img className="product-image" src="/images/p3.jpg" alt="product" />
            <div className="product-name">
              <a href="product.html">Pulsera</a>
            </div>
            <div className="product-brand">
              Pulsera de cristales checos y dijes de ojo turco{" "}
            </div>
            <div className="product-price">$10</div>
          </div>
        </li>
      </ul>
    </BrowserRouter>
  );
}

export default HomePage;
