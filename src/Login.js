import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import './Login.css'

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const signIn = e => {
       e.preventDefault();
       signInWithEmailAndPassword(auth, email, password)
       .then((userAuth)=>{
          navigate('/');
       })
       .catch(error => alert(error.message))

    // some firebase login 
    }

    const register = e => {
        e.preventDefault();
    
        createUserWithEmailAndPassword(auth ,email, password).then((userAuth)=>{
 // if register successfully created a new user email and password
            console.log(userAuth);
            // alert("User created");
            if(auth){
                 navigate('/');
            }
      })
     .catch(error => alert(error.message));

    // firebase register
    } 

  return (
    <div className='login'>
       <Link to='/'>
        <img 
            className='login__logo'
            src='https://pngimg.com/uploads/amazon/amazon_PNG12.png'
            alt=''
        />
        </Link>
 
        <div className='login__container'>
            <h1>Sign-in</h1>

            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange=
                {e=>setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type='password' value={password} 
                onChange={e=>setPassword(e.target.value)} />

                <button className='login__signInButton' type='submit' onClick={signIn}>Sign In</button>
            </form>
            
            <p>
                By siging-in you agree to AMAZON FAKE
                CLONE Condition of Use & Sale. Please
                see our Privacy Notice, our Cookies Notice 
                and our Intrest-Based Ads Notice.
            </p>
            <button className='login__createAccountButton' type='submit' onClick={register}>Create Your Amazon Account</button>
        </div>
       
    </div>
  )
}

export default Login