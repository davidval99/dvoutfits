import React, {Component} from "react";
import "./App.css";
import Navbar from "./components/JsFiles/Navbar";
import {BrowserRouter, Route, Link} from "react-router-dom";
import store from "./store";
import {Provider} from "react-redux";
import {ChakraProvider} from "@chakra-ui/core";
import Footer from "./components/JsFiles/Footer";
import Historia from "./components/JsFiles/Historia";
import OurProductsDescription from "./components/JsFiles/OurProductsDescription";
import HomePage from "./components/JsFiles/HomePage";
import AdminPage from "./components/JsFiles/AdminPage"
import Ubicacion from "./components/JsFiles/Ubicacion";
import Conformacion from "./components/JsFiles/Conformacion";
import FAQ from "./components/JsFiles/FAQ";
import ProductForm from "./components/JsFiles/ProductForm";
import ProductInsert from "./components/JsFiles/ProductCRUD";
import Login from "./components/JsFiles/LoginCRUD";
import Signin from "./components/JsFiles/SigninCRUD";
import PromoCrud from "./components/JsFiles/Admin/ProductAdminCrud";
import PromoAdminCrud from "./components/JsFiles/Admin/PromoAdminCrud";
import BannerCrud from "./components/JsFiles/Admin/AdvertismentAdminCrud";
import Inicio from "./components/JsFiles/Inicio";
import ContactInsert from "./components/JsFiles/ContactCRUD";
import {Container, Flex, Spinner, VStack} from "@chakra-ui/react";
import CommentSection from "./components/JsFiles/CommentSection";
import Header from "./components/JsFiles/Header";

function App() {
    const openMenu = () => {
        document.querySelector(".sidebar").classList.add("open");
    };
    const closeMenu = () => {
        document.querySelector(".sidebar").classList.remove("open");
    };

    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="grid-container">
                    <Header/>
                    <Navbar/>
                    <main className="main">
                        <div className="content">
                            <Route path="/" exact={true} component={HomePage}/>
                            <Route path="/nosotros/historia" component={Historia}/>
                            <Route
                                path="/nosotros/nuestrosProductos"
                                component={OurProductsDescription}
                            />
                            <Route path="/nosotros/ubicacion" component={Ubicacion}/>
                            <Route
                                path="/nosotros/conformacion-empresa"
                                component={Conformacion}
                            />
                            <Route path="/faq" component={FAQ}/>
                            <Route path="/forum" component={CommentSection}/>
                            <Route path="/registrarProducto" component={ProductInsert}/>
                            <Route path="/nosotros/ubicacion" component={Ubicacion}/>
                            <Route path="/login" component={Login}/>
                            <Route path="/signin" component={Signin}/>
                            <Route path="/inicio" component={Inicio}/>
                            <Route path="/contact" component={ContactInsert}/>
                            <Route path="/ProductCrud" component={PromoCrud}/>
                            <Route path="/PromoCrud" component={PromoAdminCrud}/>
                            <Route path="/AdvertisementCrud" component={BannerCrud}/>
                            <Route path="/AdminPage" component={AdminPage}/>
                        </div>
                    </main>
                    <Footer/>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
