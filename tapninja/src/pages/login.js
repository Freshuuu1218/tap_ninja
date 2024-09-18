import {signInWithEmailAndPassword } from 'firebase/auth';
import React, {useState} from 'react';
import {auth} from './firebase'

const Login = () => {

        const [login, setLogin] = useState('');
        const [password, setPassword] = useState('');
        const handleLogin= async (e) => {
            e.preventDefault();
            try{
              await signInWithEmailAndPassword(auth, login, password)
                window.location.href='/profile'
                const user = auth.currentUser
                console.log(auth)
            }catch(error){console.log(error.message)}
        }

    return (

        <div>
            <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <input type='text' id='login' placeholder='Login' onChange={(e)=>setLogin(e.target.value)}></input>
            <input type='password' id='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}></input>
            <button type='submit' id='submitReg'>Login</button>
            </form>
        </div>
    )
}

export default Login