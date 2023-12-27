import React, { useState } from 'react'
import './Cards.css';
import { FaPlay } from "react-icons/fa";
import { Modal } from '@mui/base';
import BasicModal from '../Modal/Modal';
function Cards(param) {
  const [modal , setModal] = useState(false);
  const modalHandler = () => {
    console.log('shld work');
    setModal(true);
  }
  let url = `https://vidsrc.to/embed/${param.param.media_type}/${param.param.id}`
    let title = param.param.title;
    let rs = param.param.release_date;
    if(title === undefined){
      title = param.param.name;
    }
    if(rs === undefined){
      rs = param.param.first_air_date;
    }
    if(param.param.media_type === undefined){
      url = `https://vidsrc.to/embed/movie/${param.param.id}`
    }
    let shorten = title ? title.substring(0, 15) : '';
    shorten = title > shorten ? shorten + '...' : shorten;
  return (
    <div className='card'>
      <div className='img'>
        <img src={`https://image.tmdb.org/t/p/original/${param.param.backdrop_path}`} alt={param.title}></img>
      </div>
      <div className='mod'></div>
      <div className='detailsCard'>
      <p className='title'>{shorten}</p>
      <br></br>
      <p className='date'>{rs}</p>
      </div>
      <div className='tear'> <button><BasicModal data = {param} url = {url} className="modalBasic" /></button> </div>
    </div>
  )
}

export default Cards