import React, { Component } from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import '../CssFiles/OurProductsDescription.css';

class OurProductsDescription extends Component{
    render() {
        return (
            <div className="items">
                <div >
                    <ul>
                        <div>
                            <h1 className="ourProductsTitle">Nuestros Productos</h1>
                        </div>

                        <div >
                            <img className="ourProductsImage" src="/images/ourProducts.png"/>
                        </div>
                    </ul>
                </div>
                <div className="ourProductsContainer">
                    <ul>
                        <div >
                            <p>
                                En nuestra tiende usted puede encontrar gran variedad de productos y accesorios
                                para vestir de forma unica y con estilo.<br/>

                                Ofrecemos direntes tipos de prendas de ropa, además de accesorios como pulseras, collares y aretes.<br/>
                                Cada uno de nuestros productos son hechos con los mejores materiales del mercado y con nuestras propias manos,
                                garantizando así la calidad del producto y ofreciendo estilos unicos.<br/>
                                En DV-outfits usted encontrará las prendas y accesorios necesarios para construir su estilo personal.<br/>
                            </p>
                        </div>
                    </ul>
                </div>
            </div>
        );
    }
}

export default OurProductsDescription;