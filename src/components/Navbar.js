import React from 'react';
import history from '../actions/History';

const Navbar = () => (
  <nav className="navbar sticky-top navbar-dark bg-primary mb-3">
    <div className="container">
      <button type="button" className="navbar-brand btn btn-link" onClick={() => history.push('/')}>

        Black Widow CockTails
      </button>
    </div>
  </nav>
);
export default Navbar;
