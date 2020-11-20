import React, { useEffect } from "react";
import { db } from "./Firebase";
import "../CssFiles/productPreview.css";

const ProductPreview = () => {
    const [products, setProducts] = React.useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const productsCollection = await db.collection("Products").get();
            setProducts(
                productsCollection.docs.map((doc) => {
                    return doc.data();
                })
            );
        };
        fetchProducts();
    }, []);

    return (
        <>
            <div className="catalog">
                <div className="title"> Articulos Destacados </div>
                <ul className="products">
                    {products.map((product) => (
                    <li>
                        <div className="product">
                            <a href={"product.html"} >
                                <img className="product-image"  src={product.image} />
                            </a>
                            <div className="pro-name">
                                <a>{product.name}</a>
                            </div>
                            <div className="product-price">Precio: ₡{product.price}</div>
                        </div>
                    </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default ProductPreview;