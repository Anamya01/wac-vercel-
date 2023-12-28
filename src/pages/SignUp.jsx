import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar';
import {UserAuth} from '../context/AuthContext'
import './Login.css';
function SignUp() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const {user, signUp} = UserAuth('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <NavBar/>
    <div className='signin'>
      <form onSubmit={handleSubmit}>
        <input className='ing' onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='email' autoComplete='email'></input>
        <input className='ing' onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='password'></input>
        <div>
          <p><input type="checkbox"/>remember me</p>
        </div>
        <button>Sign Up</button>
        <div> <Link to='/login'> Sign In  </Link> </div>
      </form>
    </div>
    </>
  )
}

export default SignUp
