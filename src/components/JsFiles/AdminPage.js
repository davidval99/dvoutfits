import React, { Component } from "react";
import "../CssFiles/HomePage.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "../Home/Home";
import CarrouselComponent from "./CarrouselComponent";
import Products from "./productPreview";
import PublicityComponent from "./PublicityComponent";
import NavbarAdmin from "./NavbarAdmin";

function AdminPage() {
  return (
    <BrowserRouter>
        <NavbarAdmin />
        <CarrouselComponent />
        <Products></Products>
        <PublicityComponent />
    </BrowserRouter>
  );
}

export default AdminPage;
