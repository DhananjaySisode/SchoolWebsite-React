import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <nav className='nav'>
            <ul className="nav-links">
                <NavLink className='nav-link' to='/'><li>Home</li></NavLink>
                <NavLink className='nav-link' to='/about'><li>About US</li></NavLink>
                <NavLink className='nav-link' to='/admission'><li>Admission</li></NavLink>
                <NavLink className='nav-link' to='/contact'><li>Contact US</li></NavLink>
            </ul>
        </nav>
    )
}

export default Nav
