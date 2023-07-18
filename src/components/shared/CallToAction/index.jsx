import React from 'react';

import './style.scss';
import Arrow from '../arrow';


const CallToAction = ({ text }) => {
  return (
    <div className="call-to-action">
        <span className="text">{text}</span>
        <Arrow />
    </div>
  )
}

export default CallToAction;