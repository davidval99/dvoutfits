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
        setValues({...initialStateValues})
    };

    return (
        <form className="productForm" onSubmit={insertProduct}>
            <div className="form-group">
                <h1 className="formName"> Registrar Nuevo Producto </h1>
                <text> Nombre </text>
                <input type="text" name="name" onChange={inputChange} value={values.name}/>
                <text> Código </text>
                <input type="text" name="code" onChange={inputChange} value={values.code}/>
                <text> Categoría </text>
                <input type="text" name="category" onChange={inputChange} value={values.category}/>
                <text> Descripción </text>
                <textarea name="description" onChange={inputChange} value={values.description}/>
                <text> Precio </text>
                <input type="text" name="price" onChange={inputChange} value={values.price}/>
                <text> Cantidad </text>
                <input type="text" name="quantity" onChange={inputChange} value={values.quantity}/>
                <button className="insert" id="insert">
                    Insertar
                </button>
            </div>
        </form>
    )
};

export default ProductForm
