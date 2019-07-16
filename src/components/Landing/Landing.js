import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowDown } from 'react-icons/fa';
import './landing.scss';

function Landing() {
    return (
        <div className='landing'>
            <h1 className='landing__name'>Travis Stratton</h1>
            <h2 className='landing__title'>Full Stack Web Developer</h2>
            <Link className='landing__link' to='/about'><FaArrowDown/></Link>
        </div>
    )
}

export default Landing;
