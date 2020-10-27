import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Navbar extends Component {
  render() {
    return (
      <div className='nav-bar'>
        <nav className='navbar navbar-light navbar-expand-lg'>
          <Link to='/' className='navbar-brand'>
            DAVID MILLER EXOTIC CARS
          </Link>
          <div className='collpase navbar-collapse'>
            <ul className='navbar-nav ml-auto'>
              <li className='navbar-item'>
                <Link to='/' className='nav-link'>
                  CARS COLLECTION
                </Link>
              </li>
              <li className='navbar-item'>
                <Link to='/add' className='nav-link'>
                  ADD NEW CAR
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
