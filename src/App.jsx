import React from 'react';

import Intro from './components/intro';
import Members from './components/members';
import Research from './components/r&a';

import './app.scss';

window.onscroll = function() {myFunction()};

function myFunction() {

  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  // console.log(winScroll)
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  // console.log(height)
  var scrolled = (winScroll / height) * 100;

  document.getElementById("myBar").style.width = scrolled + "%";

}

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
