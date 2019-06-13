import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { NavLink, Link } from 'react-router-dom';
import { FaArrowLeft, FaBars } from 'react-icons/fa';
import './navbar.scss';
function NavBar(props) {
    const [ menuHide, toggleMenuHide ] = useState(false)
    function capitalize(str) {
        return str.slice(0,1).toUpperCase() + str.slice(1).toLowerCase()
    }

    const paths = ['about', 'skills', 'contact', 'projects']
    const { pathname } = props.location;
    let title = paths.includes(pathname.slice(1)) ? capitalize(pathname.slice(1)) : '404: Not-Found'


    return (
        <header className='navbar'>
            <h1 className='navbar--title'>{title}</h1>
            <FaBars onClick={ ()=> toggleMenuHide(!menuHide) }/>
            { menuHide ?
            <nav className='navbar--menu' onClick={ e => {
                toggleMenuHide(!menuHide)
                e.stopPropagation()
            }}>
                <ul onClick={ e =>e.stopPropagation() }>
                    <FaArrowLeft onClick={ () => toggleMenuHide(!menuHide) }/>
                    <Link to='/'><li>Home</li></Link>
                    <NavLink to='/about' activeClassName='active'><li>About</li></NavLink>
                    <NavLink to='/skills' activeClassName='active'><li>Skills</li></NavLink>
                    <NavLink to='/contact' activeClassName='active'><li>Contact</li></NavLink>
                    <NavLink to='/projects' activeClassName='active'><li>Projects</li></NavLink>
                </ul>
            </nav>
            : null
            }
        </header>
    );
};

export default withRouter(NavBar);
