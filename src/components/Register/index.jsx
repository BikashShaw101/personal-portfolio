import React, { useState } from 'react';

import './style.scss';

import { Link }from 'react-router-dom'

import Section from '../shared/section';
import Footer from '../footer'

const Register = () => {

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const register = async (ev) =>{
        ev.preventDefault();
        await fetch("http://localhost:4000/register",{
            method:'POST',
            body:JSON.stringify({username,password}),
            headers:{"Content-Type":"application/json"}
        });
    }

  return (
    <>
        <Section id="register" title="Register" background="golden">

            <form className='register' onSubmit={register}>
                <input type="text" 
                placeholder='Username' 
                autoComplete='off' 
                required 
                    value={username}
                    onChange={ev => setUsername(ev.target.value) }
                />
                <input type="text" 
                placeholder='Password' 
                autoComplete='off' 
                required 
                    value={password}
                    onChange={ev => setPassword(ev.target.value) }
                />
                <button type='submit'>Register</button>
            </form>
            <div className='redirect-info'>
                Already Registered <Link to={`/login`} className='link'><span>Login</span></Link>
            </div>

            <Link to={'/'} className='link'><div className="home">Home</div></Link>

        </Section>
        <Footer />

    </>
  )
}

export default Register;
