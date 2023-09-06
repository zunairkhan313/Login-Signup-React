import React from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../src/Firebase';
import { useNavigate } from 'react-router-dom';
import img from './img/IMG_0695.jpg'


const Dashboard = () => {
  const navigate = useNavigate()
  onAuthStateChanged(auth, (user) => {
    if (user) {

    } else {
      navigate("/")
    }
  })
  return (
    <div >
        <div>
<center>

      <h1>Welcome to Dashboard</h1>
</center>
        </div>
        <center>

      <div>
        <img src={img} alt="" width={800} />
      </div>
        </center>
      <br />
      <center>

      <button style={{width : 400 , padding : 10 , background : "Black" , color : "white"}} onClick={() => signOut(auth)}>Logout</button>
      </center>
    </div>
  )
}

export default Dashboard    