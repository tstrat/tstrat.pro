import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { NavLink, Link } from 'react-router-dom';
import { FaArrowRight, FaBars } from 'react-icons/fa';
import './navbar.scss';
function NavBar(props) {
    const [ menuHide, toggleMenuHide ] = useState(true)
    function capitalize(str) {
        return str.slice(0,1).toUpperCase() + str.slice(1).toLowerCase()
    }

    const paths = ['about', 'projects', 'contact']
    const { pathname } = props.location;
    let title = paths.includes(pathname.slice(1)) ? capitalize(pathname.slice(1)) : '404: Not-Found'


    return (
        <header className='navbar'>
            <h1 className='navbar--title'>{title}</h1>
            <FaBars className='navbar--icon' onClick={ ()=> toggleMenuHide(!menuHide) }/>
            <nav className={`navbar--menu ${menuHide? '' : 'show'}`} onClick={ e => {
                toggleMenuHide(!menuHide)
                e.stopPropagation()
            }}>
                <ul onClick={ e => e.stopPropagation() }>
                    <FaArrowRight onClick={ () => toggleMenuHide(!menuHide) }/>
                    <Link to='/' ><li>Home</li></Link>
                    <NavLink to='/about' activeClassName='active' onClick={ () => toggleMenuHide(!menuHide) }><li>About</li></NavLink>
                    <NavLink to='/projects' activeClassName='active' onClick={ () => toggleMenuHide(!menuHide) }><li>Projects</li></NavLink>
                    <NavLink to='/contact' activeClassName='active' onClick={ () => toggleMenuHide(!menuHide) }><li>Contact</li></NavLink>
                </ul>
            </nav>
        </header>
    );
};

export default withRouter(NavBar);
