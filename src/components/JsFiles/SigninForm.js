import React, {useState} from "react";
import '../CssFiles/SigninForm.css';

const SigninForm = (props) => {
    
    const initialStateValues = {
        name: '',
        last_name: '',
        email: '',
        password: '',
        rePassword: '',
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
                <h1 className="formName"> Registrarse </h1>
                <li>
                    <label htmlFor="text">
                        Nombre
                    </label>
                    <input type="text" name="name" onChange={inputChange}>
                    </input>
                </li>
                <li>
                    <label htmlFor="text">
                        Apellido
                    </label>
                    <input type="text" name="last_name" onChange={inputChange}>
                    </input>
                </li>
                <li>
                    <label htmlFor="email">
                        Email
                    </label>
                    <input type="email" name="email" onChange={inputChange}>
                    </input>
                </li>
                <li>
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" name="password" onChange={inputChange}>
                    </input>
                </li>
                <li>
                    <label htmlFor="rePassword">Confirmar contraseña</label>
                    <input type="password" name="rePassword" onChange={inputChange}>
                    </input>
                </li>
                <button className="insert" id="insert">
                    Registrarse
                </button>
                
            </div>
        </form>
    )
};

export default SigninForm