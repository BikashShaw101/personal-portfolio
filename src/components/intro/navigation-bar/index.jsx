import React from 'react';

import './style.scss';
import CallToAction from '../../shared/CallToAction';

import logo from '../../../images/EnbikCognition.png'

const Navigation = () => {
  return (
    <div className="top-navigation-bar">
        <div className="app-logo">
            <img src={logo} alt="EnbikCognition" />
        </div>

        <div className="navigation">
            <span className="navigation-item">Skills</span>
            <span className="navigation-item">Blogs</span>
            <span className="navigation-item">Articles</span>
            <span className="navigation-item">Research</span>
            <CallToAction text="Contact Us" />
        </div>
    </div>
  )
}

export default Navigation;
