import react from 'react'

import { app, auth, signInWithEmailAndPassword, doc, setDoc, db } from '../src/Firebase';
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const navigate = useNavigate() 
  const Login = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        alert("Login Succesfull")
        navigate("/dashboard")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        navigate("/")
      });


  }
  return (

    <div className="App">
    <h1>Login</h1>
<input type="email" name="" id="email" placeholder='Email'/><br /><br />
<input type="password" name="" id="password" placeholder='Password'/><br /><br />
<button id='sign' onClick={Login}>Login</button>
<br /><br />
  </div>


  );


}


