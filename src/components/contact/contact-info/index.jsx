import React from 'react';

import './style.scss';

import { FaPhoneAlt,FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactInfo = () => {
  return (
    <div className='contact-info-box'>
        <h4>
            We would be happy to answer any question you may have about our topic of discussion and other complexity of Question! 
        </h4>
        <div className="contact-option">
            <FaPhoneAlt />
            <span className="text">+91 123456789</span>
        </div>
        <div className="contact-option">
            <MdEmail />
            <span className="text">example@gmail.com</span>
        </div>
        <div className="temp">
          <FaUser/>
        </div>
    </div>
  )
}

export default ContactInfo;
