import React from 'react';

import './style.scss';

const Section = ( {children ,id, className , title, background} ) => {
  return (
    <div className={`section ${className || "" } ${background === "dark" ? "dark" : background === "light" ? "light" : "golden" }`} id={id || ""}>
        <div className="content">
            {title && (
                <div className="section-title">
                    <h1>{title}</h1>
                </div>
            )}
            {children}
        </div>
    </div>
  )
}

export default Section;
