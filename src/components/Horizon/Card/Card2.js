import React from 'react'
import './Card2.css';

function Card2(props) {
  return (
    <div className='Card2'>
        <div className='imger2'>
            <img src={`https://image.tmdb.org/t/p/original/${props.link}`} ></img>
            <div className='modd2'>
            </div>
            <div className='content2'>
                    <h3>{}</h3>
                    <a href={props.url}><button>Watch +</button></a>
            </div>
        </div>
    </div>
  )
}

export default Card2