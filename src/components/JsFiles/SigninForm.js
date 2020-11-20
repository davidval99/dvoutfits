import React, {useState} from "react";
import '../CssFiles/SigninForm.css';
import { Link } from 'react-router-dom';
import LinkButton from './LinkButton';


const SigninForm = (props) => {

    const {
        name,
        setName,
        lastName,
        setLastName,
        email,
        setEmail,
        password,
        setPassword,
        handleSignIn,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
    } = props;

    return (
        <form className="form">
            <div className="form-container">
                <h1 className="formName"> Registrarse </h1>
                <li>
                    <label htmlFor="text">
                        Nombre
                    </label>
                    <input type="text"  autoFocus required value={name} onChange={(e) => setName(e.target.value)}>
                    </input>
                </li>
                <li>
                    <label htmlFor="text">
                        Apellido
                    </label>
                    <input type="text"  autoFocus required value={lastName} onChange={(e) => setLastName(e.target.value)}>
                    </input>
                </li>
                <li>
                    <label htmlFor="email">
                        Email
                    </label>
                    <input type="email"  autoFocus required value={email} onChange={(e) => setEmail(e.target.value)}>
                    </input>
                    <p className="errorMsg">{emailError}</p>
                </li>
                <li>
                    <label htmlFor="password">Contraseña</label>
                    <input type="password"  autoFocus required value={password} onChange={(e) => setPassword(e.target.value)}>
                    </input>
                    <p className="errorMsg">{passwordError}</p>
                </li>
                <div>
                    <LinkButton to='/' className="insert" id="insert" onClick={handleSignIn}>Registrarse</LinkButton>
                </div>
                <li>
                    <Link to="/login">Iniciar sesión</Link>
                </li>  
            </div>
        </form>
    )
};

export default SigninForm