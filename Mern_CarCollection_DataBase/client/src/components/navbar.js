import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className='site-header'>
      <a className='skip-link' href='#main-content'>Skip to main content</a>
      <nav className='site-nav container' aria-label='Primary navigation'>
        <Link to='/' className='brand'>
          David Miller’s Garage
        </Link>
        <div className='nav-links'>
          <NavLink exact to='/' activeClassName='active'>Collection</NavLink>
          <NavLink to='/add' activeClassName='active'>Add car</NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
