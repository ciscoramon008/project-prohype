import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-md navbar-light bg-light py-md-3' id='header-nav'>
            <div className='container'>
                <Link to='/' className='navbar-brand'>COMPANY</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className='navbar-nav ml-auto'>
                        <li className='nav-item mx-1'>
                            <NavLink exact activeClassName='active-nav-link' to='/about' className='navbar-nav-link nav-link'>About</NavLink>
                        </li>
                        <li className='nav-item mx-1'>
                            <NavLink exact activeClassName='active-nav-link' to='/services' className='navbar-nav-link nav-link'>Services</NavLink>
                        </li>
                        <li className='nav-item mx-1'>
                            <NavLink exact activeClassName='active-nav-link' to='/join-us' className='navbar-nav-link nav-link'>Join Us</NavLink>
                        </li>
                        <li className='nav-item mx-1'>
                            <NavLink exact activeClassName='active-nav-link' to='/your-idea' className='navbar-nav-link nav-link'>Your Idea</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;