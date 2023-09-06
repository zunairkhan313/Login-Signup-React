import logo from './logo.svg';
import './App.css';
import {auth,getAuth,app,setDoc,doc,createUserWithEmailAndPassword,db,signInWithEmailAndPassword}from '../src/Firebase'
import { useNavigate } from 'react-router-dom';

export default function App() {
  const navigate = useNavigate()
  const signup = ()=>{
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
  
    createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      try {
        await setDoc(doc(db, "users", user.uid), {
          name: name,
          email: email,
          password:password
        });
        alert("SignUp Successfull")
        navigate("/Login")
      } catch (e) {
        console.error("Error adding document: ", e);
      }


    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      console.log(errorCode);
    });
  }

  return (
    <div className="App">
      <h1>Signup</h1>
<input type="text" name="" id="name" placeholder='Name'/><br /><br />
<input type="email" name="" id="email" placeholder='Email'/><br /><br />
<input type="password" name="" id="password" placeholder='Password'/><br /><br />
<button id='sign' onClick={signup}>Signup</button>
<br /><br />
    </div>
  );
}


