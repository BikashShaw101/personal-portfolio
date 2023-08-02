import React from 'react';

import './style.scss';

// components---- >

import Navigation from './navigation-bar';
import IntroContent from './Intro-content';

// images ------->

import cloud from '../../images/cloud.png';
import cloudSoft from '../../images/cloud-soft.png';

const Intro = () => {
  return (
    <div className="Intro-section">
      <div className="vector-img" id='parallax'></div>

      <img src={cloud} alt="" className='cloud'/>
      <img src={cloudSoft} alt="" className='cloud-soft'/>

      <div className="content">
        <Navigation />
        <IntroContent />
      </div>
    </div>
  )
}

export default Intro;
