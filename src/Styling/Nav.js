import React from 'react';

const Nav = () => {
  return(
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a className="nav-link" href="#/">Overview</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#/purchases">Purchases</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#/budget">Budget</a>
      </li>
    </ul>
  );
};

export default Nav;
