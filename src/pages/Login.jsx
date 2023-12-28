import React from 'react'
import { useState } from 'react';
import { Link , useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar'
import { UserAuth } from '../context/AuthContext';
import './Login.css';
function Login() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState('');
  const {user, logIn} = UserAuth('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await logIn(email, password);
      navigate('/');
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };
  return (
    <>
    <NavBar/>
    <div className='signin'>
      {
        error && <p>{error.substring(10)}</p>
      }
      <form onSubmit={handleSubmit} >
        <input className='ing' onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='email' autoComplete='email'></input>
        <input className='ing' onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='password'></input>
        <p><input type="checkbox"/>remember me</p>
        <button>Sign in</button>
        <div> <Link to='/signup'> Sign Up  </Link> </div>
      </form>
    </div>
    </>
  )
}

export default Login
