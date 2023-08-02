import React from 'react';

import './style.scss';

import Section from '../shared/section';
// import { scrollToSection } from '../utils/helper';

const Footer = () => {
  return (
    <Section
        id='footer'
        title='Details'
        background="dark"
    >

    <div className="footer-container">
        <div>Not designed yet</div>
        <div className="copyright">
            <span>&#169; </span>
            <span> {new Date().getFullYear()}</span>
            <span> Enbik Cognition</span>
        </div>
    </div>

    </Section>
  )
}

export default Footer
