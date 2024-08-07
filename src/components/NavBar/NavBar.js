import React, { useState } from 'react';
import './NavBar.css';
import Search from '../Search/Search';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import used from '../../images/images.jpeg';
function NavBar() {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const [show,setShow] = useState(false);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/login');
    }
    catch (err) {
      console.log(err);
    }
  }
  const showHandlerOpen = ()=> {
    setShow(true);
  }
  const showHandlerClose = ()=> {
    setShow(false);
  }
  return (
    <div className='NavBar'>
      <div className='xplay'>
        <Link to='/' > <h1>Wac.</h1> </ Link>
        <a href='https://vistaio--omega.vercel.app/' className = 'vistaio-link'><p id='topstrem'></p></a>
      </div>
      <div className='user'>
        <Search className="srch"></Search>
        {user?.email ? 
        <div>
        <div className='profile' onClick={showHandlerOpen} onMouseLeave={showHandlerClose}>
          <p></p>
          <img src={used} alt='' ></img>
        </div>
        {show &&
         <div className='bars' onMouseOut={showHandlerClose} onMouseOver={showHandlerOpen}> 
        <Link to='/account'>
          <button className='acountbtn'>Account</button>
        </Link>
        <button className='acountbtn'
          onClick={handleLogout}>
          Logout
        </button>
      </div>}
      </div>  :  
          <div>
            <Link to='/login'>
              <button className='acountbtn'>Sign In</button>
            </Link>
            <Link to='/signup'>
              <button className='acountbtn'>
                Sign Up
              </button>
            </Link>
          </div>
      }
      </div>
    </div>
  )
}

export default NavBar;
