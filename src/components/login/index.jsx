import React from 'react';

import './style.scss';

import Section from '../shared/section';
import Footer from '../footer';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
        <Section id="login" title="Login" background="golden">

            <form className='register' >
                <input type="text" 
                placeholder='Username' 
                autoComplete='off' 
                required 
                    
                />
                <input type="text" 
                placeholder='Password' 
                autoComplete='off' 
                required 
                    
                />
                <button type='submit'>Login</button>
            </form>
            <div className='redirect-info'>
                New user <Link to={`/register`} className='link'><span>Register yourself</span></Link>
            </div>

            <Link to={'/'} className='link'><div className="home">Home</div></Link>

        </Section>
        <Footer />
    </>
  )
}

export default Login;
