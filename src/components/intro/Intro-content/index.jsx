import React from 'react';

import './style.scss';

// import hand from '../../../images/hand.png';
import nikhil from '../../../images/nikhil.png';
import bikash from '../../../images/Me2.png';

import sqaure1 from '../../../images/sqaure1.svg';
import sqaure2 from '../../../images/sqaure2.svg';
import circle1 from '../../../images/circle1.svg';
import circle2 from '../../../images/circle2.svg';
import circle3 from '../../../images/circle3.svg';

import CallToAction from '../../shared/CallToAction';

import { BsAwardFill } from 'react-icons/bs';
import { FaHeadSideVirus } from 'react-icons/fa';

const IntroContent = () => {
  return (
    <div className="intro-content">
        <div className="layout">
            <div className="left-col">
                <h1 className="title">
                    <span className="small-text">
                        <span className="text">Welcome, </span>
                        {/* <span className="icon">
                            <img src={hand} alt="hand" />
                        </span> */}
                        <span className="text">This is</span>
                    </span>
                    <span className="big-text">Enbik Cognition</span>
                </h1>
                <p>Enbik Cognition Channel contributes its 100% Efforts to generate Trustworthy content , but Every-one have some limitations , if there is any mistakes occur or false <strong>Analysis</strong> found. Please Make sure to <em>Rectify</em> the Error</p>
                <CallToAction text="About Us" />
            </div>
            <div className="right-col">

                <div className='animate'>
                    <img src={nikhil} alt="Nikhil" id='nikhil'/>
                    <img src={sqaure1} alt="sqaure" className="sqaure sqaure1"/>
                    <img src={sqaure2} alt="sqaure" className="sqaure sqaure2"/>

                        {/* circle animation element  */}

                    <img src={circle1} alt="sqaure" className="sqaure circle1"/>
                    <img src={circle2} alt="sqaure" className="sqaure circle2"/>
                    <img src={circle3} alt="sqaure" className="sqaure circle3"/>
                </div>

                <div className='animate animate2'>
                    <img src={bikash} alt="bikash" id='bikash'/>
                    <img src={sqaure1} alt="sqaure" className="sqaure sqaure1"/>
                    <img src={sqaure2} alt="sqaure" className="sqaure sqaure2"/>

                        {/* circle animation element  */}

                    <img src={circle1} alt="sqaure" className="sqaure circle1"/>
                    <img src={circle2} alt="sqaure" className="sqaure circle2"/>
                    <img src={circle3} alt="sqaure" className="sqaure circle3"/>
                </div>
            

                <div className="highlights horizontal">
                    <div className="icon">
                        <BsAwardFill />
                    </div>
                    <div className="text">
                        Activate <span>Cognition</span>
                    </div>
                </div>

                <div className="highlights vertical">
                    <div className="icon">
                        <FaHeadSideVirus />
                    </div>
                    <div className="text">
                        Think <span>logically</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default IntroContent;
