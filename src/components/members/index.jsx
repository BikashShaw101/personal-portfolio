import React from 'react';
// import { NavLink } from 'react-router-dom';

import { AiFillYoutube,AiFillInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { MdWebhook } from 'react-icons/md';

import './style.scss';

import Bikash from '../../images/Me2.png';
import Nikhil from '../../images/nikhil.png';

import Section from '../shared/section';

const Members = () => {
  return (
    <Section
        background="dark"
        id="members"
    >
        <div className="member-content-wrapper">
            <div className="left-col">
                <div className='img-wrapper'>

                    {/* card 1 */}

                    <div className='card'>
                        <img src={Bikash} alt="member1" />
                        <div className='overlay1'>
                            <p>Bikash Shaw</p>
                        </div>
                    </div>

                    {/* card 2 */}

                    <div className='card'>
                        <img src={Nikhil} alt="member1" id='nikhil' />
                        <div className='overlay2'>
                            <p>Nikhil Shaw</p>
                        </div>  
                    </div>
                </div>
                
            </div>
            <div className="right-col">
                <h2>Members</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, laborum omnis, quaerat aperiam, earum natus inventore eligendi doloremque velit exercitationem molestias ratione eos nobis porro odit! Cumque ipsum, quia ducimus fuga delectus nam saepe natus error eveniet et quisquam earum.</p>
                <div className='icons'>
                    <a href="https://www.youtube.com/channel/UCE2a1zrbL9f3wC_1ZfvEDfQ" target='blank'>{<AiFillYoutube />}</a>
                    <a href="https://www.facebook.com/vicky.shaw.376258" target='blank'>{<BsFacebook />}</a>
                    <a href="www.google.com" target='blank'>{<AiFillInstagram />}</a>
                    <a href="www.google.com" target='blank'>{<MdWebhook/>}</a>
                </div>
            </div>
        </div> to=""
    </Section>
  )
}

export default Members;
