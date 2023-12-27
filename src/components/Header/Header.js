import React from 'react'
import './Header.css';
import { useState, useEffect } from 'react';
import { fetchData } from '../../axios';
function Header(param) {
  const [Lists, setList] = useState([{}]);
    useEffect(() => {
      fetchData(param).then(res => setList(res.data.results))    
    }, []);

    const title = Lists[0].title;
    const overview = Lists[0].overview;
    const backdrop = Lists[0].backdrop_path;
    let url = `https://vidsrc.to/embed/${Lists[0].media_type}/${Lists[0].id}`;
  return (
    <div className='container'>
      <div className='header_img'>
            <img src={`https://image.tmdb.org/t/p/original/${backdrop}`} alt=''></img>
        </div>
        <div className='overlay'>
            
        </div>
        <div className='details'>
          <h4>{title}</h4>
          <p>{overview}</p>
          <a href={url}><button>Watch +</button></a>
        </div>
    </div>
  )
}

export default Header