import React, { useState } from 'react'
import './Card1.css'
import test from "/Users/anamyavats/Downloads/RecPo/vplay/client/src/images/vieew.jpeg"
function Card1(props) {
    return (
    <div className='Card1'>
        <div className='imger'>
            <img src={`https://image.tmdb.org/t/p/original/${props.link}`} ></img>
            <div className='modd'>
            </div>
            <div className='content'>
                    <h3>{props.title}</h3>
                    <p>{props.overview}</p>
            </div>
            <a className='zera' href={props.url}><button>Watch +</button></a>
        </div>
    </div>
  )
}

export default Card1