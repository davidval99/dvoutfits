import React, {useState} from "react";
import '../CssFiles/ProductForm.css';

const ProductForm = (props) => {
    const initialStateValues = {
        name: '',
        code: '',
        category: '',
        description: '',
        price: '',
        quantity: '',
    };

    const [values, setValues] = useState(initialStateValues);

    const inputChange = (e) =>{
        const {name, value } = e.target;
        setValues({...values, [name]: value}) //con los tres puntos copia
    };

    const insertProduct = (e) => {
        e.preventDefault();
        console.log(values);
        props.addOrEditProduct(values)
    };

    return (
        <form className="productForm" onSubmit={insertProduct}>
            <div className="form-group">
                <h1 className="formName"> Registrar Nuevo Producto </h1>
                <text> Nombre </text>
                <input type="text" name="name" onChange={inputChange}/>
                <text> Codigo </text>
                <input type="text" name="code" onChange={inputChange}/>
                <text> Categoria </text>
                <input type="text" name="category" onChange={inputChange}/>
                <text> Descripcion </text>
                <textarea name="description" onChange={inputChange}/>
                <text> Precio </text>
                <input type="text" name="price" onChange={inputChange}/>
                <text> Cantidad </text>
                <input type="text" name="quantity" onChange={inputChange}/>
                <button className="insert" id="insert">
                    Insertar
                </button>
            </div>
        </form>
    )
};

export default ProductForm
