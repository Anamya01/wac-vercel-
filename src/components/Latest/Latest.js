import React from 'react'
import './Latest.css';
import { useState, useEffect } from 'react';
import { fetchData } from '../../axios';
import Cards from '../Cards/Cards';

function Latest(param) {
  const [Lists, setList] = useState([{}]);
    useEffect(() => {
      fetchData(param).then(res => setList(res.data.results))    
    }, []);
  return (
    <div className='container1'>
      { Lists === [] ? (<p>Loading</p>) :
        Lists.map(items => <Cards param={items} />)
      }
    </div>
  )
}

export default Latest

/*<div className='videos'>
<img src={`https://image.tmdb.org/t/p/original/${items.poster_path}`}></img>
</div>*/