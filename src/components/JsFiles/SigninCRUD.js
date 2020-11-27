import React , {useState, useEffect} from "react";
import fb from './Firebase';
import Signin from './SigninForm';
import Inicio from "./Inicio";
import Home from './HomePage';
import './LoginCRUD';

const SigninCRUD = () => {

    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [hasAccount, setHasAccount] = useState(false);
    


    const clearInputs = () => {
        setEmail('');
        setPasswordError('');
    }
    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }
   
    const handleSignIn = () => {
        clearErrors();
        fb
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch((err) => {
                switch (err.code) {
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break;
                    case "auth/weak.password":
                        setPasswordError(err.message);
                        break;

                }
            });}

    const authListener = () => {
        fb.auth().onAuthStateChanged((user) => {
            if (user) {
                clearInputs();
                setUser(user);
            } else {
                setUser("");
            }
        });
    };

    useEffect(() => {
        authListener();
    }, []);

    return (
        <div>
        {user ? (
             //<Home handleLogout={handleLogout} />
             <Inicio />
             
        ) : (
            <Signin 
            email ={email}
            setEmail = {setEmail}
            password = {password}
            setPassword = {setPassword}
            handleSignIn = {handleSignIn}
            hasAccount = {hasAccount}
            setHasAccount = {setHasAccount}
            emailError = {emailError}
            passwordError ={passwordError}
          />
        )}
    </div>
        
 
    );

};
export default SigninCRUD;