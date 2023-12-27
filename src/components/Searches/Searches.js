import React from 'react'
import './Searches.css';
import { useState, useEffect, useCallback } from 'react';
import SearchList from './SearchList/SearchList';
import Latest from '../Latest/Latest';
function Searches(param) {
    const query = param.param;
    const media = param.media;
  const [Lists, setList] = useState([{}]);
  const changeList = useCallback(async() => {

    
    const url = `https://api.themoviedb.org/3/search/${media}?query=${query}&include_adult=false&language=en-US&page=1`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDQ3OTVkODA4ODg5ZTQ3ZmI3NjBkYWI0NjViMTVlNyIsInN1YiI6IjY1NjZkODVjYTM0OTExMDEzOGU2OGIyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ylMHn_m3pln3igMmb4lx34vPeA6FyzKCFEe7lHwPWvI'
      }
    };
    // const url = `https://consumet-api-af3e.vercel.app/movies/flixhq/${query}?page=1`;

    fetch(url,options)
      .then(res => res.json())
      .then(json => setList(json.results))
      .catch(err => console.error('error:' + err));
  });
  
    useEffect(() => {
        changeList();
    }, [query,media]);
    console.log(Lists);
  return (
    <div className='containerS'>
      { Lists === undefined ? (<Latest />) :
        Lists.map(items => <SearchList param={items} media = {media} />)
      }
    </div>
  )
}

export default Searches

/*<div className='videos'>
<img src={`https://image.tmdb.org/t/p/original/${items.poster_path}`}></img>
</div>*/