import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar';
import {UserAuth} from '../context/AuthContext'
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
    <div>
      <NavBar/>
      <form onSubmit={handleSubmit}>
        <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='email' autoComplete='email'></input>
        <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='password'></input>
        <button>SignUp</button>
        <div>
          <p><input type="checkbox"/>remember me</p>
          <p>need help?</p>
        </div>
        <div> <Link to='/login'> SignIn  </Link> </div>
      </form>
    </div>
    </>
  )
}

export default SignUp