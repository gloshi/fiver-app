import React, { useState } from 'react'
import GigCard from '../../components/gigCard/GigCard'

import './Gigs.scss'
import { gigs } from "../../data";


const Gigs = () => {

  const [open,setOpen] = useState(false)
  const [type,setType]= useState("Best Selling")
  const[card,setCard]= useState([])

  const types = ['Newest', 'Best Selling', 'Popular']
  const onClickItem = (id) => {
    setType(types[id]);
    setOpen(false);
  };


  return (
    <div className="gigs">
      <div className="container">
      <span className="breadcrumbs">Liverr  Graphics & Design </span>
      <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with Liverrs AI artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input  type="number" placeholder="min" />
            <input  type="number" placeholder="max" />
            <button >Apply</button>
          </div>
          <div className="right">
          <span className="sortBy">Sort by</span>
          <span className="sortType">{type}</span>
          <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
          {open && <div className='rightMenu'>
            {
              types?.map((el,id) => (
                <span onClick={() => onClickItem(id)} key={el}>{el}</span>
              ))
            }
            
          </div>}
          </div>
          </div>
          <div className="cards" >
          {gigs?.map((gig) => (
            <>
            <div  key={gig.username} > 
            <GigCard card={card} key={gig.id} item={gig} />
            </div>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gigs