import React from 'react';
import './NavBar.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Home';
import Movies from './Movies';
import Favorites from './Favorites';
import Account from './Account';

function navBar(){
    return (
        <Router>
            <div>
                <nav className='NavBar-Container'>
                    <ul className='nav-list'>
                        <li className='title'>Movie Insider</li>
                        <li className='nav-item'><Link className='nav-link' to="/">Home</Link></li>
                        <li className='nav-item'><Link className='nav-link' to="/movies">Movies</Link></li>
                        <li className='nav-item'><Link className='nav-link' to="/favorites">Favorites</Link></li>
                        <li className='nav-item'><Link className='nav-link' to="/account">Account</Link></li>
                    </ul>
                </nav>
            </div>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/movies' element={<Movies />}/>
                <Route path='/favorites' element={<Favorites />}/>
                <Route path='/account' element={<Account />}/>
            </Routes>
        </Router>
    );
};

export default navBar;

/*
        <Router>
            <div>
                <nav className='NavBar-Container'>
                    <ul className='nav-list'>
                        <li className='title'>Movie Insider</li>
                        <li className='nav-item'><Link className='nav-link' to="/">Home</Link></li>
                        <li className='nav-item'><Link className='nav-link' to="/movies">Movies</Link></li>
                        <li className='nav-item'><a className="nav-link" href='#'>Favorites</a></li>
                        <li className='nav-item'><a className="nav-link" href='#'>Account</a></li>
                    </ul>
                </nav>
            </div>
        </Router>
*/