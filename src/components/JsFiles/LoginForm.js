import React, {useState} from "react";

import { Link } from 'react-router-dom';
import '../CssFiles/SigninForm.css';

const LoginForm = (props) => {
    
    const initialStateValues = {
       
        email: '',
        password: '',
    };

    const [values, setValues] = useState(initialStateValues);

    const inputChange = (e) =>{
        const {name, value } = e.target;
        setValues({...values, [name]: value}) //con los tres puntos copia
    };

    const insertUser = (e) => {
        e.preventDefault();
        console.log(values);
        props.addOrEditUser(values)
    };

    return (
        <form className="form" onSubmit={insertUser}>
            <div className="form-container">
                <h1 className="formName"> Iniciar sesión </h1>
                <li>
                    <label htmlFor="email">
                        Email
                    </label>
                    <input type="email" name="usuario" >
                    </input>
                </li>
                <li>
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" name="password">
                    </input>
                </li>
                <button className="insert" id="insert">
                    Iniciar
                </button>
            
                <li>
                    <Link to="/signin">Registrarse</Link>
                </li>
            </div>
        </form>
    )
};

export default LoginForm