import React from "react";
import ProductForm from "./ProductForm";
import { db } from './Firebase';

const Products = () => {

    const addOrEditProduct = async (productObject) => {
        await db.collection("Products").doc().set(productObject);
    }

    return (
        <div>
            <ProductForm addOrEditProduct={addOrEditProduct} />
        </div>
    )

};
export default Products;