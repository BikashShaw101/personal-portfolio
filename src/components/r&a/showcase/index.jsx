import React from 'react';

import './style.scss';

import Arrow from '../../shared/arrow';

const Showcase = ({ data,transition }) => {
  return (
    <div className='project-showcase'>
      {data.map((project) => (
        <div key={project.name} className={`showcase-item ${transition === 'zoomout' ? 'zoomOut' : transition === 'zoomIn' ? 'zoomin' : "" }`}>
            <div className="meta-content">
                <h3>{project.name}</h3>
                <div className="go-to-cta">
                    <span className="text">Check Out Now</span>
                    <Arrow />
                </div>
            </div>
            <img src={project.media.thumbnail} alt='item' />
        </div>
      ))}
    </div>
  )
}

export default Showcase;
