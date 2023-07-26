import React from 'react';

import Intro from './components/intro';
import Members from './components/members';
import Research from './components/r&a';

import './app.scss';

const App = () => {
  return (
    <div>

      <div className="header">
        <div className="progress-container">
          <div className="progress-bar" id="myBar"></div>
        </div>
      </div>

      <Intro />
      <Members />
      <Research />
      
    </div>
  )
}

export default App;
