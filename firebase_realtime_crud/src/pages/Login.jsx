import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import { getauth, googleAuthProvider } from '../../firebase_db';

const Login = () => {

    const handleLogin = async() => {
       try{
        let user = await signInWithPopup(getauth,googleAuthProvider);
       }catch(err){
        console.log(err);
        return false;
       }
    }


  return (
    <div align="center">
        <h2>Login User</h2>
        <button onClick={ () => handleLogin() }>Google</button>
    </div>
  )
}

export default Login