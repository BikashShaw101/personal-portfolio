import React from 'react';

import './style.scss';

import Navigation from '../intro/navigation-bar';

const Nav = () => {
  return (
    <div className="nav-global">
      <div className='nav-container'>
        <Navigation />
      </div>
    </div>
  )
}

export default Nav;
