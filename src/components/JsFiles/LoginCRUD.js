import React , {useState, useEffect, Component} from "react";
import fb from './Firebase';
import LoginForm from "./LoginForm";
import Inicio from "./Inicio";
import Home from './HomePage';
import Header from './Header';
import LinkButton from './LinkButton';
import '../CssFiles/LoginForm.css';

import { Link } from 'react-router-dom';

import { signInWithGoogle } from './Firebase';
import { auth } from './Firebase';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookSquare,
    faInstagram,
    faGoogle
  } from "@fortawesome/free-brands-svg-icons";

  

  class App extends React.Component {

    constructor() {
      super();
  
      this.state = {
        currentUser: null
      };
    }
  
    unsubscribeFromAuth = null;
  
    componentDidMount() {
      this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
        this.setState({ currentUser: user });
      });
    }
  
    componentWillUnmount() {
      this.unsubscribeFromAuth();
    }
  
    render() {
      return (
        <div className='user-info'>
          {
  
            this.state.currentUser ?
  
              (<div>
                <div>
                  <img src={this.state.currentUser.photoURL} />
                </div>
                <div>Name: {this.state.currentUser.displayName}</div>
                <div>Email: {this.state.currentUser.email}</div>
  
                <button onClick={() => auth.signOut()}>LOG OUT</button>
              </div>
              ) :
              
              <form className="form">
                  <div className="form-container">
                    <li>
                      <button className="insert" onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</button>
                    </li>
                  </div>
              </form>
              
    
  
          }
        </div >
      );
    }
  }
  
  
  export default App;