import React, { useState, useEffect, Component } from "react";
import fb from "./Firebase";
import LoginForm from "./LoginForm";
import Inicio from "./Inicio";
import Home from "./HomePage";
import Header from "./Header";
import LinkButton from "./LinkButton";
import "../CssFiles/LoginForm.css";

import { Link } from "react-router-dom";

import { signInWithGoogle } from "./Firebase";
import { auth } from "./Firebase";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      localStorage.setItem("localUserEmail", this.state.currentUser.email);
      localStorage.setItem("localUserName", this.state.currentUser.displayName);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="user-info">
        {this.state.currentUser ? (
          <form className="form">
            <div className="form-container">
              <h1 className="formName"> Bienvenido</h1>
              <div>
                <img src={this.state.currentUser.photoURL} />
              </div>
              <li>Nombre: {this.state.currentUser.displayName}</li>
              <li>Email: {this.state.currentUser.email}</li>
              <li className="nav-item">
                <Link
                  to={{
                    pathname: "/UserPurchases",
                    state: this.state.currentUser.email,
                  }}
                >
                  Ver Ordenes de Compra
                </Link>
              </li>

              <button className="insert" onClick={() => auth.signOut()}>
                LOG OUT
              </button>
            </div>
          </form>
        ) : (
          <div justify-content="center" className="form-container">
            <li>
              <h1 className="formName"> Iniciar sesión </h1>
            </li>

            <button className="insert" onClick={signInWithGoogle}>
              Continuar con Google
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
