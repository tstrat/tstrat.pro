import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa'
import profilePic from '../../media/ts-profile-pic-square.png';
import NavBar from './NavBar/NavBar';
import About from '../About/About';

function Mobile() {
    return (
        <>
        <NavBar/>
        <Switch>
            <Route path='/about' render={() =>
            <>
                <div className='about__short'>
                    <img src={profilePic} alt='Travis Stratton'/>
                    <ul className='about__short__contact'>
                        <li><FaGithub/> /tstrat</li>
                        <li><FaLinkedin/> /in/tstrat</li>
                        <li><FaPhone/> (520) 955 - 0860</li>
                    </ul>
                </div>
                <About/>
            </>}/>
        </Switch>
        </>
    )
}

export default Mobile;
