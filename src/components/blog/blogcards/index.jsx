import React from 'react';

import './style.scss';

import Arrow from '../../shared/arrow';

const Blogcards = ({image,title,user,date,description}) => {
  return (
    <div className="blog-card2">
      <div className="image-section">
        <img src={image} alt={title} />
      </div>
      <div className="content-section">
        <div className="info-bar">
          <div className="username">By {user}</div>
          <div className="posted-date">{date}</div>
        </div>
        <h3> {title} </h3>
        <p> {description} </p>
        <div className="readmore-cta">
          <span className="text">Read More</span>
          <Arrow />
        </div>
      </div>
    </div>
  )
}

export default Blogcards;
