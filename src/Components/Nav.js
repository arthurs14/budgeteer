import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Nav.css';

const Nav = () => {
  return(
    <nav>
      <Link to='/'>Overview</Link>
      <Link to='/purchases'>Purchases</Link>
      <Link to='/budget'>Budget</Link>
    </nav>
  );
};

export default Nav;
