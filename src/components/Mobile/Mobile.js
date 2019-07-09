import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { GoMail } from 'react-icons/go'
import profilePic from '../../media/ts-profile-pic-square.png'
import NavBar from './NavBar/NavBar'
import About from '../About/About'
import Contact from '../Contact/Contact'

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
                            <li><FaGithub/></li>
                            <li><FaLinkedin/></li>
                            <li><GoMail/></li>
                        </ul>
                    </div>
                    <About/>
                </>
            }/>
            <Route path='/contact' component={Contact}/>
        </Switch>
        </>
    )
}

export default Mobile;
