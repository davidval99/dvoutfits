import React , {useState, useEffect} from "react";
import fb from './Firebase';
import LoginForm from "./LoginForm";
import Inicio from "./Inicio";
import Home from './HomePage';

const LoginCRUD = () => {
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
    const handleLogin = () => {
        clearErrors();
        fb
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch((err) => {
                switch (err.code) {
                    case "auth/invalid-email":
                    case "auth/user-disable":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong.password":
                        setPasswordError(err.message);
                        break;

                }
            });
    }

    const handleLogout = () => {
        fb.auth().signOut();
    };

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
                <Inicio handleLogout={handleLogout} />
                
           ) : (
            <LoginForm 
                email ={email}
                setEmail = {setEmail}
                password = {password}
                setPassword = {setPassword}
                handleLogin = {handleLogin}
                hasAccount = {hasAccount}
                setHasAccount = {setHasAccount}
                emailError = {emailError}
                passwordError ={passwordError}
             />
           )}
       </div>

   );


};
export default LoginCRUD;