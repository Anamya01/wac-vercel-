import React, { useState } from 'react'
import './SearchList.css';
import alt from '/Users/anamyavats/Downloads/RecPo/vplay/client/src/images/images.jpeg'
import { FaPlay } from "react-icons/fa";
function SearchList(param) {
  console.log(+ param.media);
  //defining address;
  let address = 'to';
  if(param.param.original_language == 'ja' ){
    address = 'xyz';
  }

  //URL
  let url = `https://vidsrc.to/embed/${param.param.media_type}/${param.param.id}`

  //TITLE
    let title = param.param.title;
  //RELEASE DATE
    let rs = param.param.release_date;
  //BACKDROP PATH
    let backdrop_path = param.param.backdrop_path;
    backdrop_path = backdrop_path == null ? `https://image.tmdb.org/t/p/original/${param.param.poster_path}` : `https://image.tmdb.org/t/p/original/${backdrop_path}`;
    
  //FIXING TITLE
    if(title === undefined){
      title = param.param.name;
    }
  //FIXING RELEASE DATE
    if(rs === undefined){
      rs = param.param.first_air_date;
    }
  //CHECKING MEDIA TYPE
    if(param.param.media_type === undefined){
      url = `https://vidsrc.${address}/embed/${param.media}/${param.param.id}`
    }

  //SHORTENING THE TITLE & OVERVIEW
    let shorten = title ? title.substring(0, 15) : '';
    shorten = title > shorten ? shorten + '...' : shorten;
    let overview = param.param.overview;
    overview = overview ? overview.substring(0,100) : '';
    overview = overview < param.param.overview ? overview + '...' : overview;

    
  return (
    <div className='cardSS'>
      <div className='img2'>
        <img src={backdrop_path} alt={param.title}></img>
      </div>
      <div className='mod2'></div>
      <div className='detailsCard2'>
      <p className='title2'>{shorten}</p>
      <br></br>
      <p className='date2'>{rs}</p>
      </div>
      <a className='tear2' href={url}> <button><FaPlay /></button> </a>
    </div>
  )
}

export default SearchList