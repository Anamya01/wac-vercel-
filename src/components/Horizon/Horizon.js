import React from 'react'
import Card1 from './Card/Card1';
import Card2 from './Card/Card2';
import { useState,useEffect } from 'react';
import { fetchData } from '../../axios';
import './Horizon.css';
function Horizon(param) {
  const [Lists, setList] = useState([{}]);
    useEffect(() => {
      fetchData(param).then(res => setList(res.data.results))    
    }, []);

    const title = Lists[0].title;
    const overview = Lists[0].overview;
    const backdrop = Lists[0].backdrop_path;
    let url = `https://vidsrc.to/embed/movie/${Lists[0].id}`;
    console.log('t'+title,overview,backdrop,url);
  return (
    <div className='Horizon'>
      <Card1 title={title} backdrop={backdrop} overview={overview} url={url} link={backdrop}/>
      <Card2 title={title} backdrop={backdrop} overview={overview} url={url} link={backdrop}/>
    </div>
  )
}

export default Horizon