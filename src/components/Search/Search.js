import React, { useState } from 'react'
import './Search.css';
import { IoSearchOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
function Search() {
  const url = 'https://api.themoviedb.org/3/search/multi?include_adult=false&language=en-US&page=1';
  const [search , setSearch] = useState("");
  const inputHandler = (event) =>{
    setSearch(event.target.value);
    event.preventDefault();
  }
  console.log(search);
  return (
    <div className='Search'>
      <Link to="/search"> <div className='searching'><IoSearchOutline className='color' /> &nbsp; Search</div> </Link>
    </div>
  )
}

export default Search