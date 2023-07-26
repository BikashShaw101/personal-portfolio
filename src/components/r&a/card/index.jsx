import React from 'react';

import './style.scss';

const Card = ({name}) => {
  return (
    <div className='container'>
        <a href="#">{name}</a>
    </div>
  )
}

export default Card;
