import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { GoMail } from 'react-icons/go'
import { Link } from 'react-router-dom'
import profilePic from '../../media/ts-profile-pic-square.png'
import NavBar from './NavBar/NavBar'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Projects from '../Projects/Projects';

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
                            <li><a href='https://github.com/tstrat'><FaGithub/></a></li>
                            <li><a href='https://linkedin.com/in/tstrat'><FaLinkedin/></a></li>
                            <li><Link to='/contact'><GoMail/></Link></li>
                        </ul>
                    </div>
                    <About/>
                </>
            }/>
            <Route path='/contact' component={Contact}/>
            <Route path='/projects' component={Projects}/>
        </Switch>
        </>
    )
}

export default Mobile;
