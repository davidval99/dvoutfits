import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import '../CssFiles/SigninForm.css';
import Inicio from './Inicio';
import LinkButton from './LinkButton';

const LoginForm = (props) => {
    
    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
    } = props;


    return (
        <form className="form">
            <div className="form-container">
                <h1 className="formName"> Iniciar sesión </h1>
                <li>
                    <label htmlFor="email">
                        Email
                    </label>
                    <input type="email"  autoFocus required value={email} onChange={(e) => setEmail(e.target.value)} >
                    </input>
                    <p className="errorMsg">{emailError}</p>
                </li>
                <li>
                    <label htmlFor="password">Contraseña</label>
                    <input type="password"  required value={password} onChange={(e) => setPassword(e.target.value)}>
                    </input>
                    <p className="errorMsg">{passwordError}</p>
                </li>
                <div>
                    <LinkButton to='/' className="insert" id="insert" onClick={handleLogin}>Iniciar</LinkButton>
                </div>
                
                <li>
                    <Link to="/signin">Registrarse</Link>
                </li>
            </div>
        </form>
    )
};

export default LoginForm