import React from 'react'

import './projectCard.scss'
import { Link } from 'react-router-dom';

const ProjectCard = ({item}) => {
  return (
   <Link to='/' >
    <div className='projectCard'>
        <div className="container">
          <img src={item.img} alt="" />
          <div className="info">
            <img src={item.pp} alt="" />
            <div className="texts">
              <h2>{item.cat}</h2>
              <span>{item.username}</span>
            </div>
          </div>
        </div>
    </div>
   </Link>
  )
}

export default ProjectCard