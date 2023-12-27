import React, { useState } from 'react'
import NavBar from '../components/NavBar/NavBar'
import './SearchPage.css';
import { IoSearchOutline } from 'react-icons/io5';
import Searches from '../components/Searches/Searches';
import Latest from '../components/Latest/Latest';
function SearchPage() {
    const [media, setMedia] = useState(true);
    const [SearchValue, setValue] = useState('');
    const mediaHandlerTrue = () => {
        setMedia(true);
    }
    const mediaHandlerFalse = () => {
        setMedia(false);
    }
    const ChangeHandler = (e) => {
        setValue(e.target.value);
    }
    const SubmitHandler = (e) => {
        e.preventDefault();
        console.log(SearchValue);
    }
  return (
    <div>
        <NavBar />
        <div  className='searcher'>
        <form onSubmit={SubmitHandler}>
            <input value={SearchValue} onChange={ChangeHandler} placeholder='Search'></input>
            <button type='Submit'> Search &nbsp; <IoSearchOutline /> </button>
            <div className='option'>
            <div className={media === true ? 'movie clicked' : 'movie'} onClick={mediaHandlerTrue}>Movies</div>
            <div className={media === false ? 'series clicked' : 'series'} onClick={mediaHandlerFalse}>Series</div>
        </div>
        </form>
        </div>
        {SearchValue === '' ? <Latest param = "trending" /> : <Searches param = {SearchValue} media = {media ? 'movie' : 'tv'}/>}
    </div>
  )
}

export default SearchPage