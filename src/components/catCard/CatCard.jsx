import React from 'react'
import Slider from 'infinite-react-carousel';
import './catCard.scss'
import { Link } from 'react-router-dom';

const CatCard = ({item}) => {
  return (
   <Link to='/gigs?cat=design' >
    <div className='catCard'>
        <div className="container">
          <img src={item.img} alt="" />
          <span className="desc">{item.desc}</span>
          <span className="title">{item.title}</span>
        </div>
    </div>
   </Link>
  )
}

export default CatCard